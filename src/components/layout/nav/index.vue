<template>
  <div id="nav">
    <van-tabs
      @change="changeFocus(active)"
      :color="'#fb7299'"
      v-model="active"
      swipeable
      animated
      sticky
    >
      <van-tab v-for="(item,index) in tabList" :title="item">
        <app-live v-if="active === 0"/>
        <app-recommend v-if="active === 1"/>
        <app-hot v-if="active === 2"/>
        <app-suki v-if="active === 3"/>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import AppLive from "@/components/category/live";
import AppRecommend from "@/components/category/recommend";
import AppHot from "@/components/category/hot";
import AppSuki from "@/components/category/suki";

let $tab;
const baseList = ["直播", "推荐", "热门", "追番", "我的2018", "饿出幻觉"];

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
      tabList: baseList
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    changeFocus(index) {
      for (let i = 0; i < $tab.length; i++) {
        $tab[i].style.color = "#323233";
      }
      $tab[index].style.color = "#fb7299";
    },
    init() {
      window.onload = () => {
        $tab = document.getElementsByClassName("van-tab");
        $tab[0].style.color = "#fb7299";
      };
    }
  }
};
</script>
<style scoped>
</style>


