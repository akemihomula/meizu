<template>
  <div class="dl">
    <!-- <van-nav-bar :title="$route.name" /> -->
    <div class="top">
      <div class="fanhui" @click="fanhui">
        <van-icon name="arrow-left" />
      </div>账号登录
    </div>
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="primary" size="large" @click="getlogin" class="gets">登录</van-button>
    <van-button type="primary" size="large" @click="getzc" class="zc">注册</van-button>
  </div>
</template>


<script>
import { Dialog } from "vant";

export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    getlogin() {
      // ajax请求后台登录API功能
      this.$axios
        .get("/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          // window.console.log(response);
          if (response.data.code == 201) {
            // 登录失败
            Dialog.alert({
              title: "账号或密码错误",
              message: "请重新确认账号或者密码"
            }).then(() => {
              // on close
            });
            return;
          } else if (response.data.code == 200) {
            //登录成功
            // window.console.log("登录成功");
            // 1.把token存储cookie或localStorage
            let token = response.data.result.token;
            localStorage.login = token;
            this.$router.push("/grzx");
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    fanhui() {
      this.$router.push("/grzx");
    },
    //跳转注册页面
    getzc() {
      this.$router.push("/zc");
    }
  }
};
</script>

<style lang="scss" scoped>
.dl {
  // background-color:#6cf;
  margin: -43px 0 -55px 0;
}
.top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: relative;
}
.fanhui {
  position: absolute;
  top: 0;
  left: 10px;
}
.gets {
  width: 50%;
  margin-left: 5%;
}
.zc {
  margin: 0 5%;
  width: 35%;
  background-color: #6cf;
}
</style>