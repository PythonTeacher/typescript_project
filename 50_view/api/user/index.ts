import { Router } from "express";
import { signup, login, logout } from "./user.ctrl";

const router = Router();

// 라우팅 설정
router.get("/login", (req, res) => {
  res.render("user/login");     // 로그인 페이지 보여주기
});
router.get("/signup", (req, res) => {
  res.render("user/signup");    // 회원가입 페이지 보여주기
});
router.get("/logout", logout);  // 로그아웃 처리

router.post("/login", login);   // 로그인 처리
router.post("/signup", signup); // 회원가입 처리

export default router;