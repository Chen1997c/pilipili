<template>
  <div id="player"></div>
</template>
<script>
import "dplayer/dist/DPlayer.min.css";
import DPlayer from "dplayer";
let dp;
let $player;
export default {
  methods: {
    pp() {
      alert(1)
    }
  },
  mounted() {
    $player = document.getElementById("player")
    dp = new DPlayer({
    container: player,
      autoplay: true,
      theme: "#FADFA3",
      loop: true,
      lang: "zh-cn",
      screenshot: true,
      hotkey: true,
      volume: 0.7,
      mutex: true,
      video: {
        url:
          "//172.16.10.66:1000/Onigiri - 01 GB (Bilibili 1280x720 x264 AAC).mp4",
        pic: "dplayer.png",
        thumbnails: "thumbnails.jpg",
        type: "auto"
      },
      subtitle: {
        url: "dplayer.vtt",
        type: "webvtt",
        fontSize: "25px",
        bottom: "10%",
        color: "#b7daff"
      },
      danmaku: {
        id: "9E2E3368B56CDBB4",
        api: "https://api.prprpr.me/dplayer/",
        token: "tokendemo",
        maximum: 1000,
        addition: ["https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142"],
        user: "DIYgod",
        bottom: "15%",
        unlimited: true
      },
      contextmenu: [
        {
          text: "custom1",
          link: "https://github.com/DIYgod/DPlayer"
        },
        {
          text: "custom2",
          click: player => {
            console.log(player);
          }
        }
      ],
      highlight: [
        {
          time: 20,
          text: "这是第 20 秒"
        },
        {
          time: 120,
          text: "这是 2 分钟"
        }
      ]
    });
  }
};
</script>


