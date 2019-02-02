<template>
  <div>
    <news-search/>
    <div class="content">
      <div class="no-data" :style="{'background-image': 'url(' + noDataImg + ')'}"></div>
      <div class="message">什么都没有
        <br>去瞧瞧热门动态吧~
      </div>
      <div class="button">进入热门</div>
    </div>
  </div>
</template>
<script>
const noDataImg = require("@/assets/images/no-data.png");
import NewsSearch from "@/components/category/news/search";
export default {
  components: {
    NewsSearch
  },
  data() {
    return {
      noDataImg: noDataImg
    };
  }
};
</script>
<style scoped>
.content {
  background: #eee;
  height: 700px;
}
.no-data {
  height: 30%;
  background-repeat: no-repeat;
  background-position: center 50%;
  background-size: 45%;
}
.message {
  text-align: center;
  font-size: 15px;
  color: #888;
}
.button {
  width: 20%;
  margin: 30px auto;
  font-size: 15px;
  color: #fff;
  padding: 10px 30px;
  border-radius: 3px;
  background: #fb7299;
}
</style>


