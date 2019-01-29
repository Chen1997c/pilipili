<template>
  <div>
    <div class="van-hairline--bottom app-padding app-clear">
      <div class="app-fl l-box">
        <div v-if="!profileFold" class="title">{{resource.title}}</div>
        <div v-else class="title van-ellipsis">{{resource.title}}</div>
        <div class="tag">
          <span class="item">
            <i class="iconfont icon-Play"></i>
            {{resource.playBack}}
          </span>
          <span class="item">
            <i class="iconfont icon-64"></i>
            {{resource.comment}}
          </span>
          <span class="item">{{resource.time}}</span>
          <span class="item">AV{{resource.av}}</span>
        </div>
        <div v-show="!profileFold" class="profile">{{resource.profile}}</div>
        <div class="button-act">
          <div class="item">
            <i class="iconfont icon-zan"></i>
            <br>
            {{resource.likeNum}}
          </div>
          <div class="item">
            <i class="iconfont icon-caishixin-"></i>
            <br>
            {{resource.unlikeNum}}
          </div>
          <div class="item">
            <i class="iconfont icon-gouliang"></i>
            <br>
            {{resource.coin}}
          </div>
          <div class="item">
            <i class="iconfont icon-zhuanfa"></i>
            <br>
            {{resource.transfer}}
          </div>
        </div>
      </div>
      <div @click="profileFold = !profileFold" class="app-fr r-box">
        <i class="iconfont icon-xia"></i>
      </div>
    </div>
    <div class="app-padding">
      <div class="label">
        <van-tag
          v-for="(label,index) in resource.labels"
          :key="index"
          class="item"
          size="large"
          color="#eee"
          text-color="#555"
          round
        >{{label}}</van-tag>
      </div>
    </div>
  </div>
</template>
<script>
const resource = {
  avatar: "http://static.hdslb.com/images/akari.jpg",
  profile: `啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤`,
  nickname: "嘤嘤喵",
  fanNum: "165.5万",
  title: "【嘤嘤嘤】嘤嘤喵的第八次断奶尝试！嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤",
  playBack: "75.5万",
  comment: "6581",
  time: "20小时前",
  av: "40939475",
  likeNum: "1.8万",
  unlikeNum: "1",
  coin: "2万",
  collect: "3481",
  transfer: "904",
  labels: ["嘤嘤怪", "喵呜", "嗷呜", "断奶计划", "嘤嘤嘤", "嘤嘤"]
};
export default {
  data() {
    return {
      resource: resource,
      themeColor: "#fb7299",
      profileFold: true,
      labelFold: true
    };
  }
};
</script>
<style scoped>
.l-box {
  width: 90%;
}
.r-box {
  width: 10%;
  text-align: right;
  color: #bbb;
}
.r-box .iconfont {
  font-size: 18px;
  font-weight: bold;
}
.title {
  color: #444;
  font-size: 15px;
  line-height: 18px;
}
.tag {
  margin: 0.2rem 0;
}
.tag .iconfont {
  font-size: 12px;
}
.tag .item,
.profile {
  margin-right: 0.5rem;
  font-size: 12px;
  color: #888;
}
.button-act {
  width: 90%;
  margin: 0 auto;
  padding: 15px 0;
  overflow: auto;
  text-align: center;
}
.button-act .item {
  float: left;
  width: 25%;
  color: #777;
  font-size: 11px;
}
.button-act .iconfont {
  font-size: 20px;
}
.label .item {
  margin: 0 0.5rem 0.5rem 0;
}
</style>


