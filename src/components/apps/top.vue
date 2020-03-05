<template>
  <div class="top">
    <!-- 弹出功能栏 -->
    <div class="tc">
      <div v-show="guangli">
        <div class="top">
          <div class="text">魅族渠道官网</div>
          <div class="colos" @click="tcs">×</div>
        </div>
        <div class="conter">
          <ul class="conter1">
            <li v-for="(item,i) in $store.state.apptop.conter1" :key="i" @click="getgoging(i)">
              <div class="tp">
                <img :src="item.tp" />
              </div>
              <div class="text">{{ item.text }}</div>
            </li>
          </ul>
          <ul class="conter2">
            <li v-for="(item, i) in $store.state.apptop.conter2" :key="i" @click="getsolo(i)">
              <div class="tp">
                <img :src="item.tp" />
              </div>
              <div class="text">{{ item.text }}</div>
            </li>
          </ul>
          <ul class="conter3">
            <li v-for="(item,i) in $store.state.apptop.conter3" :key="i" @click="conterDj3(i)">
              <div class="tp">
                <img :src="item.tp" />
              </div>
              <div class="text">{{ item.text }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 弹出功能栏end -->

    <!-- 头部栏 -->
    <div class="mz-top-box" v-show="$store.state.ispd">
      <div class="top">
        <div class="fl icon-1"></div>
        <div class="fl icon-2"></div>

        <div class="fr icon-4" @click="tcs"></div>
        <div class="fr icon-3" @click="$router.push('/cart')"></div>
      </div>
    </div>
    <!-- 头部栏end -->
  </div>
</template>

<script>
export default {
  //这里需要将模块引出，可在其他地方使用
  data() {
    //注意：data即使不需要传数据，也必须return,否则会报错
    return {
      name: "top",
      guangli: true
    };
  },
  methods: {
    // 弹出切换
    // 弹出框的收起和放下
    tcs() {
      this.guangli = !this.guangli;
      if (this.guangli) {
        document.querySelector(".tc").style.height = "800px";
      } else {
        document.querySelector(".tc").style.height = "0px";
      }
    },
    // 放下切换的时候隐藏两个固定栏
    tab() {
      this.tcs();
      this.$store.state.ispd = !this.$store.state.ispd;
    },
    //我的订单
    wddd() {
      this.tab();
      this.$router.push("/wddd");
    },
    //我的地址
    wddz() {
      this.tab();
      this.$router.push("/dz");
    },
    //我的红包
    wdhb() {
      this.tab();
      this.$router.push("/redb");
    },
    //我的优惠券
    coupon() {
      this.tab();
      this.$router.push("/coupon");
    },
    conterDj3(i) {
      window.console.log(i);
    },
    conterDj0() {
      this.tcs();
      this.$store.state.ispd = !this.$store.state.ispd;
      this.$router.push("/grzx");
    },
    //点击事件循环条件
    getgoging(i) {
      //个人中心
      if (i == 0) {
        this.conterDj0();
      } else if (i == 1) {
        // 我的订单
        this.wddd();
      } else if (i == 2) {
        this.wdhb();
      } else if (i == 3) {
        this.coupon();
      } else if (i == 4) {
        //我的地址
        this.wddz();
      } else {
        window.console.log(i);
      }
    },
    //第二栏点击事件循环
    getsolo(i) {
      if (i == 0) {
        this.tcs();
        if (this.$route.path == "/sj") {
          return;
        }
        this.$router.push("/sj");
      } else {
        window.console.log(i);
      }
    }
  },
  created() {
    // window.console.log(this.guangli);
  },
  mounted() {
    this.tcs();
    // window.console.log("dom加载");
  }
};
</script>
<style lang="scss" scoped>
.conter {
  margin: 0;
}
.top {
  width: 100%;
  overflow: hidden;
}
//弹出功能栏设置

.tc {
  width: 100%;
  height: 0px;
  // margin: -43px 0 -55px 0;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100000;
  transition: all 0.2s;
  overflow: hidden;
  .top {
    width: 100%;
    height: 40px;
    position: relative;
    text-align: center;
    .text {
      width: 100%;
      height: 40px;
      font-size: 18px;
      line-height: 40px;
    }
    .colos {
      width: 35px;
      height: 35px;
      position: absolute;
      top: 5px;
      right: 5px;
      line-height: 35px;
      font-size: 34px;
    }
  }
  .conter {
    ul {
      width: 100%;
      overflow: hidden;
      padding-top: 20px;
      li {
        width: 25%;
        float: left;
        margin-bottom: 20px;
        .tp {
          width: 100%;
          img {
            display: block;
            width: 50%;
            margin: auto;
          }
        }
        .text {
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .conter2 {
      background-color: #ccc;
      li {
        .tp {
          img {
            width: 40%;
          }
        }
        .text {
          font-size: 12px;
        }
      }
    }
    .conter3 {
      li {
        .tp {
          img {
            width: 65%;
          }
        }
        .text {
          font-size: 14px;
        }
      }
    }
  }
}
.mz-top-box {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 10000;
  background-color: white;
  .top {
    width: 100%;
    height: 20px;
    position: relative;
    .icon-1 {
      width: 20px;
      height: 20px;
      background: url(../../assets/img/tb-1.png) no-repeat 2px 2px;
      background-size: 75%;
    }
    .icon-2 {
      width: 20px;
      height: 20px;
      background: url(../../assets/img/tb-2.png) no-repeat;
      position: absolute;
      left: calc(50% - 10px);
      top: 3px;
      background-size: 20px 20px;
    }
    .icon-3 {
      width: 20px;
      height: 20px;
      background: url(../../assets/img/tb-3.png) no-repeat 3px 3px;
      margin-right: 30px;
      background-size: 75%;
    }
    .icon-4 {
      width: 7px;
      height: 21px;
      background: url(../../assets/img/tb-4.png) no-repeat;
      margin-top: 2px;
      background-size: 75%;
    }
  }
}
</style>
