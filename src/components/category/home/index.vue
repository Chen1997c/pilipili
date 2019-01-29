<template>
  <div id="nav">
    <van-tabs
      :line-height="2"
      :line-width="35"
      color="#fb7299"
      class="tab"
      v-model="active"
      animated
      sticky
      swipeable
      @click="changeActive"
    >
      <van-tab v-for="(item,index) in tabList" :title="item"></van-tab>
    </van-tabs>
    <van-swipe ref="swipe" @change="change" :loop="false" :duration="250" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in tabList">
        <app-recommend v-if="index === 0"/>
        <app-hot v-if="hotInit && index === 1"/>
        <app-suki v-if="sukiInit && index === 2"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import AppRecommend from "@/components/category/home/recommend";
import AppHot from "@/components/category/home/hot";
import AppSuki from "@/components/category/home/suki";
let $tabAll;
const baseList = ["推荐", "热门", "追番"];
export default {
  components: {
    AppHot,
    AppRecommend,
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
      position: "static",
      hotInit: null,
      sukiInit: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      $tabAll = document.getElementsByClassName("van-tab");
      $tabAll[0].style.color = "#fb7299";
      let $tabItem = document.getElementsByClassName("van-swipe-item");
      for (let i = 0; i < $tabItem.length; i++) {
        $tabItem[i].style.overflow = "scroll";
        $tabItem[i].style.height = "700px";
      }
    });
  },
  methods: {
    changeActive(index) {
      this.$refs.swipe.swipeTo(index);
    },
    change(index) {
      switch (index) {
        case 1:
          this.hotInit = 1;
          break;
        case 2:
          this.sukiInit = 1;
          break;
        default:
          break;
      }
      for (let i = 0; i < $tabAll.length; i++) {
        $tabAll[i].style.color = "#555";
      }
      $tabAll[index].style.color = "#fb7299";
      this.active = index;
    }
  }
};
</script>
<style scoped>
.tab {
  width: 70%;
}
.active {
  color: #fb7299;
  border-bottom: 2px solid #fb7299;
}
</style
