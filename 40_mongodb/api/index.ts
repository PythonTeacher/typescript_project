import { Router } from "express";
import music_router from "./music";
import movie_router from "./movie";

const router = Router();

// 라우팅 설정
router.use("/music", music_router);
router.use("/movie", movie_router);

export default router;