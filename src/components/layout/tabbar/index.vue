<template>
  <van-tabbar @change='changeColor(active)' v-model="active">
    <van-tabbar-item class="tabbar-item" icon="home-o" style="color:#fb7299">首页</van-tabbar-item>
    <van-tabbar-item class="tabbar-item" icon="bar-chart-o">分区</van-tabbar-item>
    <van-tabbar-item class="tabbar-item" icon="fire-o">热门</van-tabbar-item>
    <van-tabbar-item class="tabbar-item" icon="like-o">关注</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
    data () {
        return {
            active: 0
        }
    },
    methods: {
        changeColor(index) {
            let $tabbarItem = document.getElementsByClassName('tabbar-item');
            for(var i=0;i<4;i++) {
                $tabbarItem[i].style.color = '#7d7e80';
            }
            $tabbarItem[index].style.color = '#fb7299';
        }
    }
}
</script>

