const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const main = require('./router/main');

app.listen(3000, function(){
    console.log("connect");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use('/main', main);

app.get('/', function (req, res) {
    console.log('/ get');
    res.sendFile(__dirname + '/public/testHtml.html');
});

app.post('/videoSearch', function (req, res) {
    console.log('/videoSearch');
    console.log(req.body.videoName);

    var searchSplit = req.body.videoName.split('https://youtu.be/');
    console.log(searchSplit[1]);

    var videoSearchData = 'https://www.youtube.com/get_video_info?video_id='+searchSplit[1];
    console.log(videoSearchData);
    res.send("<a href='"+videoSearchData+"'>동영상 다운로드</a>")
    res.sendFile(__dirname + '/public/testHtml.html');

});
