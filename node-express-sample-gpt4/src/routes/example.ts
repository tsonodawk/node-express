import { Router } from "express";

const router = Router();

router.get("/examples", (req, res) => {
  // ここでデータを取得して返す
  res.send("api/get!");
});

router.post("/examples", (req, res) => {
  // ここでデータを作成して返す
  res.send("api/post!");
});

router.put("/examples/:id", (req, res) => {
  // ここでデータを更新して返す
  const id = req.params.id;
  res.send(`api/put! ID:${id}`);
});

router.delete("/examples/:id", (req, res) => {
  // ここでデータを削除して返す
  const id = req.params.id;
  res.send(`api/delete ID:${id}`);
});

export default router;
