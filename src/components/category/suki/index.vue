<template>
  <div>
    <div class="my-suki van-hairline--bottom">
      <div class="top">
        <div class="title">我的追番</div>
        <div class="see">查看全部 &gt;</div>
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
  </div>
</template>
<script>
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
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1408967773,2523789976&fm=26&gp=0.jpg",
    now: "1",
    title: "玻璃之花与崩坏的世界",
    history: "",
    all: "1"
  }
];
export default {
  data() {
    return {
      mySukiList: mySukiList
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
.my-suki {
  position: relative;
  padding: 10px;
}
.my-suki:before {
  content: "";
  position: absolute;
  bottom: 0;
  height: 1px;
  background: #eee;
  transform: scaleY(0.5);
  width: 100%;
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
.my-suki .cover:before {
  position: absolute;
  bottom: 0;
  content: "";
  width: 80%;
  box-shadow: 10px -10px 5px 10px rgba(0, 0, 0, 0.3);
}
.info {
  position: absolute;
  bottom: 0;
  width: 90%;
  padding: 0 5%;
  font-size: 11px;
  color: #fff;
  z-index: 2;
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
.my-suki .content::-webkit-scrollbar {
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
</style>

