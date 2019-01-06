<template>
  <van-swipe class="carousel" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(img,index) in carouselImg" :key="index">
      <img class="carousel-img" :src="img" alt="carousel">
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  props: ["carouselImg"]
};
</script>
<style scoped>
.carousel-img {
  height: 100px;
  width: 100%;
  border-radius: 5px;
}
</style>



