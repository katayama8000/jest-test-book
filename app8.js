const express = require("express");
const app  = express();
const port = 3000;

// ルーティングの設定
// app.get("/", (req, res) =>{
//   const name = req.query.name;
//   res.send(`わたしは ${name}`);
//   console.log("/ へアクセスがありました");
// });

// POSTのクエリーを良い感じに処理する
app.use(express.urlencoded({extended: true}));

// ルーティングの設定
app.post("/", (req, res) =>{
  const name = req.body.name;
  res.send(`君の名は ${name}`);
  console.log("/ へアクセスがありました");
});

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});