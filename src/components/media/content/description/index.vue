<template>
  <div class="animation-description">
    <van-nav-bar class="header" fixed>
      <span class="h-left" slot="left">
        <i @click="$router.go('-1')" class="iconfont icon-left h-font"></i>
        简介
      </span>
    </van-nav-bar>
    <div class="container app-padding">
      <div class="title">{{animation.title}}</div>
      <div>
        <span class="little-title">原名：</span>
        <span class="content">{{animation.originalName}}</span>
      </div>
      <div class="media-info">
        <div class="little-title">影片信息</div>
        <div class="content">作品分类：{{animation.category}}</div>
        <div class="content">制作国家/地区：{{animation.district}}</div>
        <div class="content">开播时间:{{animation.startDate}}</div>
        <div class="content">
          总集数：{{animation.all}}
          <template v-if="animation.all === animation.now">（已完结）</template>
          <template v-else>（未完结）</template>
        </div>
      </div>
      <div class="profile">
        <div class="little-title">简介</div>
        <div class="content" v-html="animation.profile"></div>
      </div>
      <div class="charactor-data">
        <div class="little-title">角色资料</div>
        <div
          v-for="(charactor,index) in animation.charactor"
          :key="index"
          class="content"
        >{{charactor.name}}：{{charactor.actor}}</div>
      </div>
      <div class="staff-info">
        <div class="little-title">演职资料</div>
      </div>
      <div class="tags">
        <div class="little-title">风格</div>
        <van-tag
          v-for="(tag,index) in animation.tags"
          :key="index"
          class="tag"
          size="large"
          color="#fff"
          text-color="#444"
          round
        >{{tag}}</van-tag>
      </div>
    </div>
  </div>
</template>
<script>
const animation = {
  title: "ISLAND",
  originalName: "アイランド",
  category: "番剧",
  district: "日本",
  startDate: "2018-07-01",
  all: "12",
  now: "12",
  time: "24分钟",
  profile: `远离本土、漂浮在海洋中的“浦岛”。那里有让人错认为是天国的富裕的自然资源，以及有被复杂的过去和古老的习俗所束缚的人们生活着。<br>
在这块被本土抛弃、被逐渐遗忘的土地上，居民们几乎不抱任何希望地在生活着。<br>
突然某一天，一位自称“时间旅行者”的青年漂流到这座岛屿。除了“切那”这个名字和“某个使命”以外的记忆都丧失了的青年，与凛音、夏莲、纱罗这3位少女相遇了，并展开了改变岛的未来的行动。<br>
围绕隐藏着古老的习俗与各种谜团的浦岛，青年和少女们的物语揭开了序幕。`,
  charactor: [
    {
      name: "御原凛音",
      actor: "田村由香里"
    },
    {
      name: "枢都夏莲",
      actor: "阿澄佳奈"
    },
    {
      name: "甲蓝堂沙罗",
      actor: "山村响"
    }
  ],
  originalWork: "Frontwing",
  originalBill: "G.0.",
  charactorOriginalBill: "空中幼彩(Frontwing)",
  music: "立山秋航",
  tags: ["游戏改", "催泪", "推理", "治愈"]
};
export default {
  data() {
    return {
      animation: animation
    };
  }
};
</script>
<style scoped>
.animation-description {
  background: rgb(247, 240, 240);
}
.header {
  border-bottom-width: 0 !important;
  color: #fff;
  background-color: rgb(251, 114, 153);
}
.h-left {
  font-size: 16px;
}
.h-font {
  margin-right: 1rem;
}
.container {
  margin-top: 46px;
  height: 600px;
  overflow: scroll;
}
.title {
  font-size: 20px;
  color: #333;
  margin: 5px 0;
}
.little-title {
  font-size: 14px;
  color: #444;
  margin-bottom: 0.5rem;
}
.content {
  font-size: 14px;
  color: #888;
  line-height: 1.4rem;
}
.media-info,
.staff-info {
  margin: 2rem 0;
}
.profile {
  margin-bottom: 2rem;
}
.tag {
  margin: 0 1rem 1rem 0;
}
</style>


