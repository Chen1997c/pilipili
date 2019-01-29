<template>
  <div class="recommend">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-row :gutter="10">
        <van-col class="item" v-for="(recommend,index) in recommendList" :key="index" :span="12">
          <div class="cover-img" :style="{'background-image':'url(' + recommend.cover + ')'}">
            <div class="inside">
              <div class="inside-left">
                <template v-if="recommend.article">
                  <i class="iconfont icon-eye icon"></i>
                  {{recommend.playback}}
                </template>
                <template v-else>
                  <i class="iconfont icon-eye icon"></i>
                  {{recommend.playback}}
                </template>
                <i class="iconfont icon-64 icon"></i>
                {{recommend.comments}}
              </div>
              <div class="inside-right" v-if="!recommend.article">{{recommend.duration}}</div>
            </div>
          </div>
          <div class="content">
            <div class="title van-ellipsis">{{recommend.title}}</div>
            <div class="tags">
              <div class="type">
                <van-tag plain type="danger" v-if="recommend.article">文章</van-tag>
                <template v-if="recommend.article">&nbsp;</template>
                <van-tag
                  v-if="recommend.zan > 9999"
                  color="#FF6600"
                >{{remainWan(recommend.zan,10000)}}万点赞</van-tag>
                <template v-else>
                  <van-tag
                    v-if="recommend.coin > 4999"
                    color="#FF6600"
                  >{{remainWan(recommend.coin,1000)}}万硬币</van-tag>
                  <template v-else>{{recommend.category}} · {{recommend.type}}</template>
                </template>
              </div>
              <div class="more">
                <i class="iconfont icon-gengduo"></i>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </van-list>
  </div>
</template>
<script>
const recommendList = [
  {
    cover:
      "http://img3.imgtn.bdimg.com/it/u=1033002605,3351760838&fm=26&gp=0.jpg",
    playback: "25.2万",
    comments: "1382",
    duration: "4:33",
    title: "【万恶之源】杀马特家族最激情的斗舞PK，不服来辩",
    category: "视频剪辑",
    type: "万恶之源",
    zan: "5213",
    coin: "2351"
  },
  {
    cover:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1081582386,1683664982&fm=26&gp=0.jpg",
    playback: "25.2万",
    comments: "1382",
    duration: "4:33",
    title: "花前月下，致那些年我们玩的经典作品",
    category: "游戏",
    type: "网络游戏",
    zan: "1213",
    coin: "2351",
    article: "1"
  },
  {
    cover:
      "http://img5.imgtn.bdimg.com/it/u=693845616,1402473833&fm=26&gp=0.jpg",
    playback: "7.8万",
    comments: "799",
    duration: "2:30",
    title: "大学女生打饭时就想伸头看看菜，没想到头卡住了，惨叫连连！",
    category: "日常",
    type: "吐槽",
    zan: "5213",
    coin: "2351"
  },
  {
    cover:
      "http://img3.imgtn.bdimg.com/it/u=2412666315,4208585026&fm=11&gp=0.jpg",
    playback: "97.6万",
    comments: "3658",
    duration: "2:26",
    title: "当改革春风吹到社会摇，简直能把人笑晕<。)#)))",
    category: "日常",
    type: "万恶之源",
    zan: "5213",
    coin: "9000"
  },
  {
    cover:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=681894405,304122799&fm=26&gp=0.jpg",
    playback: "156.8万",
    comments: "2.2万",
    duration: "2:11:42",
    title: "【动作/惊悚】碟中谍5:神秘国度(2015)",
    category: "欧美电影",
    type: "阿汤哥",
    zan: "17512",
    coin: "2351"
  }
];
export default {
  data() {
    return {
      recommendList: recommendList,
      loading: false,
      finished: false
    };
  },
  methods: {
    remainWan(item, base) {
      return parseInt(item / base);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        let param = {
          cover:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1081582386,1683664982&fm=26&gp=0.jpg",
          playback: "25.2万",
          comments: "1382",
          duration: "4:33",
          title: "花前月下，致那些年我们玩的经典作品",
          category: "游戏",
          type: "网络游戏",
          zan: "1213",
          coin: "2351",
          article: "1"
        };
        this.recommendList.push(param);
        // 加载状态结束
        this.loading = false;
        if (this.recommendList.length >= 20) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style scoped>
.recommend {
  padding: 0 10px;
  padding-bottom: 70px;
  background: #eee;
}
.item {
  padding-top: 10px;
}
.cover-img {
  position: relative;
  height: 100px;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
}
.inside {
  position: absolute;
  bottom: 0;
  width: 90%;
  padding: 0 5%;
  font-size: 12px;
  color: #fff;
  line-height: 16px;
  font-weight: 300;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(33, 33, 33, 0)),
    to(rgba(33, 33, 33, 0.5))
  );
}
.inside-left {
  float: left;
}
.inside-left .icon {
  font-size: 12px;
}
.inside-right {
  float: right;
}
.content {
  padding: 7px 12px;
  background: #fff;
  overflow: auto;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.title {
  color: #555;
  font-size: 13px;
  margin-bottom: 5px;
}
.type {
  float: left;
  color: #999;
  font-size: 11px;
}
.more {
  float: right;
}
</style>


