const express = require('express')
const app = express()
const port = 4000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  var i = 0;
// http://localhost:4000/ でresponce.jsonの中身を返す。
app.get("/", (req, res, next) => {
    // アクセスログ
    i = i + 1;
    console.log(req.method, req.url, i)
    // jsonを返す
    setTimeout(() => { res.json(require('./systemcheck.json'))},4000)
});

// ポート4000でサーバ起動
app.listen(port, () => console.log(`click http://localhost:${port}/ !`))