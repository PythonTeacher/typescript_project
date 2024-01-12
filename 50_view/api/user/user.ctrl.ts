import { NextFunction, Request, Response } from "express";
import User from "../../model/user";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

// 로그인여부 체크하기
const checkLogin = async (req: Request, res: Response, next: NextFunction) => {
  // 1. 쿠키에서 토큰을 가져옴
  const token = req.cookies.x_auth;

  if(!token) {
    // 쿠키가 없어도 열려야 하는 페이지
    if (req.url === "/" || req.url === "/user/login" || req.url === "/user/signup")
      return next();
    else return res.render("user/login");
  }

  // 2. JWT로 토큰을 복호화한 후 user를 찾음
  // _id + secretKey => verify로 찾으면 _id (payload, 토큰에 담을 데이터)만 넘어옴
  try {
    const _id = jwt.verify(token, "secretKey");  
    const result = await User.findById({ _id });

    if (!result) {
      return res.status(404).json({ message: "유효한 토큰이 아닙니다." });
    }
    res.locals.user = { name: result.name, role: result.role };
    next();
  } catch(e) {
    console.error(e);
    res.clearCookie("x_auth");
    return res.render("user/login"); // 유효하지 않은 토큰인 경우
  }
};

// 회원가입
// - 성공 : 201 응답, 생성된 User 객체 반환 (201 : Created)
// - 실패 : 입력값 누락 시 400 반환 (400 : Bad Request)
//          userId가 중복된 경우 409 반환 (409 : Conflict)
const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name)
    return res.status(400).json({ message: "필수값이 입력되지 않았습니다." });

    try {
      const result = await User.findOne( { email });
      if (result) {
        if (result) return res.status(409).json({ message: "이미 사용중인 E-mail입니다." });
      }

      // bcrypt : 단방향 해시 함수
      // salt 생성 -> hash 단방향 암호화
      const saltround = 10; // salt 자릿수
      const salt = await bcrypt.genSalt(saltround);

      const hashedPassword = await bcrypt.hash(password, salt);    
      const user = new User({ email, password: hashedPassword, name });
      await user.save();

      res.status(200).render("user/login");
    } catch(e) {
      console.error(e);
      return res.status(500).json({ message: "회원가입 시 오류가 발생했습니다." });
    }
};

// 로그인
// - 성공 : id, pwd값이 일치하면 로그인 성공
// - 실패 : id, pwd값이 입력되지 않은 경우 400 응답 (400: Bad Request)
//          id, pwd가 일치하지 않은 경우 404 응답
const login = async (req: Request, res: Response) => {

  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send("필수값이 입력되지 않았습니다.");

  try {
    // id, pwd 확인
    const result = await User.findOne({ email });
    if (!result) return res.status(404).json({ message: "가입되지 않은 계정입니다." });

    const check = await bcrypt.compare(password, result.password);

    if (!check) {
      return res.status(500).json({ message: "비밀번호가 올바르지 않습니다." });
    }
    
    // 인증방법 : 서버 기반 인증(session id 발급), 토큰 기반 인증(token 발급)
    // 비밀번호가 맞다면 signed 토큰 생성 발급 (jsonwebtoken)
    // JWT 토큰
    // - 서버가 로그인을 완료한 클라이언트에게 발급해주는 긴 문자열
    // - 이 문자열에는 사용자의 인증정보가 담겨져 있으며 클라이언트는 서버로 요청할 때마다 이 정보를 보내주어야 함
    // - 서버가 JWT 토큰을 발급할 때 클라이언트에게 보낼 데이터에 반드시 서명(sign)을 해야 함
    // - 다시 클라이언트에서 서버로 JWT 토큰을 보낼때는 서버에서 토큰을 검증(verify) 함       
    // jwt.sign(payload(토큰에 담을 데이터), secretKey(키, 검증시에도 필요))
    // - sign시 기본 알고리즘은 HS256 알고리즘 (다른 알고리즘을 적용하려면 algorithm 옵션을 주면 됨)
    const token = jwt.sign(result._id.toString(), "secretKey"); // user._id + 'secretKey' -> 토큰 생성
    console.log(token);

    // 토큰 저장 : 쿠키, local storage..
    // httpOnly : 웹서버를 통해서만 쿠키에 접근할 수 있도록 함 (javascript로 쿠키정보를 얻지 못하도록 함)
    res.cookie("x_auth", token, { httpOnly: true });

    // 하나의 request와 response에서 공유할 수 있는 변수
    res.locals.user = { name: result.name, role: result.role };
    console.log(res.locals.user);
    
    res.status(200).render("index");  // redirect는 req, res 객체가 새로 생성되므로 안됨
  } catch(e) {
    console.error(e);
    return res.status(500).json({ message: "로그인 시 오류가 발생했습니다." });
  }
}

const logout = (req: Request, res: Response,) => {
  // 1. 쿠키에서 토큰을 가져옴
  const token = req.cookies.x_auth;
  if (!token) return res.render("user/login");

  res.clearCookie("x_auth");
  res.status(200).redirect("/");
};

export { checkLogin, signup, login, logout };