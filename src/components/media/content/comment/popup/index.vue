<template>
  <div class="comment-popup">
    <div class="app-top app-padding pop-header">
      <div class="title">评论详情</div>
      <div class="see" @click="hide">
        <i class="iconfont icon-cha" style="font-size:13px"></i>
      </div>
    </div>
    <div class="divider"></div>

    <div class="van-hairline--bottom">
      <div class="app-padding app-clear">
        <div class="avatar-wrapper app-fl">
          <img src="http://static.hdslb.com/images/akari.jpg" alt="touxiang">
        </div>
        <div class="content app-fl">
          <div class="top app-clear">
            <div class="u-name app-fl">ユキノシタユキノ</div>
            <div class="tag app-fr">#1 刚刚</div>
          </div>
          <div class="main">不得行！不得行！不得行！不得行！不得行！不得行！不得行！不得行！</div>
          <div class="bottom">
            <div class="app-fl">
              <span class="icon">
                <i class="iconfont icon-like1"></i>
                <span class="font">232</span>
              </span>
              <span class="icon">
                <i class="iconfont icon-unlike"></i>
                <span class="font">232</span>
              </span>
            </div>
            <div class="app-fr" @click.stop="active = 1">
              <span class="icon icon-option">
                <i class="iconfont icon-gengduo"></i>
                <transition name="slide-fade">
                  <div v-if="active === 1" class="option">
                    <div class="option-item">加入黑名单</div>
                    <div class="option-item">举报</div>
                  </div>
                </transition>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
    data () {
        return {
            active: null,
        }
    },
    methods: {
        hide() {
            this.$emit('hideMore');
        }
    }
};
</script>
<style scoped>
.comment-popup {
  position: absolute;
  top: 0px;
  z-index: 1;
  height: 100%;
  width: 100%;
  margin-bottom: 50px;
  background: #fff;
}
.divider {
  height: 3px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#eee),
    to(#fff)
  );
}
.avatar-wrapper {
  width: 15%;
}
.avatar-wrapper img {
  border-radius: 50%;
  width: 60%;
}
.content {
  width: 85%;
}
.content .u-name {
  color: #777;
  font-size: 12px;
}
.content .tag {
  color: #999;
  font-size: 11px;
}
.content .main {
  font-size: 14px;
  color: #555;
  margin: 5px 0;
}
.content .bottom {
  margin: 10px 0;
}
.content .bottom .icon {
  color: #999;
  font-size: 15px;
}
.content .bottom .font {
  margin: 0 25px 0 3px;
  font-size: 13px;
}
.icon-option {
  position: relative;
}
.option {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  background: #fff;
  z-index: 2;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  border: 1px solid #fee;
}
.option-item {
  padding: 13px;
  color: #555;
  font-size: 15px;
  height: 20px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>


