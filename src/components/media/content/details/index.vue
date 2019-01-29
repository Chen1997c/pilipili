<template>
  <div>
    <van-nav-bar class="header" fixed>
      <i class="iconfont icon-left" slot="left"></i>
      <span slot="title">{{animation.title}}</span>
      <i class="iconfont icon-gengduo" slot="right"></i>
    </van-nav-bar>
    <div class="wrapper">
      <div class="back-img" :style="{'background-image':'url(' + animation.cover + ')'}"></div>
    </div>
    <div class="top">
      <div class="inside">
        <div class="cover">
          <img :src="animation.cover" alt>
        </div>
        <div class="t-center">
          <div class="item">番剧丨日本</div>
          <div class="item">
            <template v-if="animation.now === animation.all">已完结，全{{animation.now}}话</template>
            <template v-else>更新至第{{animation.now}}话</template>
          </div>
          <div class="item">{{animation.type}}</div>
        </div>
        <div class="t-right">
          <div class="animation-grade">{{animation.grade}}</div>
          <van-rate :size="12" color="#ffa726" :value="rate"/>
          <div class="animation-num">{{animation.gradeNum}}人</div>
        </div>
      </div>
    </div>
    <div class="app-padding">
      <router-link to="/description">
        <div class="profile-wrapper">
          <div class="animation-profile" v-html="animation.profile"></div>
          <div class="profile-more">→更多资料</div>
        </div>
      </router-link>
      <div class="my-comment app-clear">
        <div class="avatar app-fl">
          <img src="http://static.hdslb.com/images/akari.jpg" alt>
        </div>
        <div class="content app-fl">
          <van-rate :size="14" color="#ffa726" :value="5"/>
          <span>辣鸡动漫，多说无益</span>
        </div>
      </div>
    </div>
    <div class="animation-history">
      <div class="content app-padding">
        <div class="title">上次看到 第{{animation.history}}话 {{animation.historyTitle}}</div>
        <div class="play-back">{{animation.playBack}}人次播放</div>
      </div>
    </div>
    <div class="app-top comment-top">
      <div class="title">短评</div>
      <div class="see">
        <van-tag size="medium" color="#fb7299" plain>写短评</van-tag>
      </div>
    </div>
    <div v-for="item in 2" class="comment-item van-hairline--bottom">
      <div class="app-clear">
        <div class="avatar app-fl">
          <img src="http://static.hdslb.com/images/akari.jpg" alt>
        </div>
        <div class="tag app-fl">
          <div>
            <span class="uname">蓝皮鼠大脸猫</span>
            <van-tag color="#888" plain>看至第1话</van-tag>
          </div>
          <div class="time">7天前</div>
        </div>
        <div class="rate app-fr">
          <van-rate :size="11" color="#ffa726" :value="5"/>
        </div>
      </div>
      <div class="content">游戏改都是怪物系列</div>
      <div>
        <span class="attitude">
          <i class="iconfont icon-like1"></i> 1
        </span>
        <span class="attitude">
          <i class="iconfont icon-unlike"></i> 32231
        </span>
      </div>
    </div>
    <div class="see-all">查看全部 201 条短评</div>
    <div style="margin-bottom:60px;"></div>
  </div>
