<template>
  <div>
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
          <div class="bottom app-clear">
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
            <div class="app-fr">
              <span class="icon icon-option" @click.stop="active = 1">
                <i class="iconfont icon-gengduo"></i>
                <transition name="slide-fade">
                  <div v-if="active === 1" class="option">
                    <div class="option-item">删除</div>
                  </div>
                </transition>
              </span>
            </div>
          </div>
          <div class="panel-reply">
            <div class="item">
              <span class="uname">まる＿ちゃん</span>：Love live lemon(滑稽)
            </div>
            <div class="item">
              <span class="uname">樱内梨</span> 回复
              <span class="uname">@まる＿ちゃん</span>：哈哈哈哈哈哈哈哈哈哈哈
            </div>
            <div class="item">
              <span class="uname">不见不见友人A</span>：比游戏还好康...抱歉走错了
            </div>
            <div class="show-all">共38条回复 〉</div>
          </div>
        </div>
      </div>
    </div>

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
            <div class="app-fr" @click.stop="active = 2">
              <span class="icon icon-option">
                <i class="iconfont icon-gengduo"></i>
                <transition name="slide-fade">
                  <div v-if="active === 2" class="option">
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

    <div @click="showMoreHot" class="box">
      <span class="line"></span>
      <span class="boxcontent">更多热门评论 〉</span>
      <span class="line"></span>
    </div>

    <div class="fixable">
      <div class="comment-form">
        <span @click="showFacePanel = !showFacePanel" class="emotion">
          <i class="iconfont icon-biaoqing"></i>
        </span>
        <span class="input">
          <textarea
            @focus="activeColor = '#fb7299'"
            @blur="activeColor = '#777';showFacePanel = false"
            ref="input"
            @input="input"
            rows="1"
            type="text"
            placeholder="说点什么吧"
          ></textarea>
        </span>
        <span class="submit">
          <i class="iconfont icon-send" :style="{'color': activeColor}"></i>
        </span>
      </div>
      <div v-if="showFacePanel" class="face-panel">
        <van-swipe :loop="false" indicator-color="#fb7299">
          <van-swipe-item v-for="(item,index1) in 2" style="padding-bottom:35px">
            <div v-for="(value,index2) in 16" class="face-item">o(ﾟДﾟ)っ!</div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      active: null,
      activeColor: "#777",
      showFacePanel: false
    };
  },
  mounted() {
    document.querySelector("body").onclick = () => {
      this.active = null;
    };
  },
  methods: {
    input() {
      let $input = this.$refs.input;
      let rowNum = parseInt($input.value.length / $input.cols + 1);
      console.log(rowNum);
      if (rowNum === 1) {
        $input.rows = 1;
      } else if (rowNum === 2) {
        $input.rows = 2;
      } else {
        $input.rows = 3;
      }
    },
    showMoreHot() {
      this.$emit('showMore');
    }
  }
};
</script>
<style scoped>
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
.panel-reply {
  background: #eee;
  padding: 10px;
}
.panel-reply .uname {
  color: rgb(62, 128, 214);
}
.panel-reply .item {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}
.panel-reply .show-all {
  font-size: 13px;
  color: rgb(62, 128, 214);
}
.fixable {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
}
.comment-form {
  background: rgb(250, 250, 250);
  display: flex;
  align-items: center;
  padding: 10px 4%;
  width: 92%;
  line-height: 15px;
}
.comment-form .input {
  width: 100%;
  text-align: center;
}
.comment-form textarea {
  width: 90%;
  border: 1px solid rgb(235, 235, 235);
  background: rgb(250, 250, 250);
  border-radius: 20px;
  font-size: 12px;
  padding: 5px;
  caret-color: #fb7299;
  resize: none;
  overflow: hidden;
}
.comment-form .iconfont {
  color: #777;
  font-size: 21px;
}
.comment-form .emotion,
.comment-form .submit {
  flex-grow: 1;
}
.face-panel {
  background: rgb(245, 245, 245);
  padding: 10px 8%;
  width: 84%;
}
.face-panel .face-item {
  display: inline-block;
  width: 25%;
  text-align: center;
  font-size: 13px;
  color: #555;
  margin: 10px 0;
}
.popup {
  overflow: scroll;
  height: 100%;
}

.box {
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
}
.boxcontent {
    color: rgb(62, 128, 214);
    font-size: 14px;
    margin: 0 15px;
}

.box .line {
  height: 1px;
  flex-grow: 1;
  background-color: #eee;
}
</style>


