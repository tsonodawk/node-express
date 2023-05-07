import express from "express";
import exampleRoutes from "./routes/example"; // ここで example ルートをインポート

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 追加したルートを使用するように設定
app.use("/api", exampleRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
