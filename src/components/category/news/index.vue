<template>
  <div>
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
        <news-video v-if="index === 0"/>
        <news-multiple v-if="multipleInit && index === 1"/>
        <news-video v-if="hotInit && index === 2"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
const baseList = ["视频", "综合", "热门"];
let $tabAll;
import NewsVideo from "@/components/category/news/video";
import NewsMultiple from "@/components/category/news/multiple";
export default {
  components: {
    NewsVideo,
    NewsMultiple
  },
  mounted() {
    this.$emit("changeheader", 2);
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
    change(index) {
      switch (index) {
        case 1:
          this.multipleInit = 1;
          break;
        case 2:
          this.hotInit = 1;
          break;
        default:
          break;
      }
      for (let i = 0; i < $tabAll.length; i++) {
        $tabAll[i].style.color = "#555";
      }
      $tabAll[index].style.color = "#fb7299";
      this.active = index;
    },
    changeActive(index) {
      this.$refs.swipe.swipeTo(index);
    }
  },
  data() {
    return {
      active: 0,
      tabList: baseList,
      multipleInit: null,
      hotInit: null
    };
  }
};
</script>


