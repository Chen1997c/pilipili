<template>
  <div>
    <div class="header">
      <i class="iconfont icon-58"></i>
      &nbsp;&nbsp;&nbsp;
      第12话 - 故障的齿轮
    </div>
    <van-tabs
      :line-height="2"
      :line-width="35"
      color="#fb7299"
      class="tab"
      v-model="active"
      @click="changeActive"
      animated
      sticky
    >
      <van-tab title="简介">
        <div class="van-hairline--bottom">
          <van-row :gutter="10" class="wrapper app-padding">
            <van-col :span="6">
              <div class="cover" :style="{'background-image':'url('+resource.cover+')'}"></div>
            </van-col>
            <van-col :span="13" class="info">
              <div class="van-ellipsis title">{{resource.title}}</div>
              <div class="info-tag">{{resource.state}}</div>
              <div class="info-tag">
                <i class="iconfont icon-Play"></i>
                {{resource.playBack}}
              </div>
              <div class="info-tag ellipsis-two" v-html="resource.description"></div>
            </van-col>
            <van-col class="breif-item" :span="5">
              <div class="like">
                <i class="iconfont icon-like" style="font-size:13px"></i> 追番
              </div>
              <div class="grade">
                <div class="var">
                  {{resource.grade}}
                  <span style="font-size:13px">分</span>
                </div>
                <div class="var-num">{{resource.gradeNum}}人</div>
              </div>
            </van-col>
          </van-row>
          <div class="button-act">
            <div class="item">
              <i class="iconfont icon-Bbi"></i>
              <br>
              {{resource.coin}}
            </div>
            <div class="item">
              <i class="iconfont icon-download"></i>
              <br>下载
            </div>
            <div class="item">
              <i class="iconfont icon-iconfontpinglun"></i>
              <br>点评
            </div>
            <div class="item">
              <i class="iconfont icon-zhuanfa"></i>
              <br>
              {{resource.trans}}
            </div>
          </div>
        </div>
        <div class="van-hairline--bottom desc-2">
          <div class="app-top">
            <div class="title">选集</div>
            <div class="see">更新至第 13 话 〉</div>
          </div>
          <div ref="inside" class="inside">
            <div class="position-list" :style="{'': positionMove(resource.rank)}">
              <div
                v-for="(position,index) in resource.position"
                :key="index"
                :style="{'color': resource.rank != index+1?positionStyle.color:themeColor,
                'border-color': resource.rank != index+1?positionStyle.color:themeColor }"
                class="item"
              >
                <span
                  :style="{'color': resource.rank != index+1?positionStyle.positionColor:themeColor}"
                  class="position-title"
                >
                  第 {{index + 1}} 话
                  <br>
                </span>
                {{position}}
              </div>
            </div>
          </div>
        </div>
        <div class="app-padding">
          <div class="app-top">
            <div class="title">更多推荐</div>
          </div>
          <div v-for="(anime,index) in moreAnimations" :key="index" class="van-hairline--bottom">
            <van-row :gutter="10" class="more-recommend">
              <van-col :span="9">
                <div
                  :style="{'background-image': 'url(' + anime.cover + ')'}"
                  class="recommend-cover"
                ></div>
              </van-col>
              <van-col :span="9">
                <div class="recommend-content">
                  <div class="title">{{anime.title}}</div>
                  <div class="box">
                    <div class="all">全{{anime.all}}话</div>
                    <div class="app-clear">
                      <div class="app-fl">
                        <i class="iconfont icon-Play"/>
                        {{anime.playBack}}
                      </div>
                      <div class="app-fr">
                        <i class="iconfont icon-like"/>
                        {{anime.likeNum}}
                      </div>
                    </div>
                  </div>
                </div>
              </van-col>
              <van-col :span="6">
                <div class="recommend-right">
                  <div class="grade">
                    <div class="var">
                      {{anime.grade}}
                      <span style="font-size:13px">分</span>
                    </div>
                    <div class="var-num">{{anime.gradeNum}}人</div>
                  </div>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </van-tab>
      <van-tab :title="'评论' + resource.comment"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
