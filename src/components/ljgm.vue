<template>
  <div class="jiesuan">
    <van-nav-bar title="结算" left-arrow @click-left="getnext" />
    <!-- 地址信息 -->
    <div class="dzxx" @click="dz">
      <div class="name">{{$store.state.mydz.jsdz.name}}</div>
      <div class="sj">{{$store.state.mydz.jsdz.sj}}</div>
      <div class="dz">
        <span>收货地址：</span>
        {{$store.state.mydz.jsdz.dz}}
      </div>
    </div>
    <!-- 地址信息end -->

    <!-- 分割线用飘带 -->
    <div class="piaodai">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 供应商 -->
    <div class="gys">
      供应商：
      <span>魅族</span>
    </div>
    <!-- 供应商end -->

    <!-- 购物车信息 -->
    <div class="gwcxx">
      <div class="cart">
        <div class="tp">
          <img :src="$store.state.ljgm.thumb" />
        </div>
        <div class="xx">
          <div class="num">x{{$store.state.ljgm.num}}</div>
          <div class="name">{{$store.state.ljgm.title}}</div>
          <div class="text">{{$store.state.ljgm.desc}}</div>
          <div class="jg">&yen; {{formatPrice($store.state.ljgm.price)}}</div>
        </div>
      </div>
    </div>
    <!-- 购物车信息end -->

    <!-- 发票 -->
    <div class="fp">
      <ul class="fapiao">
        <li>
          <span>配送方式</span>快递配送(运费&yen;0.00)
        </li>
        <li>
          <span>发票类型</span>电子发票
        </li>
        <li class="js">
          <div>共{{spsl}}件商品 合计：&yen; {{formatPrice(totalPrice())}}</div>
        </li>
      </ul>
    </div>
    <!-- 发票end -->

    <!-- 支付方式 -->
    <div class="zffs">
      <span class="iconfont icon-umidd17"></span>
      <span class="iconfont icon-weixin"></span>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="支付宝支付" clickable @click="radio = '1' ">
            <van-radio slot="right-icon" name="1" aria-checked="true" />
          </van-cell>
          <van-cell title="微信支付" clickable @click="radio = '2'">
            <van-radio slot="right-icon" name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <!-- 支付方式end -->

    <!-- 确认结算 -->
    <div class="qrjs">
      <div class="text">
        总计：
        <span>&yen;{{formatPrice(totalPrice())}}</span>
      </div>
      <div class="jiaqian" @click="qrzf">下单并支付</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { RadioGroup, Radio, Cell, CellGroup, Toast, Dialog } from "vant";
Vue.use(RadioGroup, Radio, Cell, CellGroup, Toast, Dialog);

export default {
  data() {
    return {
      spsl: 0,
      radio: "1"
    };
  },
  methods: {
    //确认支付
    qrzf() {
      //数据写入
      this.$store.state.ljgm.time = new Date();
      this.$store.state.ljgm.ddh =
        "191128" + String(new Date().getTime()).slice(-4);
      this.$store.state.ljgm.isddh = true;
      this.$store.state.jiesuan.order.push(this.$store.state.ljgm);

      this.$store.state.tabindex = document
        .querySelector(".van-radio")
        .getAttribute("tabindex");
      Toast.loading({
        message: "支付中...",
        forbidClick: true
      });
      var self = this;
      // this.$router.push('/grzx')
      setTimeout(function() {
        self.$store.state.cart.goods = [];
        self.$router.push("/payment");
      }, 2000);
    },
    getnext() {
      this.$router.go("-1");
    },
    //跳转选择地址
    dz() {
      this.$router.push("/dz");
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    //计算总价格
    totalPrice() {
      // 价格计算;
      return this.$store.state.ljgm.price;
    }
  },
  created() {
    //计算商品总计件
    this.spsl = 1;
    this.$store.state.mydz.arrs.forEach(item => {
      if (item.checked) {
        this.$store.state.mydz.jsdz = item;
      }
    });
    // window.console.log(this.$store.state.ljgm.num == undefined)
    if (this.$store.state.ljgm.num == undefined) {
      this.$router.push("/index");
    }
  }
};
</script>
<style lang="scss" scoped>
.jiesuan {
  margin: -43px 0 -55px 0;
  width: 100%;
  position: relative;
}
//地址信息
.dzxx {
  width: calc(100% - 30px);
  margin: 0 15px;
  padding: 5px 20px 10px 5px;
  box-sizing: border-box;
  div {
    float: left;
    margin: 5px 0;
  }
  .name {
    width: 50%;
  }
  .sj {
    text-align: right;
    width: 50%;
  }
  .dz {
    width: 100%;
    margin-bottom: 15px;
  }
}
//飘带
.piaodai {
  width: 100%;
  height: 5px;
  display: flex;
  div {
    flex: 1;
    background-image: linear-gradient(
      135deg,
      #82c9ff 8px,
      transparent 0,
      transparent 16px,
      #ff8282 0,
      #ff8282 32px,
      transparent 0,
      transparent 0,
      transparent 40px,
      #82c9ff 0,
      #82c9ff
    );
  }
}
//供应商
.gys {
  width: calc(100% - 40px);
  margin: 0 20px;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  color: #ccc;
  span {
    font-size: 16px;
    color: #000;
  }
}
//购物车信息
.gwcxx {
  width: 100%;
  overflow: hidden;
  .cart {
    width: 100%;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    .tp {
      float: left;
      width: 25%;
      img {
        width: 80%;
        display: block;
        margin: auto;
      }
    }
    .xx {
      float: left;
      width: 75%;
      position: relative;
      div {
        padding: 2.5px 0;
        box-sizing: border-box;
        font-size: 14px;
      }
      .num {
        position: absolute;
        top: 0px;
        right: 20px;
        font-size: 12px;
      }
      .name {
        color: #000;
      }
      .text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #999;
      }
      .jg {
        color: #e4393c;
      }
    }
  }
}
//发票信息
.fp {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: 7px solid #eee;
  .fapiao {
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    li {
      height: 40px;
      width: 100%;
      border-bottom: 2px solid #f1f1f1;
      box-sizing: border-box;
    }
    span {
      display: inline-block;
      width: 100px;
      text-align: center;
      color: #999;
    }
    .js {
      height: 40px;
      width: 100%;
      position: relative;
      border: 0;
      margin: 10px 0;
      div {
        position: absolute;
        right: 10px;
        top: 5px;
      }
    }
  }
}
//支付方式
.zffs {
  width: 100%;
  padding-left: 40px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  .icon-umidd17 {
    position: absolute;
    color: #0d9fe8;
    font-size: 28px;
    top: 10px;
    left: 10px;
  }
  .icon-weixin {
    position: absolute;
    color: #19d100;
    font-size: 28px;
    top: 50px;
    left: 10px;
  }
}
//确认结算
.qrjs {
  width: 100%;
  height: 50px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  .text {
    float: left;
    height: 50px;
    line-height: 40px;
    padding: 5px 20px;
    box-sizing: border-box;
    span {
      color: #e4393c;
    }
  }
  .jiaqian {
    float: right;
    width: 30%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
    font-size: 14px;
    background-color: #f0415f;
  }
}
</style>