<template>
  <div>
    <header id="header">
      <ul class="app-clear">
        <li>
          <i class="iconfont icon-list icon" @click="showSideBar"></i>
        </li>
        <li>
          <img class="avatar" src="http://static.hdslb.com/images/akari.jpg">
        </li>
        <li>
          <img
            v-if="modelShow === 0"
            @click="goSearch"
            class="search-img"
            src="@/assets/images/search.png"
          >
          <div v-if="modelShow === 1" class="title">频道</div>
          <div v-if="modelShow === 2" class="title">动态</div>
        </li>
        <li>
          <template v-if="modelShow !== 2">
            <i class="iconfont icon-download icon"></i>
          </template>
          <template v-if="modelShow === 0">
            <i class="iconfont icon-game icon"></i>
            <count-icon name="iconfont icon-comment icon" count="1"/>
          </template>
          <template v-if="modelShow === 1">
            <i class="iconfont icon-search icon" @click="$router.push('/search')"></i>
          </template>
          <template v-if="modelShow === 2">
            <i class="iconfont icon-bianji icon"></i>
          </template>
        </li>
      </ul>
    </header>
    <app-sidebar @closeside="show = !show" :show="show"/>
  </div>
</template>
<script>
import AppSidebar from "@/components/layout/side-bar";

export default {
  components: {
    AppSidebar
  },
  data() {
    return {
      show: false,
      modelShow: 0
    };
  },
  methods: {
    goSearch() {
      this.$router.push("search");
    },
    showSideBar() {
      this.show = true;
    },
    modeltoggle(param) {
      this.modelShow = param;
    }
  }
};
</script>
<style scoped>
.title {
  position: absolute;
  left: 50%;
  margin-left: -16px;
  font-size: 16px;
}
#header {
  background: #fb7299;
  color: #fff;
  font-size: 20px;
}
#header ul {
  position: relative;
  list-style: none;
}
#header li {
  float: left;
  height: 25px;
  padding: 10px 0;
  line-height: 25px;
  margin-right: 1rem;
  max-width: 20%;
}
#header li:last-child {
  float: right;
  margin-right: 1rem;
  max-width: 35%;
}
.avatar {
  height: 25px;
  border-radius: 50%;
}
.search-img {
  height: 25px;
  width: 150px;
}
#header li:first-child {
  position: relative;
  right: 6px;
  margin-right: 0;
}
#header li:first-child .icon {
  margin: 0 5px 0 0;
  font-size: 16px;
}
.icon {
  margin-left: 15px;
  font-size: 26px;
}
.side-toggle {
  position: relative;
  right: 10px;
}
</style>