let $tabAll;
const moreAnimations = [
  {
    cover:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3875242758,599955602&fm=26&gp=0.jpg",
    title: "工作细胞",
    all: "14",
    playBack: "1.4亿",
    likeNum: "591.4万",
    grade: "9.7",
    gradeNum: "5万"
  },
  {
    cover:
      "http://img4.imgtn.bdimg.com/it/u=198076645,1657432707&fm=26&gp=0.jpg",
    title: "Angels of Death",
    all: "16",
    playBack: "6464.3万",
    likeNum: "311.8万",
    grade: "9.6",
    gradeNum: "3.3万"
  },
  {
    cover:
      "http://img2.imgtn.bdimg.com/it/u=1802938731,1816739531&fm=26&gp=0.jpg",
    title: "OVERLORD Ⅲ",
    all: "13",
    playBack: "1.3亿",
    likeNum: "347.8万",
    grade: "9.4",
    gradeNum: "5.2万"
  }
];

const resource = {
  cover:
    "http://img1.imgtn.bdimg.com/it/u=1552599811,1988869548&fm=11&gp=0.jpg",
  title: "关于我转生变成史莱姆的这档事",
  comment: "1.4万",
  playBack: "7136.6万",
  like: "328.2万",
  state: "连载中，每周二0:30更新",
  description:
    "史莱姆的生活开始了。<br>上班族的圣诞快乐将萨克拉就打开拉萨经典款了",
  grade: "9.6",
  gradeNum: "2.8万",
  coin: "48万",
  downAccess: 1,
  trans: "3.1万",
  position: [
    "暴风龙维鲁德拉",
    "与哥布林们的邂逅",
    "哥布林村中的战斗",
    "在矮人王国",
    "英雄王加泽尔·多瓦格",
    "静",
    "爆炎支配者",
    "继承的愿望",
    "大鬼族的袭击",
    "猪头帝",
    "加维鲁登场!",
    "故障的齿轮",
    "大冲突"
  ],
  rank: 12
};
export default {
  data() {
    return {
      active: 0,
      resource: resource,
      positionStyle: {
        positionColor: "#444",
        color: "#999"
      },
      themeColor: "#fb7299",
      moreAnimations: moreAnimations
    };
  },
  methods: {
    changeActive(index) {
      for (let i = 0; i < $tabAll.length; i++) {
        $tabAll[i].style.color = "#555";
      }
      $tabAll[index].style.color = this.themeColor;
    },
    positionMove(rank) {
      return (rank - 1) * 186;
    }
  },
  mounted() {
    this.$nextTick(() => {
      $tabAll = document.getElementsByClassName("van-tab");
      $tabAll[0].style.color = this.themeColor;
      this.$refs.inside.scrollLeft = this.positionMove(this.resource.rank);
    });
  }
};
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  padding: 15px;
  color: #fff;
  z-index: 2;
}
.wrapper {
  overflow: auto;
}
.cover {
  height: 100px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
}
.info .title {
  font-size: 16px;
  color: #555;
}
.info-tag {
  font-size: 12px;
  color: #999;
}
.like {
  width: 100%;
  float: right;
  border-radius: 2px;
  padding: 2px 0;
  text-align: center;
  background: #fb7299;
  color: #fff;
  font-size: 13px;
}
.breif-item {
  position: relative;
  height: 100px;
}
.grade {
  position: absolute;
  right: 5px;
  bottom: 0;
  text-align: center;
}
.grade .var {
  font-size: 22px;
  color: rgb(255, 200, 47);
  font-weight: 300;
}
.grade .var-num {
  font-size: 11px;
  color: #bbb;
  line-height: 10px;
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
  font-size: 18px;
}
.desc-2 {
  padding: 10px;
}
.inside {
  width: 100%;
  overflow-x: scroll;
}
.inside::-webkit-scrollbar {
  display: none;
}
.position-list {
  position: relative;
  float: left;
  display: flex;
  min-width: 100%;
  color: #999;
  font-size: 14px;
}
.position-title {
  color: #444;
}
.position-list .item {
  width: 160px;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #999;
  margin-right: 10px;
}

.more-recommend {
  padding: 15px 0;
}
.recommend-cover {
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  height: 80px;
}

.recommend-content {
  position: relative;
  height: 80px;
}
.recommend-content .title {
  font-size: 14px;
  line-height: 15px;
  color: #666;
}
.recommend-content .box {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #999;
  font-size: 11px;
}
.recommend-content .all {
  line-height: 20px;
}
.recommend-content .iconfont {
  font-size: 11px;
}
.recommend-right {
  position: relative;
  height: 80px;
}
.recommend-right .grade {
  top: 0;
  right: 10px;
}
</style>


