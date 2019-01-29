<template>
  <van-tabs
    id="tab"
    :line-height="2"
    :line-width="35"
    color="#fb7299"
    class="tab"
    v-model="active"
    @click="changeActive"
    animated
  >
    <van-tab title="简介">
        <media-profile v-if="randomNum < .5"/>
        <media-profile1 v-else/>
      </v-else>
    </van-tab>
    <van-tab style="position:relative;overflow:scroll" title="评论 382">
      <media-comment @showMore="showMore = true"/>
      <transition
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <comment-popup @hideMore="showMore = false" v-show="showMore"/>
      </transition>
    </van-tab>
  </van-tabs>
</template>
<script>
import MediaProfile1 from "@/components/media/content/profile";
import MediaProfile from "@/components/media/content/profile/normal";
import MediaComment from "@/components/media/content/comment";
import CommentPopup from "@/components/media/content/comment/popup";
let $tabAll;
export default {
  components: {
    MediaProfile,
    MediaComment,
    CommentPopup,
    MediaProfile1
  },
  data() {
    return {
      themeColor: "#fb7299",
      active: 0,
      showMore: false,
      randomNum: Math.random()
    };
  },
  methods: {
    changeActive(index) {
      for (let i = 0; i < $tabAll.length; i++) {
        $tabAll[i].style.color = "#555";
      }
      $tabAll[index].style.color = this.themeColor;
    }
  },
  mounted() {
    this.$nextTick(() => {
      $tabAll = document.getElementsByClassName("van-tab");
      $tabAll[0].style.color = this.themeColor;
    });
  }
};
</script>
<style scoped>
.animated {
  animation-duration: 0.5s !important;
}
</style>

