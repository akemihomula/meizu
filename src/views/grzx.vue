<template class="get">
  <div class="pos">
    <!-- 头部栏 -->
    <div class="mz-ge-topbox">
      <div class="top-left" @click="getindex">
        <van-icon name="arrow-left" />
        <!-- <i class="fa fa-angle-left"></i> -->
      </div>
      <div class="top-right">
        <span v-show="zt" @click="zc">注册</span>
        <span v-show="!zt" @click="deldl">退出登录</span>
      </div>
      <div class="top-conten">
        <div class="top-tx" @click="getdl()">
          <!-- <img src="../assets/img/tx.png" /> -->
          <img :src="info.img" />
        </div>
        <div class="top-wz">{{ info.name }}</div>
      </div>
    </div>
    <!-- 头部栏end -->

    <!-- 内容栏 -->
    <div class="mz-grzx-cont">
      <!-- 购买相关栏 -->
      <div class="gmxg" @click="wddd">
        <div class="fl">我的订单</div>
        <div class="fr">
          查看全部订单
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 购买相关栏end -->

      <!-- 功能相关栏 -->
      <div class="gnxg">
        <div class="gn" @click="gn1">
          <i class="iconfont icon-fukuan"></i>
          <div>待付款</div>
        </div>
        <div class="gn" @click="gn2">
          <i class="iconfont icon-daifahuo"></i>
          <div>待发货</div>
        </div>
        <div class="gn" @click="gn3">
          <i class="iconfont icon-daishouhuo"></i>
          <div>待收货</div>
        </div>
        <div class="gn" @click="gn4">
          <i class="iconfont icon-tuihuo"></i>
          <div>退货/售后</div>
        </div>
      </div>
      <!-- 功能相关栏end -->

      <!-- 收藏相关栏 -->
      <div class="scxg">
        <div class="sc">
          <img src="../assets/grzx/bt-1.png" />
          <div class="text">我的收藏</div>
        </div>
        <div class="sc" @click="mydz">
          <img src="../assets/grzx/bt-2.png" />
          <div class="text">我的地址</div>
        </div>
        <div class="sc" @click="myhb">
          <img src="../assets/grzx/bt-3.png" />
          <div class="text">我的红包</div>
        </div>
        <div class="sc" @click="myyhj">
          <img src="../assets/grzx/bt-4.png" />
          <div class="text">我的优惠卷</div>
        </div>
      </div>
      <!-- 收藏相关栏end -->
      <!-- 其他功能栏 -->
      <div class="qtxg">
        <ul class="lists">
          <li @click="getsjhcx">
            手机号查询订单
            <van-icon name="arrow" />
          </li>
          <li>
            联系客服
            <van-icon name="arrow" />
          </li>
          <li>
            意见反馈
            <van-icon name="arrow" />
          </li>
        </ul>
      </div>
      <!-- 其他功能栏end -->
    </div>
    <!-- 内容栏end -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [{ src: "" }],
      info: {},
      zt: true
    };
  },
  methods: {
    //我的订单跳转
    wddd() {
      this.$store.state.active = 0;
      this.$router.push("/wddd");
    },
    //我的红包跳转
    myhb() {
      this.$router.push("/redb");
    },
    //我的优惠券
    myyhj() {
      this.$router.push("/coupon");
    },
    getindex() {
      this.$router.push("/index");
    },
    //跳转注册
    zc() {
      this.$router.push("/zc");
    },
    //跳转我的地址
    mydz() {
      this.$router.push("/dz");
    },
    //跳转订单
    gn1() {
      this.$router.push("/wddd");
      this.$store.state.active = 1;
    },
    gn2() {
      this.$router.push("/wddd");
      this.$store.state.active = 2;
    },
    gn3() {
      this.$router.push("/wddd");
      this.$store.state.active = 3;
    },
    gn4() {
      this.$router.push("/wddd");
      this.$store.state.active = 4;
    },
    getdl() {
      // if(this.info == undefined)
      if (this.info.get) {
        this.$router.push("/dl");
      } else {
        return;
      }
    },
    //手机号查询
    getsjhcx() {
      this.$router.push("/sjhcx");
    },
    deldl() {
      window.console.log("退出登录");
      localStorage.removeItem("login");
      this.$router.push("/dl");
    }
  },
  created() {
    this.$store.state.ispd = false;
    // window.console.log(this.info.src)
    if (!localStorage.login) {
      window.console.log("未登录");
    } else {
      this.$axios
        .get("/getdata", {
          params: {
            token: localStorage.login
          }
        })
        .then(req => {
          // window.console.log(req);
          this.info = req.data.result;
          this.zt = !this.zt;
        });
    }
    //判断存在
    if (this.info.img == undefined) {
      this.info.img = require("../assets/img/tx.png");
      this.info.name = "点击登录";
      this.info.get = true;
    }
    //获取当前路由
    // window.console.log(this.$route.path);
  }
};
</script>
<style lang="scss" scoped>
html,
body {
  background-color: #eee;
}
.pos {
  width: 100%;
  overflow: hidden;
  margin-top: -43px;
  margin-bottom: -55px;
}
.mz-ge-topbox {
  width: 100%;
  height: 150px;
  background-color: #6cf;
  position: relative;
  .top-left {
    font-size: 28px;
    color: white;
    position: absolute;
    left: 15px;
    top: 5px;
  }
  .top-right {
    color: white;
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 14px;
  }
  .top-conten {
    width: 85px;
    height: 120px;
    position: absolute;
    left: calc(50% - 40px);
    top: calc(50% - 50px);
    .top-tx {
      width: 80px;
      img {
        width: 100%;
        height: 80px;
        display: block;
        border: 2px solid white;
        border-radius: 50%;
      }
    }
    .top-wz {
      margin-top: 5px;
      width: 80px;
      height: 20px;
      text-align: center;
      color: white;
      font-size: 20px;
      font-family: Source Han Sans, sans-serif;
    }
  }
}
.mz-grzx-cont {
  border-top: 10px solid #eee;
  .gmxg {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    .fl {
      font-size: 16px;
      color: #444;
    }
    .fr {
      font-size: 14px;
      color: #999;
      position: relative;
      margin-right: 15px;
      i {
        position: absolute;
        top: calc(50% - 6px);
        right: -14px;
      }
    }
  }
  .gnxg {
    width: 100%;
    display: flex;
    .gn {
      margin: 15px 0;
      flex: 1;
      text-align: center;
      color: #999;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
      i {
        font-size: 20px;
      }
      div {
        font-size: 13px;
        margin-top: 10px;
      }
    }
  }
  .scxg {
    width: 100%;
    display: flex;

    border-top: 10px solid #eee;
    border-bottom: 10px solid #eee;
    .sc {
      flex: 1;
      margin: 16px 0;
      img {
        width: 27%;
        display: block;
        margin: auto;
      }
      .text {
        margin-top: 12px;
        text-align: center;
        font-size: 14px;
        color: #666;
      }
    }
  }
  .qtxg {
    width: 100%;
    .lists {
      width: 100%;
      font-size: px;
      color: #333;
      overflow: hidden;
      li {
        height: 50px;
        line-height: 50px;
        padding-left: 15px;
        box-sizing: border-box;
        position: relative;
        i {
          position: absolute;
          top: calc(50% - 11px);
          right: 5%;
          color: #ccc;
        }
      }
    }
  }
}
</style>
