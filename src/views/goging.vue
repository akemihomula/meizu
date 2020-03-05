<template>
  <div class="ind">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-show="ispd">
          <img
            class="animated zoomIn"
            src="https://fms.res.meizu.com/dms/2019/11/15/3dcb5e53-ecee-4e15-91e1-7821aa7dda0f.jpg"
            alt
          />
          <h3 class="animated fadeInUp">flyme8.0 稳定 可靠</h3>
        </div>
        <div class="swiper-slide" v-show="ispd">
          <img
            class="animated zoomIn"
            src="https://fms.res.meizu.com/dms/2019/11/12/7541b06c-7a5b-41b6-b310-f4f1adfece19.jpg"
            alt
          />
          <h3 class="animated fadeInUp">吃鸡不卡 拍她更美</h3>
        </div>
        <div class="swiper-slide" v-show="ispd">
          <img
            class="animated zoomIn"
            src="https://fms.res.meizu.com/dms/2019/10/23/dbe1b353-0aa1-4b71-9a8c-c7c5fd0c975b.jpg"
            alt
          />
          <h3 class="animated fadeInUp">魅族声学 触动心声</h3>
          <button class="animated zoomIn ann" @click="go">立即体验</button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      ispd: true
    };
  },
  methods: {
    go() {
      //第一次访问
      localStorage.one = true;
      //弹出到默认组件的方法 this.$router.
      this.$router.push("/gg");
    }
  },
  created() {
    // location.reload();
    // 判断是否执行引导页
    // 值存在 不执行此页面 直接跳转广告
    if (localStorage.one) {
      this.$router.push("/index");
    } else {
      localStorage.one = true;
    }
  },
  mounted() {
    let self = this;
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        slideChangeTransitionStart: function() {
          self.ispd = false;
        },
        slideChangeTransitionEnd: function() {
          self.ispd = true;
          // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  margin: 0;
}
.ann {
  position: absolute;
  bottom: 20%;
}
.swiper-slide {
  text-align: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  margin-top: 30%;
}
.swiper-slide h3 {
  color: #808080;
}
button {
  width: 200px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #c8efd4;
  background: #fff;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 30px;
  margin: 0 auto;
}
</style>
