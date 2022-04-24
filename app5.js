// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();


const test2 = [
    // { title: 'JavaScriptを勉強する', done: true },
    // { title: 'Node.jsを勉強する', done: false },
    // { title: 'Web APIを作る', done: false }
    {
        "vin": [
            {
                "data": "XXXXXXXXXX"
            },
            {
                "data": "helloworld"
            }

        ],
        "calibrationID": [
            {
                "data": "JMB*YYYYYYYY"
            },
            {
                "data": "JMB*ZZZZZZZZ"
            }
        ],
        "cvn": [
            {
                "data": "AAAA"
            },
            {
                "data": "BBBB"
            }
        ],
        "tracking": [
            {
                "name": "OBDCOND",
                "data": "0"
            },
            {
                "name": "IGNCTRL",
                "data": "1"
            },
            {
                "name": "M",
                "data": "2"
            }
        ]
    }
];








// webフォルダの中身を公開する
//app.use(express.static('web'));

// http://localhost:3000/api/v1/list にアクセスしてきたときに
// jsonを返す
app.get('/api/v1/list', (req, res) => {
    //res.set({ 'Access-Control-Allow-Origin': '*' });
    console.log(test2);
    // JSONを送信する
    res.json(test2);
    //res.end("fuck");
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));