<template>
  <van-tabbar @change="changeColor(active)" v-model="active">
    <van-tabbar-item class="tabbar-item" style="color:#fb7299">
      <i class="iconfont icon-shouyexuanzhong" slot="icon"></i>
      <div>首页</div>
    </van-tabbar-item>
    <van-tabbar-item class="tabbar-item">
      <template v-if="active === 1">
          <i class="iconfont icon-fenquxuanzhong" slot="icon"></i>
      </template>
      <template v-else>
          <i class="iconfont icon-fenquweixuanzhong" slot="icon"></i>
      </template>
      <div>分区</div>
    </van-tabbar-item>
    <van-tabbar-item class="tabbar-item">
      <template v-if="active === 2">
          <i class="iconfont icon-dongtaixuanzhong" slot="icon"></i>
      </template>
      <template v-else>
          <i class="iconfont icon-dongtaiweixuanzhong" slot="icon"></i>
      </template>
      <div>动态</div>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    changeColor(index) {
      let $tabbarItem = document.getElementsByClassName("tabbar-item");
      for (var i = 0; i < 3; i++) {
        $tabbarItem[i].style.color = "#7d7e80";
      }
      $tabbarItem[index].style.color = "#fb7299";
    }
  }
};
</script>

