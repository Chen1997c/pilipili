<template>
  <i :class="name" style="position:relative">
    <div class="icon-info">{{count}}</div>
  </i>
</template>
<script>
export default {
    props: ['name','count']
}
</script>
<style scoped>
.icon-info {
  position: absolute;
  right: 0;
  top: -8px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 3px;
  min-width: 16px;
  line-height: 14px;
  border: 1px solid #fff;
  border-radius: 16px;
  background-color: #f44;
  -webkit-transform: translateX(50%);
  transform: translateX(20%) scale(0.7);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
}
</style>


