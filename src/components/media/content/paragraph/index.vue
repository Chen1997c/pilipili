<template>
  <div>
    <van-nav-bar class="header" right-text="按钮">
      <span class="h-left" slot="left">
        <i class="iconfont icon-left h-font"></i> 写短评
      </span>
      <span class="h-right" slot="right">更新</span>
    </van-nav-bar>
    <div class="rate">
      <van-rate :size="35" color="#ffa726" :value="5"/>
    </div>
    <div class="app-padding">
        <textarea rows="7" class="editor" placeholder="输"></textarea>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  font-size: 16px;
}
.h-left {
  font-size: 16px;
  color: #444;
}
.h-font {
  margin-right: 1rem;
}
.h-right {
  font-size: 16px;
  color: rgb(251, 114, 153);
}
.rate {
    margin: 20px 0;
    text-align: center;
}
.editor {
    background: #eee;
    resize: none;
    width: 100%;
    border-color: #ddd; 
}
</style>


