import Vue from "vue";
import Vuex from "vuex";
//对应的数据
import xqy from "./xqy.js";
import cart from "./cart.js";
import mydz from "./mydz.js";
import jiesuan from "./jiesuan.js";
//声学路由下的数据
import shengxue from "./lute/shengxue.js";
//手机路由下的数据
import shouji from "./lute/shouji.js";
//app下模块top
import apptop from "./app.top.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    index:false,
    ispd:false,
    tabindex:0,
    //手机数组
    sj:[
      {src:'https://openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png',title:'魅族 14 T',type:'新品',text:'6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 双·立体声扬声器 | 全球频段 | 超广角 AI 三摄 | Flyme8尝鲜体验',jq:'2400'},
      {src:'https://openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhu-AaV4AAAlk4z4lkt0463.png',title:'魅族 16s Pro',type:'新品',text:'【11月22日 10:00 日光橙限量现货开售】【原厂碎屏险特惠价99元 再送3个月延保】6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 双·立体声扬声器 | 全球频段 ',jq:'2700'},
      {src:'https://openfile.meizu.com/group1/M00/07/2C/Cgbj0FzvRI6AWu1jAAxIbnS8M5Q295.png',title:'魅族 16Xs',type:'领劵',text:'【暮光森林 现货开售】【限时3期免息】高通骁龙 855 Plus  | 索尼 4800W 像素超广角 AI 三摄 | 极边全面屏 | Flyme8 尝鲜体验 | 极速屏下指纹 | 全功能NFC',jq:'1990'},
      {src:'https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png',title:'魅族 17s',type:'新品',text:' 【限时领券最高立减200】【限时3期免息】 高通骁龙855 | 4800W光学防抖 | 对称式AMOLED全面屏 | 极速屏下指纹 | 全功能NFC | 3600mAh大电池 | 7.6mm纤薄机身 | mEngine3.0',jq:'3799'},
      {src:'https://openfile.meizu.com/group1/M00/07/2C/Cgbj0FzvRI6AWu1jAAxIbnS8M5Q295.png',title:'魅族 16Xss',type:'新品',text:'【限时特惠 1798元起】【限时3期免息】骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头 | 6.5英寸屏幕 | 4×4 MIMO 天线 | mEngine | 超线性双扬声器',jq:'2790'},
      {src:'https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png',title:'魅族 20sX Pro',type:'领劵',text:' 【限时领券立减100 券后价1099元】【限时6期免息】 骁龙675 | 后置4800万 | 前置2000万 | 独家定制水滴设计全面屏 | 4000mAh大容量电池 | 18W mCharge快充 ',jq:'2400'},
    ],
    //声学数组
    sx:[
      {src:"https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png",title:"魅族 HIFI 解码耳放1",type:"热卖",text:"【11月25日10:00 热带橙色限量发售】40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质",jq:"210"},
      {src:"https://openfile.meizu.com/group1/M00/07/29/Cgbj0FzvN5eAOhF_AAG4VJC6XfM942.png",title:"魅族 HIFI 解码耳放2",type:"热卖",text:"【限时领券 券后价109元】Hi-Res 认证高解析音质 | 高保真生物纤维振膜",jq:"66"},
      {src:"//openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png480x480.jpg",title:"魅族 POP2 真无线蓝牙耳机",type:"热销",text:"【限时领券 券后价369元】【限时3期免息】蓝牙5.0 超长续航",jq:"149"},
      {src:"https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png",title:"魅族 EP63NC 无线降噪耳机",type:"热卖",text:"【限时领券 券后价999元】Knowles四动铁 双通道导音系统",jq:"233"},
      {src:"https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png",title:"魅族 HALO 激光蓝牙耳机",type:"热销",text:"【限时特惠459元】【限时3期免息】智能降噪 声临其境",jq:"177"},
      {src:"https://openfile.meizu.com/group1/M00/07/29/Cgbj0FzvN5eAOhF_AAG4VJC6XfM942.png",title:"魅族 LIVE 四单元动铁耳机",type:"热卖",text:"【限时领券 券后价999元】Knowles四动铁 双通道导音系统",jq:"397"},
      // {src:"",title:"",type:"",text:"",jq:""},
    ],
    //配件数组
    pj:[
      {src:"https://openfile.meizu.com/group1/M00/07/64/Cgbj0F2uq9aAXMT6AAcqvIHVuH4818.png",title:"魅族移动电源3",type:"新品",text:"双向快充双充电口 轻薄小巧",jq:"79"},
      {src:"https://openfile.meizu.com/group1/M00/07/4C/Cgbj0F1l5xmAexI-AAdETGR3gj4619.png",title:"魅族无线充电器",type:"",text:"10W快速充电 无线即放即充",jq:"499"},
      {src:"https://openfile.meizu.com/group1/M00/07/29/Cgbj0FzvN5eAOhF_AAG4VJC6XfM942.png",title:"魅族 HIFI 解码耳放2",type:"",text:"超高性价比创造无线新声代",jq:"111"},
      {src:"https://storeimg.meizu.com/product/1467170145-52479.png",title:"魅族 HIFI 解码耳放",type:"特惠",text:"快速充电 安全无忧 安全无忧",jq:"59"},
    ],
    //立即购买
    ljgm: {},
    //切换点
    active: 0,
  },
  mutations: {},
  actions: {},
  modules: {
    //详情页
    xqy,
    //购物车
    cart,
    mydz,
    apptop,
    jiesuan,
    shengxue,
    shouji
  }
});
