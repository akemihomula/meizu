<template>
  <div v-if="$store.state.index">
    <!-- 返回顶部 -->
    <div class="mz-gettop" @click="gettop">
      <h3>返回顶部</h3>
    </div>
    <!-- 返回顶部end -->

    <!-- 底部连接栏 -->
    <div class="mz-call" v-show="$store.state.ispd">
      <div class="call-top">
        <div class="fl">
          <i class="fa fa-phone"></i>400-788-3333
        </div>
        <div class="fl">
          <i class="fa fa-commenting-o"></i>在线客服
        </div>
      </div>

      <div class="call-bottom">
        <div class="fl">
          粤ICP备13003602号-2
          合字B2-20170010
          营业执照
          ©2018 Meizu
          All rights reserved
        </div>
        <div class="fr">
          <i class="chani"></i>
          简体中文
        </div>
      </div>
    </div>
    <!-- 底部连接栏end -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //返回首页
    gettop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
//返回顶部
.mz-gettop {
  width: 100%;
  background-color: #ccc;
  h3 {
    padding: 20px 0;
    margin: 0;
    text-align: center;
    font-size: 13px;
    color: #000;
  }
}

//底部连接栏
.mz-call {
  width: 100%;

  overflow: hidden;
  .call-top {
    width: 100%;
    overflow: hidden;
    .fl {
      float: left;
    }
    div {
      font-size: 14px;
      width: calc(50% - 20px);
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #00b4ff;
      border-radius: 10px;
      margin: 10px;
      color: white;
      i {
        font-size: 20px;
        margin-right: 10px;
      }
      .fa-phone {
        margin-top: 5px;
      }
    }
  }
  .call-bottom {
    width: 100%;
    overflow: hidden;
    div {
      height: 80px;
    }
    .fl {
      float: left;
      width: 70%;
      padding: 12px;
      box-sizing: border-box;
      color: #999;
      font-size: 10px;
      text-align: center;
      line-height: 20px;
    }
    .fr {
      float: left;
      position: relative;
      i {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url(https://fms.res.meizu.com/dms/2017/12/18/1c31db15-ab85-4932-8e6c-edfd6039bc60.png);
        background-size: 100%;
        position: absolute;
        left: 5px;
        top: 16px;
      }
      width: 30%;
      text-align: center;
      line-height: 50px;
      font-size: 12px;
    }
  }
}
</style>