<template>
  <div class="zc">
    <van-nav-bar title="用户注册" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      <van-field v-model="password1" type="password" label="验证密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="primary" size="large" @click="getdata">注册</van-button>
  </div>
</template>


<script>
import { Notify } from "vant";

export default {
  data() {
    return {
      username: null,
      password: null,
      password1: null
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    //获取注册数据并且请求ajax
    getdata() {
      if (this.password == this.password1) {
        this.$axios
          .get("/register", {
            params: {
              //发送数据
              username: this.username,
              password: this.password
            }
          })
          .then(data => {
            //返回请求数据
            window.console.log(data);
            if (data.data.code == 200) {
              // 请求成功执行
              Notify({
                message: "注册成功",
                type: "success",
                duration: 2000,
                onOpened: () => {
                  this.$router.push("/dl");
                }
              });
            }
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.zc {
  margin: -43px 0 -55px 0;
}
</style>