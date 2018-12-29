<template>
  <van-popup @click-overlay="close" class="side-bar" :value="show" position="left" :overlay="true">
    <div class="side-top">
      <div class="wrapper">
        <img class="side-avatar" src="http://static.hdslb.com/images/akari.jpg">
        <van-icon class="side-scan" name="scan"/>
        <van-icon class="side-scan" name="bag-o"/>
      </div>
      <div class="user">
        <div>ユキノシタユキノ
          <van-tag color="#fff" plain>LV4</van-tag>&nbsp;
          <van-tag color="#eee" text-color="pink" plain>正式会员</van-tag>
        </div>
        <div>
          <span class="money-item">P币: 0.0</span>
          <span class="money-item">软币: 444</span>
        </div>
      </div>
    </div>
    <div class="tags">
      <van-row>
        <van-col span="8">
          <div class="tag-item">271
            <br>动态
          </div>
        </van-col>
        <van-col span="8">
          <div class="tag-item">9
            <br>关注
          </div>
        </van-col>
        <van-col span="8">
          <div class="tag-item">213129
            <br>粉丝
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="nav">
      <div class="nav-item">
        <span class="nav-icon">
          <van-icon name="wap-home"/>
        </span>
        首页
      </div>
      <div class="nav-item">
        <span class="nav-icon">
          <van-icon name="clock"/>
        </span>
        历史记录
      </div>
      <div class="nav-item">
        <span class="nav-icon">
          <van-icon name="star"/>
        </span>
        我的收藏
      </div>
      <div class="nav-item">
        <span class="nav-icon">
          <van-icon name="video"/>
        </span>
        离线缓存
      </div>
    </div>
    <div class="more">
      <div class="more-item">
        <span class="more-icon">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </span>
        投稿
      </div>
      <div class="more-item">
        <span class="more-icon">
          <i class="fa fa-flag" aria-hidden="true"></i>
        </span>
        热门活动
      </div>
      <div class="more-item">
        <span class="more-icon">
          <i class="fa fa-snowflake-o" aria-hidden="true"></i>
        </span>
        创作中心
      </div>
    </div>
    <div class="plus">
      <van-row gutter="30">
        <van-col span="8">
          <i class="fa plus-icon fa-cog" aria-hidden="true"></i>
          设置
        </van-col>
        <van-col span="8">
          <i class="fa plus-icon fa-transgender" aria-hidden="true"></i>
          主题
        </van-col>
        <van-col span="8">
          <i class="fa plus-icon fa-moon-o" aria-hidden="true"></i>
          夜间
        </van-col>
      </van-row>
    </div>
  </van-popup>
</template>
<script>
export default {
  props: ["show"],
  methods: {
    close() {
      this.$emit("closeside");
    }
  }
};
</script>
<style scoped>
.side-bar {
  height: 1000px;
  color: #fff;
}
.side-bar {
  height: 100%;
  width: 270px;
}
.side-top {
  background: #fb7299;
  padding: 15px;
}
.wrapper {
  overflow: auto;
}
.side-avatar {
  float: left;
  width: 50px;
  border-radius: 50%;
}
.side-scan {
  float: right;
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 60%;
  margin-left: 15px;
}
.user {
  margin-top: 10px;
  font-size: 13px;
}
.money-item {
  margin-right: 10px;
  color: rgba(238, 238, 238, 0.5);
}

.tags {
  color: #888;
  padding: 8px 15px;
  text-align: center;
  font-size: 13px;
  border-bottom: 1px solid #eee;
}

.nav,
.more {
  color: #666;
  padding-top: 10px;
  font-size: 13px;
  border-bottom: 1px solid #eee;
}
.nav-item,
.more-item {
  padding: 10px 20px;
}
.nav-item:first-child {
  padding: 10px 20px;
  background: #eee;
  color: #fb7299;
}
.nav-icon {
  position: relative;
  margin-right: 20px;
  font-size: 16px;
  top: 3px;
}
.more-icon {
  position: relative;
  top: 2px;
  margin-right: 20px;
  font-size: 16px;
}

.plus {
  color: #666;
  padding: 10px;
  font-size: 11px;
  text-align: center;
}
.plus-icon {
  height: 10px;
  width: 10px;
  display: inline-block;
  padding: 7px;
  border: 1px solid #666;
  border-radius: 50%;
}
</style>

