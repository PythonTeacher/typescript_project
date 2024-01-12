import { Router } from "express";
import { list, detail, create, update, remove } from "./movie.ctrl";

const router = Router();

// 라우팅 설정
router.get("/", list);
router.get("/:id", detail);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;