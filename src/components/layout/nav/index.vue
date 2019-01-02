<template>
  <div id="nav">
    <div class="tab van-hairline--bottom" :style="{'position':position}">
      <div class="wrapper">
        <div
          v-for="(list,index) in tabList"
          @click="change(index)"
          :class="index==active?itemClass.activeClass:itemClass.baseClass"
          :key="index"
        >{{list}}</div>
      </div>
    </div>
    <van-swipe ref="swipe" :loop="false" @change="changactive">
      <van-swipe-item v-for="(item,index) in tabList" :title="item" :key="index">
        <app-live v-if="index === 0"/>
        <app-recommend v-if="index === 1"/>
        <app-hot v-if="index === 2"/>
        <app-suki v-if="index === 3"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import AppLive from "@/components/category/live";
import AppRecommend from "@/components/category/recommend";
import AppHot from "@/components/category/hot";
import AppSuki from "@/components/category/suki";

let $tab;
const baseList = ["直播", "推荐", "热门", "追番"];

export default {
  components: {
    AppHot,
    AppRecommend,
    AppLive,
    AppSuki
  },
  data() {
    return {
      active: 0,
      tabList: baseList,
      itemClass: {
        baseClass: "tab-item",
        activeClass: "tab-item active"
      },
      position: "static"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    change(index) {
      this.active = index;
      this.$refs.swipe.swipeTo(index);
    },
    changactive(index) {
      this.active = index;
    },
    handleScroll() {
      let clientHeight = document.documentElement.scrollTop;
      if (clientHeight > 45) {
        this.position = "fixed";
      } else {
        this.position = "static";
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
.tab {
  top: 0;
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  font-size: 13px;
  color: #777;
  text-align: center;
  z-index: 2;
  background: #fff;
}
.wrapper {
  margin: 0 auto;
  width: 60%;
}
.tab:after {
  content: " ";
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  border: 0 solid #ebedf0;
}
.tab .tab-item {
  float: left;
  width: 19%;
  margin: 0 3%;
  padding: 7px 0;
}

.active {
  color: #fb7299;
  border-bottom: 2px solid #fb7299;
}
</style>


