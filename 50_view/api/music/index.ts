import { Router } from "express";
import { list, detail, create, update, remove } from "./music.ctrl";

const router = Router();

// 라우팅 설정
router.get("/", list);
router.get("/new", (req, res) => {
  res.render("music/create");
});
router.get("/:id", detail);
router.get("/:id/edit", detail);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;