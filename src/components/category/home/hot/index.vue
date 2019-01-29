<template>
  <div id="hot">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(hot,index) in hotList" :key="index" class="hot-item van-hairline--bottom">
        <div class="cover-img" :style="{'background-image':'url(' + hot.cover + ')'}">
          <div class="insde">
            <span class="insde-item">{{hot.duration}}</span>
            <span class="insde-item">{{hot.see}}观看</span>
            <span class="insde-item">{{hot.barrage}}弹幕</span>
          </div>
        </div>
        <div class="avatar" :style="{'background-image':'url(' + hot.avatar + ')'}"></div>
        <div class="desc">
          <div class="title">
            <van-tag color="#f2826a">{{hot.tag}}</van-tag>
            {{hot.title}}
          </div>
          <div class="tags">{{hot.author}} · {{hot.time}}</div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
const hotList = [
  {
    cover:
      "http://img5.imgtn.bdimg.com/it/u=1039895439,3835049928&fm=26&gp=0.jpg",
    title: "汤姆和杰瑞的桃色情史",
    tag: "很多人点赞",
    author: "阿米也",
    time: "23小时前",
    avatar:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3690070270,2979706391&fm=27&gp=0.jpg",
    duration: "18:22",
    see: "27.4万",
    barrage: "5711"
  },
  {
    cover:
      "http://img5.imgtn.bdimg.com/it/u=1082556746,72656769&fm=26&gp=0.jpg",
    title: "十年，无悔入漫威",
    tag: "很多人点赞",
    author: "努力的Lorre",
    time: "14小时前",
    avatar:
      "http://img2.imgtn.bdimg.com/it/u=4055590865,3391288759&fm=26&gp=0.jpg",
    duration: "6:39",
    see: "46.8万",
    barrage: "3561"
  },
  {
    cover:
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3962983260,1409420763&fm=26&gp=0.jpg",
    title: "[德国骨科]盘点那些爱上妹妹的男主♂",
    tag: "很多人点赞",
    author: "Cordova",
    time: "1天前",
    avatar:
      "http://img5.imgtn.bdimg.com/it/u=2858851975,2781146372&fm=26&gp=0.jpg",
    duration: "20:11",
    see: "76.1万",
    barrage: "52135"
  }
];

export default {
  data() {
    return {
      hotList: hotList,
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        let param = {
          cover:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3962983260,1409420763&fm=26&gp=0.jpg",
          title: "[德国骨科]盘点那些爱上妹妹的男主♂",
          tag: "很多人点赞",
          author: "Cordova",
          time: "1天前",
          avatar:
            "http://img5.imgtn.bdimg.com/it/u=2858851975,2781146372&fm=26&gp=0.jpg",
          duration: "20:11",
          see: "76.1万",
          barrage: "52135"
        };
        this.hotList.push(param);
        // 加载状态结束
        this.loading = false;
      }, 500);
    }
  }
};
</script>
<style scoped>
#hot {
  padding-bottom: 70px;
  z-index: 2;
}
.hot-item {
  padding: 10px;
}
.cover-img {
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin-bottom: 10px;
}
.avatar {
  float: left;
  width: 35px;
  height: 35px;
  margin-right: 5px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}
.title {
  font-size: 13px;
  color: #444;
}
.tags {
  font-size: 11px;
  color: #777;
}
.insde {
  position: absolute;
  bottom: 0;
  padding: 5px;
  color: #eee;
  font-size: 12px;
}
.insde-item {
  margin-right: 10px;
}
.insde-item:first-child {
  padding: 2px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
</style>


