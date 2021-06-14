var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "gmRKv7n2If8", //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: 1, //자동재생 유무
      loop: true, //반복재생 유무
      playlist: "gmRKv7n2If8", //반복재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}
