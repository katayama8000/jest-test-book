var http = require('http'),
　　//ファイルを読み込むモジュール
    fs = require('fs'),
    //ejsの読み込み
    ejs = require('ejs');
    qs = require('querystring');
var settings = require('./settings');
var server = http.createServer();
//fsオブジェクトを使い、ejsのテンプレートファイルを読み込む
//同期処理なのでsync callback使う必要なし
var template_bbs = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
var template_hello = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
var posts = [];
var n = 0;


// function renderForm(posts, res) {
//     var data = ejs.render(template_bbs, {
//         posts: posts
//     });
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
// }
//onメソッドは、様々な関数をイベント登録を行うことが出来るもの
server.on('request', function(req, res) {
    n++;
    var data = ejs.render(template_hello, {
        title: "hello",
        content: "<strong>World!</strong>",
        n: n
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);


    // if (req.method === 'POST') {
    //     req.data = "";
    //     req.on("data", function(chunk) {
    //         // コールバック関数の引数を結合していく
    //         req.data += chunk;
    //     });
    //     //読み終わった後の処理
    //     req.on("end", function() {
    //         var query = qs.parse(req.data);
    //         posts.push(query.name);
    //         renderForm(posts, res);
    //     });
    // } else {
    //     renderForm(posts, res);
    // }
});
//ポート番号、ipアドレス
server.listen(settings.port, settings.host);
console.log("server listening ...");