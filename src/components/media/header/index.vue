<template>
  <van-nav-bar class="header" right-text="按钮" fixed :style="stylex">
    <i class="iconfont icon-left" slot="left"></i>
    <span slot="title">
      <template v-if="title == 'playTitle'">第5话 - 因此我相信着你</template>
      <template v-else>
        <i class="iconfont icon-bofangqi-bofangxiaodianshi"></i> 继续播放
      </template>
    </span>
    <i class="iconfont icon-gengduo" slot="right"></i>
  </van-nav-bar>
</template>
<script>
export default {
  props: ["pause"],
  data() {
    return {
      title: "playTitle",
      stylex: {
        background: "transparent",
        height: "46px"
      },
      style: {
        nav: {
          normal: {
            background: "transparent",
            height: "46px"
          },
          colorful: {
            background: "#fb7299",
            height: "46px"
          }
        },
        tab: {
          fix: {
            position: "fixed",
            top: "44px"
          },
          abso: {
            position: "absolute",
            top: "0"
          }
        }
      }
    };
  },
  mounted() {
    let $header = document.querySelector(".header");
    let $pop_header = document.querySelector('.pop-header');
    $header.firstChild.style.top = 0;
    $header.lastChild.style.top = 0;
    window.onscroll = () => {
      let $tab = document.querySelector("#tab");
      let top = $tab.offsetTop;
      let scrollTop = document.body.scrollTop;
      if (this.pause) {
        if (scrollTop > 100) {
          this.stylex.height = top - scrollTop + "px";
          if (top - scrollTop >= 0) {
            this.stylex.background =
              "rgba(251, 114, 153," + (scrollTop - 100) / (top - scrollTop ) + ")";
          } else {
            this.stylex.background = this.style.nav.colorful.background;
            this.stylex.height = this.style.nav.colorful.height;
          }
        } else {
          this.stylex.background = this.style.nav.normal.background;
        }
        if (scrollTop > top) {
          this.stylex.height = "46px";
          this.title = "pauseTitle";
          $tab.firstChild.style.position = this.style.tab.fix.position;
          $tab.firstChild.style.top = this.style.tab.fix.top;
        } else {
          this.title = "playTitle";
          $tab.firstChild.style.position = this.style.tab.abso.position;
          $tab.firstChild.style.top = this.style.tab.abso.top;
        }
      } else {
        $tab.firstChild.style.position = this.style.tab.abso.position;
        $tab.firstChild.style.top = this.style.tab.abso.top;
      }
    };
  }
};
</script>
<style scoped>
.header {
  border-bottom-width: 0 !important;
  background: transparent;
  color: #fff;
  z-index: 13 !important;
}
.header:after {
  border-bottom-width: 0 !important;
}
</style>

