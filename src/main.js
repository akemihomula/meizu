import Vue from "vue";
//引入mint ui框架
import Mint from 'mint-ui';
Vue.use(Mint);

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
//引入vant框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//应用swiper
import "swiper/dist/css/swiper.css";
// 引用animate
import "animate.css";
//引用字体图标
import "./assets/font/iconfont.css"
// 数据请求
import axios from "axios";
//请求数据统一连接 
// 如果使用后台功能 请改为本地ip地址+3000端口
axios.defaults.baseURL = "http://192.168.124.5:3000";

Vue.prototype.$axios = axios;
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
