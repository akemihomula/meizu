import Vue from "vue";
import VueRouter from "vue-router";

import sj from "../views/sj.vue";
import index from "../views/index.vue";
import sx from "../views/sx.vue";
import pj from "../views/pj.vue";

//弹出窗口内的视图index
import grzx from "../views/grzx.vue"
//引入导航
import goging from "../views/goging.vue"
//引入广告
import gg from "../views/Gg.vue"
//商品详情页
import xq from "../components/xiangqing.vue"
//购物车
import cart from "../components/cart.vue"
//登录和注册
import dl from "../components/dl.vue"
import zc from "../components/zc.vue"
//结算和地址
import js from "../components/jiesuan.vue"
import dz from "../components/mydz.vue"
//我的订单 手机号查询
import wddd from "../components/wddd.vue"
import sjhcx from "../components/sjhcx.vue"
//立即购买
import ljgm from "../components/ljgm"
//红包 优惠券 收藏
import redb from "../components/myRedpackage.vue"
import coupon from "../components/coupon.vue"
//支付成功
import payment from "../components/payment.vue"
// 复习测试
import newss from "../components/new.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: goging
  },
  {
    path: "/index",
    component: index
  },
  { path: '/sj', component: sj },
  { path: '/sx', component: sx },
  { path: '/pj', component: pj },
  { path: '/gg', component: gg },
  { path: '/grzx', component: grzx },
  { path: '/xq', component: xq },
  { path: '/cart', component: cart },
  { path: '/dl', component: dl },
  { path: '/zc', component: zc },
  //结算
  { path: '/js', component: js },
  //支付成功payment
  { path: '/payment', component: payment },
  //地址
  { path: '/dz', component: dz },
  //我的订单
  { path: '/wddd', component: wddd },
  //手机号查询
  { path: '/sjhcx', component: sjhcx },
  //立即购买
  { path: '/ljgm', component: ljgm },
  //我的红包
  { path: '/redb', component: redb },
  //优惠券
  { path: '/coupon', component: coupon },
  // 复习测试
  { path: '/newss', component: newss },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
