<template>
  <div class="coupon">
    <van-nav-bar title="我的优惠券" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active">
      <van-tab title="可使用">
        <div class="con-wddd">
          <div class="title">您还没有可使用的优惠券</div>
        </div>
      </van-tab>
      <van-tab title="已使用">
        <div class="con-wddd">
          <div class="title">您还没有已使用的优惠券</div>
        </div>
      </van-tab>
      <van-tab title="已过期">
        <div class="con-wddd">
          <div class="title">您还没有已过期的优惠券</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    }
  }
};
</script>
<style lang="scss" scoped>
.coupon {
  width: 100%;
  margin: -43px 0 -55px 0;
}
.title {
  font-size: 14px;
}
</style>