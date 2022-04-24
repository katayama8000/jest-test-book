var http = require('http');
var server = http.createServer();
fs = require('fs');
ejs = require('ejs');
qs = require('querystring');
var settings = require('./settings');
//var html = fs.readFileSync('./public_html/hello.html');
var template_bbs = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
var posts = [];



function renderForm(posts, res) {
    var data = ejs.render(template_bbs, {
        posts: posts
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}


server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plane' });
    if (req.method === 'POST') {
        req.data = "";
        req.on("data", function (chunk) {
            // コールバック関数の引数を結合していく
            req.data += chunk;
        });
        //読み終わった後の処理
        req.on("end", function () {
            var query = qs.parse(req.data);
            posts.push(query.name);
            //renderForm(posts, res);
            console.log('あなたが送信したのは' + req.data);
        });
    }else{
        renderForm(posts, res);
    }
    //res.end(html);
    //res.end('<h1><span id="Hello_World">Hello World</span></h1>');
})

server.listen(settings.port, settings.host);
console.log("watting");
