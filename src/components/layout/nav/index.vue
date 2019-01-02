<template>
  <div id="nav">
    <van-tabs
      :line-height="2"
      :line-width="35"
      color="#fb7299"
      class="tab"
      @click="changeActive"
      v-model="active"
      animated
      sticky
    >
      <van-tab v-for="(item,index) in tabList" :title="item">
        <app-live v-show="active === 0" v-if="index === 0"/>
        <app-recommend v-show="active === 1" v-if="recommendInit && index === 1"/>
        <app-hot v-show="active === 2" v-if="hotInit && index === 2"/>
        <app-suki v-show="active === 3" v-if="sukiInit && index === 3"/>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import AppLive from "@/components/category/live";
import AppRecommend from "@/components/category/recommend";
import AppHot from "@/components/category/hot";
import AppSuki from "@/components/category/suki";
let $tabAll;
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
      position: "static",
      recommendInit: null,
      hotInit: null,
      sukiInit: null
    };
  },
  mounted() {
    window.onload = () => {
      $tabAll = document.getElementsByClassName("van-tab");
      $tabAll[0].style.color = "#fb7299";
    };
  },
  methods: {
    changeActive(index) {
      switch (index) {
        case 1:
          this.recommendInit = 1;
          break;
        case 2:
          this.hotInit = 1;
          break;
        case 3:
          this.sukiInit = 1;
          break;
      }
      for (let i = 0; i < $tabAll.length; i++) {
        $tabAll[i].style.color = "#555";
      }
      $tabAll[index].style.color = "#fb7299";
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