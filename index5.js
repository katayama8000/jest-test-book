const express = require('express')
const app = express()
const port = 3004

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  var i = 0;
// http://localhost:3004/ でresponce.jsonの中身を返す。
app.get("/", (req, res, next) => {
    // アクセスログ
    i = i + 1;
    console.log(req.method, req.url, i)
    // jsonを返す
    res.json(require('./ffd.json'))
});

// ポート3000でサーバ起動
app.listen(port, () => console.log(`click http://localhost:${port}/ !`))