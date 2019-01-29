<template>
  <div>
    <div class="nav app-clear">
      <div class="app-fl nav-item">广场</div>
      <div class="app-fr">
        <i class="iconfont icon-list1"></i>
      </div>
    </div>
    <div class="van-hairline--bottom app-padding">
      <div class="app-clear">
        <div class="app-fl">
          <div class="title">数码</div>
          <div class="count">18.3万人已订阅</div>
        </div>
        <div class="app-fr">
          <van-tag class="btn" color="#fb7299" plain>+ 订阅</van-tag>
        </div>
      </div>
      <van-row :gutter="10" style="margin-top:10px">
        <van-col :span="12" v-for="(r,index) in res">
          <div class="cover" :style="{'background-image': 'url(' + r.cover + ')'}">
            <div class="bottom app-clear">
              <div class="app-fl">
                <i class="iconfont icon-Play"></i>
                {{r.playback}}
                <i class="iconfont icon-64"></i>
                {{r.comments}}
              </div>
              <div class="app-fr">{{r.duration}}</div>
            </div>
          </div>
          <div class="res-title ellipsis-two">{{r.title}}</div>
        </van-col>
        <van-col :span="12"></van-col>
      </van-row>
    </div>
    <div class="item-list">
      <div class="item app-fl" v-for="(item,index) in itemList" :key="index">
        <img class="icon-img" :src="item.imgUrl" alt="tv">
        <br>
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<script>
const res = [
  {
    cover:
      "http://img3.imgtn.bdimg.com/it/u=2412666315,4208585026&fm=11&gp=0.jpg",
    playback: "97.6万",
    comments: "3658",
    duration: "2:26",
    title: "当改革春风吹到社会摇，简直能把人笑晕<。)#)))"
  },
  {
    cover:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=681894405,304122799&fm=26&gp=0.jpg",
    playback: "1203",
    comments: "1",
    duration: "2:00",
    title: "几十块的挥洒接口的哈数据库撒看来大家阿斯来得及撒奥斯卡的"
  }
];

const itemList = [
  {
    name: "番剧",
    imgUrl: require("@/assets/images/list-icon/dianshiji.png")
  },
  {
    name: "国创",
    imgUrl: require("@/assets/images/list-icon/guochandonghuatuijian.png")
  },
  {
    name: "电影",
    imgUrl: require("@/assets/images/list-icon/-fangyingji.png")
  },
  {
    name: "动画",
    imgUrl: require("@/assets/images/list-icon/keji-.png")
  },
  {
    name: "舞蹈",
    imgUrl: require("@/assets/images/list-icon/fan.png")
  },
  {
    name: "音乐",
    imgUrl: require("@/assets/images/list-icon/erji.png")
  },
  {
    name: "数码",
    imgUrl: require("@/assets/images/list-icon/xiangji.png")
  },
  {
    name: "科技",
    imgUrl: require("@/assets/images/list-icon/huabanfuben.png")
  },
  {
    name: "生活",
    imgUrl: require("@/assets/images/list-icon/shenghuo.png")
  },
  {
    name: "游戏",
    imgUrl: require("@/assets/images/list-icon/youxi.png")
  },
  {
    name: "纪录片",
    imgUrl: require("@/assets/images/list-icon/jingyu.png")
  }
];
export default {
  data() {
    return {
      itemList: itemList,
      res: res
    };
  }
};
</script>
<style lang="less" scoped>
.iconfont {
  font-size: 12px;
}
.nav {
  padding: 0 15px;
  border-bottom: 1px solid #eee;
}
.nav div {
  padding: 10px 0;
  font-size: 14px;
  color: #666;
}
.nav-item {
  color: #fb7299 !important;
  border-bottom: 2px solid #fb7299;
}
.title {
  color: #555;
  font-size: 14px;
}
.count {
  color: #888;
  font-size: 12px;
}
.btn {
  padding: 5px 10px;
  font-size: 14px;
  letter-spacing: 2px;
}
.cover {
  position: relative;
  height: 100px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.cover .bottom {
  position: absolute;
  bottom: 0;
  padding: 1% 3%;
  width: 94%;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(33, 33, 33, 0)),
    to(rgba(33, 33, 33, 0.5))
  );
  color: #fff;
  font-size: 12px;
}
.res-title {
  color: #555;
  font-size: 13px;
  margin: 3px 0;
}
.item-list {
  margin: 0 auto;
}
.item {
  width: 11%;
  margin: 2% 7%;
  font-size: 12px;
  color: #666;
  text-align: center;
  letter-spacing: 0.2ch;
}
.icon-img {
  width: 100%;
  height: 40px;
}
</style>


