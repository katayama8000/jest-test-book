const hostname = '127.0.0.1';
const port = 8080;


var http = require('http');
var request = require('request');
var server = http.createServer();
server.on('request', doRequest);

// var options = {
//     url: 'https://www.sejuku.net/blog/',
//     method: 'GET'
// }

// request(options, function (error, response, body) {

//     console.log(body);

// })

// ファイルモジュールを読み込む
var fs = require('fs');
var maxData = 5*1024;

// リクエストの処理
function doRequest(req, res) {
    if (req.method === 'GET') {
        fs.readFile('./public_html/hello.html', 'utf-8', doRead)
        fs.readFile('./req.html', 'utf-8', doRead);
    } else {
        // ファイルを読み込んだら、コールバック関数を実行する。
    }

    if (req.method === "POST") {
        var data = '';

        //POSTデータを受けとる
        req.on('data', function (chunk) {
            data += chunk

            if(data.length > maxData) {
                res.writeHead(413);
                res.end('Data size is too big');
            }
        })
            .on('end', function () {

                console.log(data);
                res.end(" what you sent me is ..." + data);

            })
    }


    // コンテンツを表示する。
    function doRead(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    }
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});