
var videoSearch = function() {

    alert("연결확인");

    var searchName = document.getElementById("video-name").value.split("https://youtu.be/");
    var searchNameSplit = searchName;
    var downloadUrl = "https://www.youtube.com/get_video_info?video_id="+searchNameSplit[1];
    console.log(downloadurl);

};