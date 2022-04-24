const express = require('express')
const app = express()
const port = 3003

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  var i = 0;
// http://localhost:3003/ でresponce.jsonの中身を返す。
app.get("/", (req, res, next) => {
    // アクセスログ
    i = i + 1;
    console.log(req.method, req.url, i)
    // jsonを返す
    setTimeout(() => { res.json(require('./disconnect.json'))},1500)
    //res.json(require('./disconnect.json'))
});

// ポート3003でサーバ起動
app.listen(port, () => console.log(`click http://localhost:${port}/ !`))