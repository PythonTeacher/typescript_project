import { Router } from "express";
import music_router from "./music";
import movie_router from "./movie";
import user_router from "./user";
import { checkLogin } from "./user/user.ctrl";

const router = Router();

// 로그인여부 체크
router.use(checkLogin);

router.get("/", (req, res) => {
  res.render("index");
})

// 라우팅 설정
router.use("/music", music_router);
router.use("/movie", movie_router);
router.use("/user", user_router);

export default router;