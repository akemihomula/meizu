<template>
  <div class="wdhb">
    <van-nav-bar title="我的红包" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active">
      <van-tab title="可使用">
        <div class="con-wddd">
          <div class="tp">
            <img src="../assets/wdhb.jpg" />
          </div>
          <div>
            <div class="title">没有可使用的红包</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已使用">
        <div class="con-wddd">
          <div class="tp">
            <img src="../assets/wdhb.jpg" />
          </div>
          <div>
            <div class="title">没有已使用的红包</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已过期">
        <div class="con-wddd">
          <div class="tp">
            <img src="../assets/wdhb.jpg" />
          </div>
          <div>
            <div class="title">没有已过期的红包</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0,
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go('-1')
    },
  }
}
</script>
<style lang="scss" scoped>
  .wdhb{
    margin: -43px 0 -55px 0;
  }
  .title{
    font-size: 20px;
  }
</style>