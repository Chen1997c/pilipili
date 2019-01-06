<template>
  <div class="suki">
    <div class="my-suki van-hairline--bottom">
      <div class="top">
        <div class="title">我的追番</div>
        <div class="see">查看全部 〉</div>
      </div>
      <div
        class="content"
        @touchmove="stopEvt($event)"
        @touchend="stopEvt($event)"
        @touchStart="stopEvt($event)"
      >
        <div class="wrapper">
          <div class="item" v-for="(mySuki,index) in mySukiList" :key="index">
            <div class="cover" :style="{'background-image':'url(' + mySuki.cover + ')'}">
              <div class="info">
                <template v-if="mySuki.now < mySuki.all">更新至第{{mySuki.now}}话</template>
                <template v-else>全{{mySuki.all}}话</template>
              </div>
            </div>
            <div class="van-ellipsis title">{{mySuki.title}}</div>
            <div class="history" :style="{'color': mySuki.history!==mySuki.all?'#fb7299':'#999'}">
              <template v-if="mySuki.history">看到第{{mySuki.history}}话</template>
              <template v-else>尚未观看</template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar van-hairline--bottom">
      <div class="button-nav">
        <div class="item">
          <img class="icon-img" src="@/assets/images/zhuifan/tv.png" alt="tv">
          <br>番剧
        </div>
        <div class="item">
          <img class="icon-img" src="@/assets/images/zhuifan/qiezi.png" alt="qiezi">
          <br>国创
        </div>
        <div class="item">
          <img class="icon-img" src="@/assets/images/zhuifan/shijianbiao.png" alt="shijianbiao">
          <br>时间表
        </div>
        <div class="item">
          <img class="icon-img" src="@/assets/images/zhuifan/suoyin.png" alt="suoyin">
          <br>索引
        </div>
        <div class="item">
          <img class="icon-img" src="@/assets/images/zhuifan/dianping.png" alt="dianping">
          <br>点评
        </div>
      </div>
      <app-carousel :carouselImg="carouselImg"/>
    </div>

    <div class="recommend van-hairline--bottom">
      <div class="top">
        <div class="title">番剧推荐</div>
        <div class="see">查看全部 〉</div>
      </div>
      <van-row :gutter="10">
        <van-col v-for="(recommend,index) in recommendFanju" :key="index" :span="8">
          <div class="cover" :style="{'background-image':'url(' + recommend.cover + ')'}">
            <div class="like">
              <van-icon v-if="recommend.like === 0" name="like-o" style="color:#fff"/>
              <van-icon v-else name="like" style="color:#fb7299"/>
            </div>
            <div class="bottom">{{recommend.likeCount}}人追番</div>
          </div>
          <div class="content">
            <div class="title">{{recommend.title}}</div>
            <div class="state">
              <template v-if="recommend.now === recommend.all">全{{recommend.now}}话</template>
              <template v-else>更新至第{{recommend.now}}话</template>
            </div>
          </div>
        </van-col>
      </van-row>
      <div class="change">
        <i class="iconfont icon-28" style="font-size:12px"></i>
        换一换
      </div>
    </div>
    <div class="recommend van-hairline--bottom">
      <div class="top">
        <div class="title">国创推荐</div>
        <div class="see">查看全部 〉</div>
      </div>
      <van-row :gutter="10">
        <van-col v-for="(recommend,index) in recommendGuochuang" :key="index" :span="8">
          <div class="cover" :style="{'background-image':'url(' + recommend.cover + ')'}">
            <div class="like">
              <van-icon v-if="recommend.like === 0" name="like-o" style="color:#fff"/>
              <van-icon v-else name="like" style="color:#fb7299"/>
            </div>
            <div class="bottom">{{recommend.likeCount}}人追番</div>
          </div>
          <div class="content">
            <div class="title">{{recommend.title}}</div>
            <div class="state">
              <template v-if="recommend.now === recommend.all">全{{recommend.now}}话</template>
              <template v-else>更新至第{{recommend.now}}话</template>
            </div>
          </div>
        </van-col>
      </van-row>
      <div class="change">
        <i class="iconfont icon-28" style="font-size:12px"></i>
        换一换
      </div>
    </div>
    <div class="recommend van-hairline--bottom">
      <div class="top">
        <div class="title">兴趣推荐</div>
      </div>
      <van-row :gutter="10">
        <van-col v-for="(recommend,index) in recommendXingqu" :key="index" :span="8">
          <div class="cover" :style="{'background-image':'url(' + recommend.cover + ')'}">
            <div class="like">
              <van-icon v-if="recommend.like === 0" name="like-o" style="color:#fff"/>
              <van-icon v-else name="like" style="color:#fb7299"/>
            </div>
            <div class="bottom">{{recommend.likeCount}}人追番</div>
          </div>
          <div class="content">
            <div class="title">{{recommend.title}}</div>
            <div class="state">
              <template v-if="recommend.now === recommend.all">全{{recommend.now}}话</template>
              <template v-else>更新至第{{recommend.now}}话</template>
            </div>
          </div>
        </van-col>
      </van-row>
      <div class="change">
        <i class="iconfont icon-28" style="font-size:12px"></i>
        换一换
      </div>
    </div>

    <div class="editor-recommend van-hairline--bottom">
      <div class="top">
        <div class="title">编辑推荐</div>
      </div>
      <div class="content" v-for="(recommend,index) in recommendEditor" :key="index">
        <div class="cover" :style="{'background-image':'url(' + recommend.cover + ')'}">
          <div class="new" v-if="recommend.new">
            <van-tag color="#fb7299">NEW</van-tag>
          </div>
        </div>
        <div class="title">{{recommend.title}}</div>
        <div class="description ellipsis-two">{{recommend.description}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import AppCarousel from "@/components/common/carousel";

const mySukiList = [
  {
    cover:
      "http://img4.imgtn.bdimg.com/it/u=2496912022,4181704090&fm=26&gp=0.jpg",
    now: "13",
    title: "关于我转生变成史莱姆这档事",
    history: "12",
    all: "14"
  },
  {
    cover:
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2193070874,3194215869&fm=26&gp=0.jpg",
    now: "12",
    title: "ISLAND",
    history: "7",
    all: "12"
  },
  {
    cover:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3514265865,3272415225&fm=26&gp=0.jpg",
    now: "14",
    title: "甘城光辉游乐园",
    history: "14",
    all: "14"
  },
  {
    cover:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1408967773,2523789976&fm=26&gp=0.jpg",
    now: "26",
    title: "白色相簿",
    history: "16",
    all: "26"
  },
  {
    cover:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3982544615,359219413&fm=26&gp=0.jpg",
    now: "1",
    title: "玻璃之花与崩坏的世界",
    history: "",
    all: "1"
  }
];

const carouselImg = [
<<<<<<< HEAD
  require("@/assets/images/zhuifan/z01.jpg"),
  require("@/assets/images/zhuifan/z02.jpg"),
  require("@/assets/images/zhuifan/z03.jpg"),
  require("@/assets/images/zhuifan/z04.jpg"),
=======
  require("E://app/zhuifan/ci1.jpg"),
  require("E://app/zhuifan/ci2.jpg"),
  require("E://app/zhuifan/ci3.jpg"),
  require("E://app/zhuifan/ci4.jpg"),
  require("E://app/zhuifan/ci5.png")
>>>>>>> a5f664d3b7ed675db2636c51f463651d08f8ff13
];

const recommendFanju = [
  {
    title: "Angels of Death",
    like: 0,
    likeCount: "311.4万",
    now: "16",
    all: "16",
    cover:
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2224972576,55457597&fm=26&gp=0.jpg"
  },
  {
    title: "邻家索菲",
    like: 0,
    likeCount: "84.5万",
    now: "12",
    all: "12",
    cover:
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4179670235,3859730544&fm=26&gp=0.jpg"
  },
  {
    title: "关于我转身成为史莱姆这档事",
    like: 1,
    likeCount: "326.9万",
    now: "13",
    all: "14",
    cover:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2900466845,3759557421&fm=11&gp=0.jpg"
  }
];

const recommendGuochuang = [
  {
    title: "我是江小白 第二季",
    like: 0,
    likeCount: "20.6万",
    now: "10",
    all: "13",
    cover:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1005590211,702912795&fm=26&gp=0.jpg"
  },
  {
    title: "我家大师兄脑子有坑 特别篇",
    like: 0,
    likeCount: "36.5万",
    now: "11",
    all: "12",
    cover:
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3991887434,4045133595&fm=26&gp=0.jpg"
  },
  {
    title: "少年歌行",
    like: 0,
    likeCount: "21.5万",
    now: "4",
    all: "14",
    cover:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3720017414,3450799006&fm=26&gp=0.jpg"
  }
];

const recommendXingqu = [
  {
    title: "刺客伍六七",
    like: 0,
    likeCount: "250万",
    now: "14",
    all: "14",
    cover:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1876960871,2056840831&fm=26&gp=0.jpg"
  },
  {
    title: "邻家索菲",
    like: 1,
    likeCount: "84.5万",
    now: "14",
    all: "14",
    cover:
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3424049100,3784954681&fm=26&gp=0.jpg"
  },
  {
    title: "青春猪头少年不会梦到兔女郎学姐",
    like: 1,
    likeCount: "297.9万",
    now: "13",
    all: "13",
    cover:
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3496535248,3168604779&fm=26&gp=0.jpg"
  },
  {
    title: "狐妖小红娘",
    like: 1,
    likeCount: "509.3万",
    now: "72",
    all: "100",
    cover:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3487074284,2071972042&fm=26&gp=0.jpg"
  },
  {
    title: "青春纪行",
    like: 0,
    likeCount: "27.9万",
    now: "24",
    all: "24",
    cover:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3180781584,2792455888&fm=26&gp=0.jpg"
  },
  {
    title: "剑网三 · 侠肝义胆沈剑心",
    like: 0,
    likeCount: "77.3万",
    now: "12",
    all: "12",
    cover:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=812775563,181527816&fm=26&gp=0.jpg"
  }
];

const recommendEditor = [
  {
    title: "博多豚骨拉面团",
    new: 1,
    cover:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4076137424,59067819&fm=26&gp=0.jpg"
  },
  {
    title: "【完结推荐】 战斗吧歌姬 第二季",
    new: 1,
    description: "这个世界需要你!",
    cover:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2148717316,3761494878&fm=11&gp=0.jpg"
  },
  {
    title: "爱吃拉面的小泉同学",
    description:
      "今天，她也在某处相拥着拉面————冷淡而沉默，不和他人亲近的神秘转学生，小泉同学。她其实是每天追求着美味拉面的拉面专家······！？",
    cover:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1511965406,2920900754&fm=15&gp=0.jpg"
  },
  {
    title: "伏 铁砲娘的捕物帐",
    description:
      "改编自日本小说家 樱庭一树笔下作品《伏-赝作 · 里见八犬传》，今年秋季将推出动画电影《伏 铁砲娘的捕物帐》。于2010年11月于文艺春秋社出版发表的",
    cover:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1085265963,2529964797&fm=15&gp=0.jpg"
  },
  {
    title: "2019 pilipili 国产动画冬季导视",
    description:
      "领风者、凹凸世界第三季、请吃红小豆吧！第二季、萌妻食神等国产动画红红火火开播啦！",
    cover:
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2796479638,2632030393&fm=11&gp=0.jpg"
  },
  {
    title: "【资讯档】 2018年第52周",
    cover:
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1862119855,3846420898&fm=11&gp=0.jpg"
  }
];
export default {
  components: {
    AppCarousel
  },
  data() {
    return {
      mySukiList: mySukiList,
      carouselImg: carouselImg,
      recommendFanju: recommendFanju,
      recommendGuochuang: recommendGuochuang,
      recommendXingqu: recommendXingqu,
      recommendEditor: recommendEditor
    };
  },
  methods: {
    stopEvt(e) {
      e.stopPropagation();
    }
  }
};
</script>
<style scoped>
.suki {
  padding-bottom: 60px;
}
.my-suki,
.navbar,
.recommend,
.editor-recommend {
  position: relative;
  padding: 10px;
}
.top {
  margin-bottom: 5px;
  overflow: auto;
}
.top .title {
  float: left;
  font-size: 13px;
}
.top .see {
  float: right;
  font-size: 11px;
  color: #999;
}
.my-suki .cover {
  position: relative;
  height: 80px;
  border-radius: 4px;
  background-position: center;
  background-size: cover;
}
.info {
  position: absolute;
  bottom: 0;
  width: 90%;
  padding: 0 5%;
  font-size: 11px;
  color: #fff;
  z-index: 2;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(33, 33, 33, 0)),
    to(rgba(33, 33, 33, 0.5))
  );
}
.my-suki .title {
  line-height: 20px;
  font-size: 13px;
}
.my-suki .history {
  line-height: 8px;
  font-size: 12px;
  padding-bottom: 2px;
}
.my-suki .content {
  width: 100%;
  overflow-x: scroll;
}
.my-suki .content:-webkit-scrollbar {
  display: none;
}
.my-suki .wrapper {
  display: flex;
  float: left;
  min-width: 100%;
}
.my-suki .item {
  width: 120px;
  margin-right: 10px;
}
.button-nav {
  overflow: auto;
  width: 90%;
  margin: 5px auto 20px auto;
}
.button-nav .item {
  float: left;
  width: 20%;
  text-align: center;
  font-size: 12px;
  color: #666;
}

