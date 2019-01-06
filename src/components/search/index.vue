<template>
  <div id="search-bar">
    <van-search
      @cancel="cancelSearch"
      background="#fb7299"
      placeholder="改革春风吹满地"
      v-model="value"
      show-action
      autofocus
    />
    <div class="search-item">
      <div class="title-wrapper">
        <div class="title">大家都在搜</div>
        <div class="button">展开</div>
      </div>
      <div class="content">
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">
            <van-icon name="fire" style="color: rgb(247, 64, 64);"/>改革春风吹满地
          </van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">SBS歌谣大战</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">六小龄童</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">妻子的味道</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">认识的哥哥</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">鬼畜</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">WANNA ONE</van-tag>
        </div>
      </div>
    </div>
    <div class="img-bar">
      <img src="@/assets/images/search/newYear.jpg" alt="newYear">
    </div>
    <div class="search-item">
      <div class="title-wrapper">
        <div class="title">搜索历史</div>
        <div class="button">展开</div>
      </div>
      <div class="content">
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">欧尼酱</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">欧巴酱</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">欧鸡酱</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">欧金金</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">略略略</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">咕噜咕噜</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">拉四大名绣</van-tag>
        </div>
      </div>
    </div>
    <div class="search-item">
      <div class="title-wrapper">
        <div class="title">搜索发现</div>
        <div class="button">隐藏</div>
      </div>
      <div class="content">
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">胆小的心</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">关于我转生变成···</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">青春猪头少女不会···</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">刀剑神域</van-tag>
        </div>
        <div class="content-item">
          <van-tag size="medium" color="#eee" text-color="#777">哥布林杀手</van-tag>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // 初始化高度
    let searchBox = document.getElementById("search-bar");
    searchBox.style.height = window.screen.height + 'px';
    //搜索框样式
    let a = document.getElementsByClassName("van-search");
    for (let i = 0; i < a.length; i++) {
      a[i].firstChild.style.borderRadius = "30px";
      a[i].lastChild.style.color = "#fff";
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    cancelSearch() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
#search-bar {
  background: #eee;
}
.search-item {
  margin-bottom: 10px;
  background: #fff;
}
.title-wrapper,
.content,
.img-bar {
  padding: 10px;
}

.title-wrapper {
  font-size: 12px;
  overflow: auto;
  border-bottom: 1px solid #eee;
}
.title-wrapper .title {
  float: left;
  color: #444;
}
.title-wrapper .button {
  float: right;
  color: #999;
}

.content-item {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 10px;
}

.img-bar {
  background: #eee;
  padding-top: 0;
}

.img-bar img {
  width: 100%;
  height: 100px;
}
</style>


