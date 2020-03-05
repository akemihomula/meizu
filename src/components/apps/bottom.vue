<template>
  <div class="bot" v-show="$store.state.ispd">
    <van-grid clickable :column-num="4">
      <!-- 推荐 -->
      <router-link tag="div" to="/index" class="van-grid-item" style="flex-basis: 25%;">
        <div
          role="button"
          tabindex="0"
          class="van-grid-item__content van-grid-item__content--center van-grid-item__content--clickable van-hairline"
        >
          <i class="van-icon van-icon-fire van-grid-item__icon"></i>
          <span class="van-grid-item__text">推荐</span>
        </div>
      </router-link>
      <!-- 手机 -->
      <router-link tag="div" to="/sj" class="van-grid-item" style="flex-basis: 25%;">
        <div
          role="button"
          tabindex="0"
          class="van-grid-item__content van-grid-item__content--center van-grid-item__content--clickable van-hairline"
        >
          <i class="van-icon van-icon-graphic van-grid-item__icon"></i>
          <span class="van-grid-item__text">手机</span>
        </div>
      </router-link>

      <!-- 声学 -->
      <router-link tag="div" to="/sx" class="van-grid-item" style="flex-basis: 25%;">
        <div
          role="button"
          tabindex="0"
          class="van-grid-item__content van-grid-item__content--center van-grid-item__content--clickable van-hairline"
        >
          <i class="van-icon van-icon-service van-grid-item__icon"></i>
          <span class="van-grid-item__text">声学</span>
        </div>
      </router-link>

      <!-- 配件 -->
      <router-link tag="div" to="/pj" class="van-grid-item" style="flex-basis: 25%;">
        <div
          role="button"
          tabindex="0"
          class="van-grid-item__content van-grid-item__content--center van-grid-item__content--clickable van-hairline"
        >
          <i class="van-icon van-icon-star van-grid-item__icon">
            <!---->
          </i>
          <span class="van-grid-item__text">配件</span>
        </div>
      </router-link>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "bottom"
    };
  }
};
</script>

<style lang="scss" scoped>
.bot {
  width: 100%;
  overflow: hidden;
  position: fixed;
  bottom: 0px;
  z-index: 10000;
}
</style>