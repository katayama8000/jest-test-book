var http = require('http');
var fs = require('fs');
var url = require('url');
var URL = require('url').URL;
var qs = require('querystring');

//サーバーオブジェクトを作成しただけ
var server = http.createServer();
//on イベント名　関数
server.on('request', doRequest);
server.listen(8080);

function doRequest(req, res) {
    console.log(req.url)
    //var path = new URL(req.url);
    // console.log(path);
    // console.log(path.pathname);

    //switch (path.pathname) {
    switch (req.url) {
        case '/':
            fs.readFile('./index.html', 'UTF-8', function (err, data) {
                var result = data.replace(/@@@/, '何か書いて');
                console.log(result);
                res.setHeader('Content-Type', 'text/html');
                res.write(result);
                console.log(result);
                res.end();
            });
            break;

        case '/form':
            if (req.method === "POST") {
                var reqBody = '';
                req.on('data', function (data) {
                    reqBody += data;
                });

                req.on('end', function () {
                    var form = qs.parse(reqBody);
                    var input1 = form.input1;
                    fs.readFile('./index.html', 'UTF-8', function(err, data){
                        var result = data.replace(/@@@/, "あなたは[" + input1 + "]とかきました");
                        res.setHeader('content-Type', 'text/html');
                        res.write(result);
                        res.end();
                    })

                })
            } else {
                res.setHeader('content-Type', 'text/html');
                res.end('can not get');
            } break;

        default:
            res.setHeader('content-Type', 'text/html');
            res.end('エラー')
            break;
    }
}

console.log('server running');