<template>
  <div class="wddd">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" class="ces">
      <van-tab title="全部">
        <div class="myOrder" v-show="!$store.state.jiesuan.isqb">
          <ul>
            <li v-for="(item,i) in $store.state.jiesuan.order" :key="i">
              <div class="ddh" v-show="item.isddh">订单号：{{item.ddh}}</div>
              <div class="tp">
                <img :src="item.thumb" />
              </div>
              <div class="text">
                <div class="name">{{item.title}}</div>
                <div class="js">{{item.desc}}</div>
                <div class="jg">&yen; {{formatPrice(item.price * item.num)}}</div>
                <div class="time">{{item.time | dateFormat}}</div>
              </div>
              <div class="cz">
                <div class="dsh">待收货</div>
                <div class="num">×{{item.num}}</div>
                <div class="btn">
                  <van-button type="info" @click="qrsh(i)">确认收货</van-button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="con-wddd" v-show="$store.state.jiesuan.isqb">
          <div class="tp">
            <img src="../assets/wddd.jpg" />
          </div>
          <div @click="sjhcx">
            <div class="title">没有订单</div>
            <div class="sj">试试手机号查询</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <div class="con-wddd">
          <div class="tp">
            <img src="../assets/wddd.jpg" />
          </div>
          <div @click="sjhcx">
            <div class="title">没有待付款商品</div>
            <div class="sj">试试手机号查询</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待发货">
        <div class="con-wddd">
          <div class="tp">
            <img src="../assets/wddd.jpg" />
          </div>
          <div @click="sjhcx">
            <div class="title">没有待发货商品</div>
            <div class="sj">试试手机号查询</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待收货">
        <div class="myOrder" v-show="!$store.state.jiesuan.isqb">
          <ul>
            <li v-for="(item,i) in $store.state.jiesuan.order" :key="i">
              <div class="tp">
                <img :src="item.thumb" />
              </div>
              <div class="text">
                <div class="name">{{item.title}}</div>
                <div class="js">{{item.desc}}</div>
                <div class="jg">&yen; {{formatPrice(item.price * item.num)}}</div>
                <div class="time">{{item.time | dateFormat}}</div>
              </div>
              <div class="cz">
                <div class="dsh">待收货</div>
                <div class="num">×{{item.num}}</div>
                <div class="btn">
                  <van-button type="info" @click="qrsh(i)">确认收货</van-button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="con-wddd" v-show="$store.state.jiesuan.isqb">
          <div class="tp">
            <img src="../assets/wddd.jpg" />
          </div>
          <div @click="sjhcx">
            <div class="title">没有待收货商品</div>
            <div class="sj">试试手机号查询</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="退款/售后">
        <div class="myOrder" v-show="!$store.state.jiesuan.isth">
          <ul>
            <li v-for="(item,i) in $store.state.jiesuan.tuihuo" :key="i">
              <div class="tp">
                <img :src="item.thumb" />
              </div>
              <div class="text">
                <div class="name nameth">{{item.title}}</div>
                <div class="js">{{item.desc}}</div>
                <div class="jg jgth">&yen; {{formatPrice(item.price * item.num)}}</div>
              </div>
              <div class="cz">
                <div class="num">×{{item.num}}</div>
                <div class="btn">
                  <van-button type="info" @click="Thsh">退货/售后</van-button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="con-wddd" v-show="$store.state.jiesuan.isth">
          <div class="tp">
            <img src="../assets/wddd.jpg" />
          </div>
          <div @click="sjhcx">
            <div class="title">没有售后商品</div>
            <div class="sj">试试手机号查询</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.filter("dateFormat", function(dateString) {
  // console.log(dateString)
  var dd = new Date(dateString);
  //获取年月日
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1;
  var d = dd.getDate();
  // 获取时分秒
  var hh = dd.getHours();
  var mm = dd.getMinutes();
  var ss = dd.getSeconds();
  mm = mm > 10 ? mm : "0" + mm;
  ss = ss > 10 ? ss : "0" + ss;
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});
export default {
  data() {
    return {
      active: 0,
      alg: "奥利给",
      isddhs: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    sjhcx() {
      this.$router.push("/sjhcx");
    },
    //价格修饰
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    //确认收货
    qrsh(i) {
      //放入一个新的数组，主要用于退货和售后的界面
      this.$store.state.jiesuan.tuihuo.push(this.$store.state.jiesuan.order[i]);
      this.$store.state.jiesuan.order.splice(i, 1);
      this.isget();
      //确认收货后需要重新判断
      this.$store.state.jiesuan.order.forEach(item => {
        item.isddh = true;
      });
      this.getddh();
      Toast("确认收货");
      // window.console.log(this.$store.state.jiesuan.order);
    },
    //退货和售后
    Thsh() {
      Toast("一经收货，概不退还，售后？想都别想");
    },
    //判断显示隐藏
    isget() {
      if (this.$store.state.jiesuan.order == undefined) {
        this.$store.state.jiesuan.isqb = true;
      } else {
        this.$store.state.jiesuan.isqb = false;
      }
      if (this.$store.state.jiesuan.order.length == 0) {
        this.$store.state.jiesuan.isqb = true;
      } else {
        this.$store.state.jiesuan.isqb = false;
      }
      if (this.$store.state.jiesuan.tuihuo == undefined) {
        this.$store.state.jiesuan.isth = true;
      } else {
        this.$store.state.jiesuan.isth = false;
      }
      if (this.$store.state.jiesuan.tuihuo.length == 0) {
        this.$store.state.jiesuan.isth = true;
      } else {
        this.$store.state.jiesuan.isth = false;
      }
    },
    //判断订单号
    getddh() {
      //简略数组和数组长度
      var order = this.$store.state.jiesuan.order;
      var length = this.$store.state.jiesuan.order.length;
      //循环判断订单号是否相等
      for (var i = 0; i < length; i++) {
        // window.console.log(order[i].ddh);
        //设定j的范围为i到length
        var j = i + 1;
        j = j == length ? -1 : j;
        if (j == -1) {
          return;
        }
        if (order[i].ddh == order[j].ddh) {
          this.$store.state.jiesuan.order[j].isddh = false;
        }
      }
    }
  },
  created() {
    this.active = this.$store.state.active;
    //判断状态
    this.isget();
    this.getddh();
  }
};
</script>

<style lang="scss">
.myOrder {
  width: 100%;
  border-top: 10px solid #ccc;
  ul {
    width: 100%;
    overflow: hidden;
    li {
      width: 100%;
      overflow: hidden;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      div {
        box-sizing: border-box;
      }
      .ddh {
        width: 100%;
        height: 20px;
        line-height: 20px;
        color: #666;
      }
      .tp {
        width: 20%;
        float: left;
        overflow: hidden;
        img {
          width: 100%;
          margin: auto;
        }
      }
      .text {
        width: 60%;
        float: left;
        div {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .name {
          font-size: 18px;
        }
        .nameth {
          padding-bottom: 5px;
        }
        .js {
          padding-top: 5px;
          font-size: 14px;
        }
        .jg {
          font-size: 13px;
          color: red;
          padding-top: 3px;
        }
        .jgth {
          padding-top: 15px;
        }
        .time {
          text-align: right;
          font-size: 14px;
        }
      }
      .cz {
        width: 20%;
        float: left;
        .dsh {
          text-align: right;
          padding-right: 15px;
          font-size: 14px;
          color: #999;
        }
        .num {
          text-align: center;
          font-size: 14px;
        }
        .btn {
          position: relative;
          .van-button {
            position: absolute;
            padding: 0 5px;
            top: 5px;
            right: 5px;
          }
        }
      }
    }
  }
}
.wddd {
  width: 100%;
  margin-top: -43px;
  margin-bottom: -55px;
}
.van-tabs__line {
  background-color: #00c3f5 !important;
}
.van-tab--active {
  color: #00c3f5 !important;
}
.van-nav-bar {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
  .van-nav-bar__title {
    font-size: 20px;
  }
  .van-nav-bar__left {
    i {
      font-size: 28px;
      color: #000;
    }
  }
}
//详情列表
.van-tabs__content {
  .van-tab__pane {
    width: 100%;
    overflow: hidden;
    .con-wddd {
      width: 100%;
      margin-top: 100px;
      text-align: center;
      font-weight: bold;
      .tp {
        width: 100%;
        img {
          width: 50%;
          display: block;
          margin: auto;
        }
      }
      .title {
        width: 100%;
        color: rgba(0, 0, 0, 0.4);
      }
      .sj {
        margin-top: 10px;
        width: 100%;
        color: #00c3f5;
        font-size: 18px;
      }
    }
  }
}
</style>