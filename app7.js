const express = require("express");
const app  = express();
const port = 8080;

// ルーティングの設定
app.get("/", (req, res) =>{
    res.sendFile(`${__dirname}/public_html/hello.html`);
  console.log("/ へアクセスがありました");
});

app.get("/good",(req,res) => {
    res.sendFile(`${__dirname}/public_html/good.html`);
    console.log("goodmorning");
})

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});