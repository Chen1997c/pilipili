import DPlayer from "dplayer";
import "dplayer/dist/DPlayer.min.css";

function playerInit(resUrl, danmakuUrl) {
    let $player = document.getElementById("player")
    let dp = new DPlayer({
        container: $player,
        autoplay: true,
        theme: "#FADFA3",
        lang: "zh-cn",
        hotkey: true,
        volume: 0.7,
        mutex: true,
        video: {
            url:
                resUrl,
            type: "auto"
        },
        danmaku: {
            id: "9E2E3368B56CDBB4",
            api: "https://api.prprpr.me/dplayer/",
            token: "tokendemo",
            maximum: 1000,
            addition: [danmakuUrl],
            user: "DIYgod",
            bottom: "15%",
            unlimited: true
        }
    });
    return dp;
}

export default playerInit