.icon-img {
  height: 20px;
}
.recommend .cover {
  position: relative;
  height: 140px;
  border-radius: 4px;
  background-position: center;
  background-size: cover;
}
.recommend .like {
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 20px;
  padding: 5px 0;
  font-size: 20px;
  text-align: center;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
}
.recommend .cover:before {
  position: absolute;
  bottom: 0;
  content: "";
  width: 80%;
  box-shadow: 10px -10px 5px 10px rgba(0, 0, 0, 0.3);
}
.recommend .bottom {
  position: absolute;
  bottom: 0;
  width: 90%;
  padding: 0 5%;
  font-size: 11px;
  color: #fff;
  z-index: 2;
}
.recommend .content {
  margin: 2px 0;
}
.recommend .title {
  font-size: 13px;
  line-height: 15px;
}
.recommend .state {
  font-size: 11px;
  color: #999;
  line-height: 11px;
}
.recommend .change {
  margin: 5px;
  text-align: center;
  color: #fb7299;
  font-size: 12px;
}
.editor-recommend .cover {
  position: relative;
  height: 150px;
  border-radius: 4px;
  background-position: center;
  background-size: cover;
}
.editor-recommend .content {
  margin-bottom: 10px;
}
.editor-recommend .new {
  position: absolute;
  top: 1px;
  right: 5px;
}
.editor-recommend .content .title {
  font-size: 14px;
  color: #555;
}
.editor-recommend .content .description {
  font-size: 12px;
  color: #aaa;
  line-height: 13px;
}
</style>

