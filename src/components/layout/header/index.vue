<template>
  <div>
    <header id="header">
      <ul>
        <li>
          <i class="iconfont icon-list icon" @click="showSideBar"></i>
        </li>
        <li>
          <img class="avatar" src="http://static.hdslb.com/images/akari.jpg">
        </li>
        <li>
          <img @click="goSearch" class="search-img" src="@/assets/images/search.png">
        </li>
        <li>
          <i class="iconfont icon-game icon"></i>
          <i class="iconfont icon-download icon"></i>
          <count-icon name="iconfont icon-comment icon" count="1"/>
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
      show: false
    };
  },
  methods: {
    goSearch() {
      this.$router.push("search");
    },
    showSideBar() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
#header {
  background: #fb7299;
  color: #fff;
  font-size: 20px;
}
#header ul {
  display: flex;
  align-items: center;
  list-style: none;
  overflow: auto;
}
#header li {
  float: left;
  height: 25px;
  padding: 10px 0;
  line-height: 25px;
  flex-grow: 1;
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

