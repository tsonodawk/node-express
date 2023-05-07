## 概要

---

- node.js / express のサンプルテスト
- chatGPTとのやり取りでつくってみたもの

## 実行

---

```bash
npm start
```

別ターミナルで

```bash
curl http://localhost:3000/
curl -X GET http://localhost:3000/api/examples
curl -X POST http://localhost:3000/api/examples
curl -X PUT http://localhost:3000/api/examples/10
curl -X DELETE http://localhost:3000/api/examples/10
```
