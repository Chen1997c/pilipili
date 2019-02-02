<template>
  <div class="multiple">
    <news-search/>
    <div v-for="(news,index) in newsList" :key="index" class="app-padding item">
      <div class="app-clear">
        <div class="app-fl">
          <div class="avatar" :style="{'background-image':'url(' + news.avatar +')'}"></div>
        </div>
        <div class="app-fl info">
          <div class="name">{{news.name}}</div>
          <div class="time">{{news.time}}</div>
        </div>
        <div class="app-fr"></div>
      </div>
      <div class="m-content content-ellipsis" v-html="news.content"></div>
      <div @click="openClose(index)" class="open-close">展开</div>
      <div class="img-box" v-html="news.img"></div>
      <div class="operation app-clear">
        <div class="op-item">
          <i class="iconfont icon-zhuanfa2"></i>54
        </div>
        <div class="op-item">
          <i class="iconfont icon-comment"></i>958
        </div>
        <div class="op-item">
          <i class="iconfont icon-like1"></i>1944
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const testImg = require("@/assets/images/news_test.jpg");
const newsList = [
  {
    avatar: "http://static.hdslb.com/images/akari.jpg",
    name: "碧蓝航线",
    time: "7分钟前",
    content: `亲爱的指挥官：<br>&nbsp;&nbsp;&nbsp;&nbsp;1月31日维护后~2月14日，即将开启[闹腾嬉戏东煌春节]限时活动！<br>&nbsp;&nbsp;&nbsp;&nbsp;为保证
  活动顺利开启，司令部将于1月31日9:00~14:00对泉港区进行为期5个小时的改造建设，还请各位指挥官注意，具体改建内容可关注后续公告。
  <br>&nbsp;&nbsp;&nbsp;&nbsp;各种丰富活动和神秘小游戏登场！&nbsp;&nbsp;&nbsp;&nbsp;新的冒险即将开始~`,
    img: `<img style="width:240px" src="` + testImg + `">`
  },
  {
    avatar: "http://static.hdslb.com/images/akari.jpg",
    name: "碧蓝航线",
    time: "7分钟前",
    content: `亲爱的指挥官：<br>&nbsp;&nbsp;&nbsp;&nbsp;1月31日维护后~2月14日，即将开启[闹腾嬉戏东煌春节]限时活动！<br>&nbsp;&nbsp;&nbsp;&nbsp;为保证
  活动顺利开启，司令部将于1月31日9:00~14:00对泉港区进行为期5个小时的改造建设，还请各位指挥官注意，具体改建内容可关注后续公告。
  <br>&nbsp;&nbsp;&nbsp;&nbsp;各种丰富活动和神秘小游戏登场！&nbsp;&nbsp;&nbsp;&nbsp;新的冒险即将开始~`,
    img: `<img style="width:240px" src="` + testImg + `">`
  }
];
import NewsSearch from "@/components/category/news/search";
export default {
  components: {
    NewsSearch
  },
  mounted() {
    this.$nextTick(() => {
      let $boxImg = document.querySelectorAll(".img-box img");
      for (let i = 0; i < $boxImg.length; i++) {
        $boxImg[i].style.borderRadius = "2px";
      }
    });
  },
  data() {
    return {
      newsList: newsList
    };
  },
  methods: {
    openClose(index) {
      let $btn = document.querySelectorAll(".open-close");
      let $content = document.querySelectorAll(".m-content");
      if ($content[index].classList.contains("content-ellipsis")) {
        $btn[index].innerHTML = "收起";
        $content[index].classList.remove("content-ellipsis");
      } else {
        $btn[index].innerHTML = "展开";
        $content[index].classList.add("content-ellipsis");
      }
    }
  }
};
</script>
<style scoped>
.multiple {
  background: #eee;
  margin-bottom: 50px;
}
.search {
  border-bottom: 1px solid #eee;
}
.avatar {
  height: 40px;
  width: 40px;
  background-size: cover;
  border-radius: 50%;
}
.info {
  padding: 5px 10px;
}
.name {
  font-size: 14px;
}
.time {
  font-size: 12px;
  color: #777;
  line-height: 20px;
}
.m-content {
  color: #555;
  font-size: 15px;
  line-height: 1.3rem;
  margin: 0.5rem 0;
}
.content-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.item {
  background: #fff;
  margin-bottom: 1rem;
}
.open-close {
  color: steelblue;
  font-size: 16px;
}
.operation {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
}
.operation .op-item {
  float: left;
  width: 33.3%;
  text-align: center;
  color: #777;
  font-size: 14px;
}
</style>


