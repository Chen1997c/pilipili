<template>
  <div>
    <media-header :pause="pause" v-show="showHeader"/>
    <app-player @showheader="dealShow" @hideheader="dealHide"/>
    <media-content/>
  </div>
</template>
<script>
import MediaHeader from "@/components/media/header";
import AppPlayer from "@/components/media/player";
import MediaContent from "@/components/media/content";
export default {
  components: {
    MediaHeader,
    AppPlayer,
    MediaContent
  },
  data() {
    return {
      showHeader: true,
      pause: true
    };
  },
  methods: {
    dealShow() {
      document.querySelector("#tab").removeAttribute("style");
      this.showHeader = true;
      this.pause = true;
    },
    dealHide(height) {
      console.log(height);
      document.querySelector("#tab").style.height =
        window.screen.availHeight - height + "px";
      document.querySelector("#tab").style.overflow = "scroll";
      this.showHeader = false;
      this.pause = false;
    }
  }
};
</script>

