<template>
  <div>
    <div  class="add" :style="{'background-image':'url(' + addZb + ')'}"></div>
    <div class="top">
      <app-carousel :carouselImg="carouselImg"/>
      <van-row gutter="15" style="margin-top:20px;">
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/lol.png" alt="lol">
          <span class="icon-font">英雄联盟</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/pubg.png" alt="pubg">
          <span class="icon-font">绝地求生</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/DNF.png" alt="DNF">
          <span class="icon-font">DNF</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/wzry.png" alt="wzry">
          <span class="icon-font">王者荣耀</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/zzhx.png" alt="zzhx">
          <span class="icon-font">最终幻想</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/label.png" alt="label">
          <span class="icon-font">全部标签</span>
        </van-col>
      </van-row>
      <van-row style="margin-top:25px" gutter="15">
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/game.png" alt="game">
          <span class="icon-font">单机</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/sy.png" alt="sy">
          <span class="icon-font">手游</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/kalaok.png" alt="kalaok">
          <span class="icon-font">娱乐</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/fm.png" alt="fm">
          <span class="icon-font">电台</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/draw.png" alt="draw">
          <span class="icon-font">绘画</span>
        </van-col>
        <van-col span="4">
          <img class="icon-img" src="@/assets/images/icon/anime.png" alt="anime">
          <span class="icon-font">动画</span>
        </van-col>
      </van-row>
    </div>
    <div class="center">
      <div class="zb-box">
        <div class="title-wrapper">
          <div class="title">推荐直播</div>
          <div class="button">换一换</div>
        </div>
        <van-row :gutter="20">
          <van-col
            v-for="(recommend,index) in recommendList"
            :key="index"
            class="zb-item"
            span="12"
          >
            <div class="zb-img">
              <img class="coverImg" :src="recommend.img" alt>
              <div class="bottom">
                <div class="author">{{recommend.author}}</div>
                <div class="view-counts">
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                  {{recommend.views}}
                </div>
              </div>
            </div>
            <div class="name van-ellipsis">{{recommend.title}}</div>
            <div class="type">{{recommend.type}}</div>
          </van-col>
        </van-row>
        <div class="more-recommend">更多6490个推荐直播 ></div>
      </div>
      <div class="zb-box">
        <div class="title-wrapper">
          <div class="title">英雄联盟</div>
          <div class="button">查看更多</div>
        </div>
        <van-row :gutter="20">
          <van-col v-for="(lol,index) in lolList" :key="index" class="zb-item" span="12">
            <div class="zb-img">
              <img class="coverImg" :src="lol.img" alt>
              <div class="bottom">
                <div class="author">{{lol.author}}</div>
                <div class="view-counts">
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                  {{lol.views}}
                </div>
              </div>
            </div>
            <div class="name van-ellipsis">{{lol.title}}</div>
          </van-col>
        </van-row>
      </div>
      <div class="zb-box">
        <div class="title-wrapper">
          <div class="title">视频唱见</div>
          <div class="button">查看更多</div>
        </div>
        <van-row :gutter="20">
          <van-col v-for="(singer,index) in singerList" :key="index" class="zb-item" span="12">
            <div class="zb-img">
              <img class="coverImg" :src="singer.img" alt>
              <div class="bottom">
                <div class="author">{{singer.author}}</div>
                <div class="view-counts">
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                  {{singer.views}}
                </div>
              </div>
            </div>
            <div class="name van-ellipsis">{{singer.title}}</div>
          </van-col>
        </van-row>
      </div>

      <div class="all-button">
        <span>全部直播</span>
      </div>
    </div>
  </div>
</template>
<script>
import AppCarousel from "@/components/common/carousel";

const carouselImg = [
  require("@/assets/images/home/home-carousel-01.png"),
  require("@/assets/images/home/home-carousel-02.png")
];
const recommendList = [
  {
    img:
      "http://img4.imgtn.bdimg.com/it/u=3260427263,3097788555&fm=26&gp=0.jpg",
    title: "Merry Chiristmas!",
    author: "四月雨April",
    views: "25.2万",
    type: "视频聊天"
  },
  {
    img: "http://img1.imgtn.bdimg.com/it/u=1907611,1818753156&fm=26&gp=0.jpg",
    title: "快乐风男！",
    author: "多啦B萌",
    views: "83.4万",
    type: "英雄联盟"
  },
  {
    img:
      "http://img5.imgtn.bdimg.com/it/u=3111112095,1704812004&fm=26&gp=0.jpg",
    title: "滚 我还能舔10个包",
    author: "狗蛋村王花花",
    views: "33.1万",
    type: "绝地求生"
  },
  {
    img: "http://img2.imgtn.bdimg.com/it/u=206909598,4285502256&fm=26&gp=0.jpg",
    title: "我来啦 接住我！",
    author: "蜜柑喵",
    views: "371.3万",
    type: "视频聊天"
  },
  {
    img: "http://img3.imgtn.bdimg.com/it/u=259711666,1502185775&fm=26&gp=0.jpg",
    title: "第一次打开色相头好紧···",
    author: "丸嘻嘻i",
    views: "2.3万",
    type: "视频唱见"
  },
  {
    img:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=537946554,2398943063&fm=26&gp=0.jpg",
    title: "美女主播 在线扫雷",
    author: "微凉July",
    views: "10.7万",
    type: "其他游戏"
  }
];