</template>
<script>
const animation = {
  title: "玻璃之花与崩坏的世界",
  cover:
    "http://img1.imgtn.bdimg.com/it/u=1552599811,1988869548&fm=11&gp=0.jpg",
  type: "治愈",
  all: "1",
  now: "1",
  grade: "8.9",
  gradeNum: "404",
  profile: "",
  history: "1",
  historyTitle: "因此我相信着你",
  playBack: "192.8万",
  profile: `远离本土、漂浮在海洋中的“浦岛”。那里有让人错认为是天国的富裕的自然资源，以及有被复杂的过去和古老的习俗所束缚的人们生活着。
在这块被本土抛弃、被逐渐遗忘的土地上，居民们几乎不抱任何希望地在生活着。<br>
突然某一天，一位自称“时间旅行者”的青年漂流到这座岛屿。除了“切那”这个名字和“某个使命”以外的记忆都丧失了的青年，与凛音、夏莲、纱罗这3位少女相遇了，并展开了改变岛的未来的行动。<br>
围绕隐藏着古老的习俗与各种谜团的浦岛，青年和少女们的物语揭开了序幕。`
};
export default {
  data() {
    return {
      animation: animation,
      headerColor: "transparent"
    };
  },
  computed: {
    rate() {
      return parseInt(this.animation.grade / 2);
    }
  },
  mounted() {
    let $header = document.querySelector(".header");
    window.onscroll = () => {
      let top = document.body.scrollTop;
      if (top > 0) {
        if (top < 50) {
          console.log($header);
          $header.style.backgroundColor =
            "rgb(251, 114, 153, " + top / 50 + ")";
        }
      } else {
        $header.style.backgroundColor = "transparent";
      }
    };
  }
};
</script>
<style scoped>
.header {
  border-bottom-width: 0 !important;
  color: #fff;
  background-color: transparent;
  z-index: 13 !important;
}
.header:after {
  border-bottom-width: 0 !important;
}
.wrapper {
  position: relative;
  height: 150px;
  overflow: hidden;
}
.back-img {
  background-size: 100%;
  height: 100%;
  background-position: center;
  position: relative;
  filter: blur(15px);
}
.back-img:after {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  z-index: -1;
}
.top {
  position: relative;
  margin-bottom: 20px;
}
.inside {
  position: absolute;
  display: flex;
  align-items: center;
  top: -95px;
  z-index: 1;
  padding: 0 10px;
}
.inside .cover {
  width: 18%;
  flex-grow: 1;
}
.inside img {
  width: 100%;
  height: 110px;
  border-radius: 2px;
  padding: 1px;
  border: 1px solid #eee;
  background: #fff;
}
.t-center {
  color: #fff;
  font-size: 13px;
  flex-grow: 8;
  padding: 0 0 20px 10px;
  line-height: 2rem;
}
.t-right {
  text-align: center;
  margin-bottom: 2rem;
}
.t-right .animation-grade {
  color: #ffa726;
  font-size: 25px;
}
.t-right .animation-num {
  font-size: 11px;
  color: #eee;
}
.profile-wrapper {
  padding-right: 1rem;
  font-size: 13px;
}
.animation-profile {
  color: #666;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.profile-more {
  color: rgb(251, 114, 153);
  background: #fff;
  text-align: right;
}
.my-comment {
  padding-top: 10px;
  border: 1px solid #ffa726;
  border-radius: 2px;
  margin: 20px 0;
  background: #fff7ee;
}
.my-comment .avatar {
  width: 10%;
  height: 30px;
  text-align: center;
}
.my-comment .avatar img {
  width: 70%;
  line-height: 0;
  border-radius: 50%;
}
.my-comment .content {
  line-height: 2rem;
  font-size: 12px;
  color: #888;
}
.animation-history {
  padding: 10px 0;
  background: #eee;
}
.animation-history .content {
  background: #fff;
}
.animation-history .title {
  color: #555;
}
.animation-history .play-back {
  font-size: 12px;
  color: #888;
  margin: 5px 0;
}
.comment-top {
  margin: 10px 0;
  padding: 10px;
}

.comment-item {
  padding: 10px;
}
.comment-item .avatar {
  width: 13%;
}
.comment-item img {
  width: 80%;
  border-radius: 50%;
}
.comment-item .uname {
  color: #777;
  font-size: 13px;
  margin-right: 5px;
}
.comment-item .time {
  font-size: 11px;
  color: #999;
}
.comment-item .content {
  margin: 10px 0;
  color: #555;
  font-size: 14px;
}
.attitude {
  margin-right: 4rem;
  color: #999;
}
.see-all {
  color: rgb(251, 114, 153);
  font-size: 14px;
  text-align: center;
  margin: 10px;
}
</style>


