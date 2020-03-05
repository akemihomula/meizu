<template>
  <div id="app">
    <!-- 弹出栏和头部栏 -->
    <top></top>
    <!-- 清除浮动 -->
    <div class="conter">
      <!-- 路由切换 -->
      <router-view />

      <foryou v-show="$store.state.ispd"></foryou>
      <gettop v-show="$store.state.ispd"></gettop>
    </div>
    <!-- 为你推荐 -->

    <!-- 底部路由 -->
    <bottom></bottom>
  </div>
</template>
<script>
//引入头部栏
import top from "./components/apps/top.vue";
import bottom from "./components/apps/bottom.vue";
import foryou from "./views/fouyou.vue";
import gettop from "./views/gettop.vue";
export default {
  data() {
    return {
      selected: "",
      isyc: true,
      ymjl: 0,
      guangli: true
      // heights: 800
    };
  },
  methods: {
    //方法
  },
  components: {
    //引入模块
    top,
    bottom,
    foryou,
    gettop
  },
  created() {
    //数据加载
  },
  mounted() {
    //dom加载
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    //监听路由变化,并且输出他的路由
    //  "$route.path":function(){
    //    window.console.log(this.$route.path)
    //  }
    //用于判断两个固定定位的块 和定义影响的文档流
  }
};
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
}
#app {
  max-width: 1000px;
  min-width: 100px;
  margin: 0 auto;
  overflow: hidden;
}
.conter {
  margin-top: 43px;
  margin-bottom: 55px;
}
.router-link-active {
  color: #6cf;
  div {
    span {
      color: #e4393c;
    }
  }
}
.van-grid-item__content {
  padding: 0 !important;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.van-grid-item__text {
  background-color: white;
}
</style>