const lolList = [
  {
    img: "https://rpic.douyucdn.cn/asrpic/181228/288016_1504.jpg/dy1",
    title: "KeSPA杯 KTvsGen ",
    author: "英雄联盟官方赛事",
    views: "111万"
  },
  {
    img: "https://rpic.douyucdn.cn/asrpic/181228/16101_1459.jpg/dy1",
    title: "希望大家周五快乐~",
    author: "哭泣",
    views: "74.6万"
  },
  {
    img: "https://rpic.douyucdn.cn/asrpic/181228/6130773_1507.jpg/dy1",
    title: "Royal Always Give Up",
    author: "RAG电子竞技俱乐部",
    views: "51.2万"
  },
  {
    img: "https://rpic.douyucdn.cn/asrpic/181228/249813_1504.jpg/dy1",
    title: "上单一霸麻花熊",
    author: "孙小歪",
    views: "18万"
  }
];

const singerList = [
  {
    img: "https://rpic.douyucdn.cn/asrpic/181228/976552_1515.jpg/dy1",
    title: "视频轮播中~直播会提醒",
    author: "蔡包子OvO",
    views: "18.3"
  },
  {
    img:
      "https://rpic.douyucdn.cn/live-cover/roomCover/2018/12/14/3f0adbfbcf8656c44460324044cf73dd.jpg",
    title: "FM第一音神~CD级音质房间",
    author: "橙味沙士",
    views: "74.6万"
  },
  {
    img:
      "https://rpic.douyucdn.cn/live-cover/roomCover/2018/12/23/08b891495f1a0d3720ef171bce7f5f88.jpg",
    title: "毒舌女王攻在线情感解析",
    author: "雨笙I恋雨",
    views: "3.3万"
  },
  {
    img:
      "https://rpic.douyucdn.cn/live-cover/appCovers/2018/11/29/5058569_20181129232828.jpg",
    title: "慵懒小懒猫，在线撒娇",
    author: "喵喵一只懒野猫",
    views: "1.6万"
  }
];

const addZb = require("@/assets/images/home/wyzb.png");

export default {
  components: {
    AppCarousel
  },
  data() {
    return {
      carouselImg: carouselImg,
      recommendList: recommendList,
      lolList: lolList,
      singerList: singerList,
      maxLength: 12,
      addZb: addZb
    };
  },
};
</script>
<style scoped>
.top {
  padding: 10px;
  border-bottom: 1px solid #eee;
  text-align: center;
}
.add {
  position: fixed;
  bottom: 70px;
  right: 10px;
  height:40px;
  width:40px;
  padding: 5px;
  background-size: 85%;
  background-position: center;
  z-index: 1;
  border-radius: 50%;
}

.center {
  padding-bottom: 50px;
}

.zb-box {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.icon-img {
  width: 100%;
  height: 20px;
}
.icon-font {
  font-size: 11px;
  color: #777;
}
.title-wrapper {
  margin-bottom: 15px;
  font-size: 13px;
  overflow: auto;
}
.title-wrapper .title {
  float: left;
  color: #555;
}
.title-wrapper .button {
  float: right;
  color: #999;
}
.zb-item {
  margin-bottom: 20px;
}
.coverImg {
  width: 100%;
  height: 100px;
  border-radius: 4px;
}
.name {
  font-size: 14px;
  color: #555;
}
.type {
  font-size: 11px;
  color: #888;
  font-weight: 300;
}
.zb-img {
  position: relative;
}
.bottom {
  position: absolute;
  width: 90%;
  bottom: 0;
  padding: 5%;
  color: #fff;
  font-size: 11px;
  font-weight: 300;
}
.bottom .author {
  float: left;
}
.bottom .view-counts {
  float: right;
}
.more-recommend {
  margin-bottom: 10px;
  color: #fb7299;
  text-align: center;
  font-size: 13px;
}
.all-button {
  text-align: center;
  background: #eee;
  height: 20px;
  padding: 20px;
}
.all-button span {
  padding: 5px 20px;
  border: 1px solid #aaa;
  color: #aaa;
  font-size: 12px;
  border-radius: 4px;
}
</style>


