<template>
  <div class="sjhcx">
    <van-nav-bar title="手机号查询订单" left-arrow @click-left="onClickLeft" />
    <div class="row">
      <div class="sj">
        <input class="inp phone" type="text" placeholder="请输入手机号" />
      </div>
      <div class="yz">
        <input class="inps" type="text" placeholder="请输入验证码" />
        <button class="yzm" @click="hqyzm">获取验证码</button>
      </div>
      <div>
        <button class="cx" @click="cx">查询</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  methods: {
    onClickLeft() {
      this.$router.push("/grzx");
    },
    hqyzm() {
      Toast("暂不支持获取验证码");
    },
    cx() {
      Toast("暂不支持查询");
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  background-color: #eee;
}
.sjhcx {
  margin: -43px 0 -55px 0;
}
.row {
  width: 100%;
  input {
    height: 40px;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    padding: 5px 5px;
    box-sizing: border-box;
    font-size: 14px;
  }
  div {
    width: calc(100% - 30px);
    margin: 15px;
  }
  .sj {
    .inp {
      width: 100%;
    }
  }
  .yz {
    .inps {
      width: 50%;
      margin-right: 5%;
    }
    .yzm {
      width: 45%;
      height: 40px;
      margin: 0;
      padding: 10px 5px;
      box-sizing: border-box;
      background-color: #00c3f5;
      border: 0;
      color: white;
      font-size: 14px;
    }
  }
  .cx {
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 5px 5px;
    box-sizing: border-box;
    background-color: #ccc;
    border: 0;
    color: white;
    font-size: 16px;
  }
}
</style>