<template>
  <div class="payment">
    <van-nav-bar title="结算" left-arrow @click-left="onClickLeft" />
    <div class="zfcg">
      <div class="tb">
        <span class="iconfont icon-umidd17" v-show="zfxx"></span>
        <span class="iconfont icon-weixin" v-show="!zfxx"></span>
      </div>
      <div class="text">支付成功！</div>
      <div class="jxgm">
        <van-button type="primary" @click="ckdd">查看订单</van-button>
        <van-button type="info" @click="jxgm" class="btn">继续购买</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      zfxx: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/grzx");
    },
    jxgm() {
      this.$router.push("/grzx");
    },
    ckdd(){
      this.$router.push("/wddd");
    }
  },
  created() {
    if (this.$store.state.tabindex == 0) {
      this.zfxx = true;
    } else {
      this.zfxx = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.payment {
  margin: -43px 0 -55px 0;
}
.zfcg {
  width: 100%;
  margin-top: 70px;
  overflow: hidden;
  .tb {
    width: 80%;
    height: 120px;
    position: relative;
    margin: auto;
    span {
      position: absolute;
      font-size: 100px;
    }
    .icon-umidd17 {
      color: #0d9fe8;
      top: 0px;
      left: calc(50% - 50px);
    }
    .icon-weixin {
      color: #19d100;
      top: 10px;
      left: calc(50% - 50px);
    }
  }
  .text {
    width: 100%;
    font-size: 28px;
    padding-left: 5%;
    box-sizing: border-box;
    text-align: center;
  }
  .jxgm{
    width: 100%;
    margin-top: 20px;
    text-align: center;
    .btn{
      margin-left: 40px;
    }
  }
}
</style>