<template>
  <div id="home">
    <app-header ref="header"/>
    <router-view @changeheader="changeheader"/>
    <app-tabbar ref="tabbar"/>
  </div>
</template>
<script>
import AppHeader from "@/components/layout/header";
import AppTabbar from "@/components/layout/tabbar";

export default {
  components: {
    AppHeader,
    AppTabbar
  },
  methods: {
    changeheader(value) {
      this.$refs.header.modeltoggle(value);
      this.$refs.tabbar.changeActive(value);
    }
  }
};
</script>

