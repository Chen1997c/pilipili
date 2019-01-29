<template>
  <div id="player"></div>
</template>
<script>
// import "dplayer/dist/DPlayer.min.css";
// import DPlayer from "dplayer";
// let dp;
// let $player;
import player from "@/assets/js/player";
export default {
  mounted() {
    const resUrl =
      "https://vd4.bdstatic.com/mda-igijckpnqpvxdrxn/hd/mda-igijckpnqpvxdrxn.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D&auth_key=1546697397-0-0-904b2c34da08b5f771d38a3060021b4e&bcevod_channel=searchbox_feed&pd=bjh";
    const danmakuUrl = "https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142";
    let dp = player(resUrl, danmakuUrl);
    dp.on("play", () => {
      this.$emit("hideheader",211 - 44);
    });
    dp.on("pause", () => {
      this.$emit("showheader");
    });
  }
};
</script>


