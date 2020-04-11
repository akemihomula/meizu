<template>
  <div>
    <div class="gg">
      <!-- <div class="wz">{{num}}</div> -->
      <img class="animated zoomIn" :src="img" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3,
      cleardata: null,
      img:
        "https://fms.res.meizu.com/dms/2019/10/23/558543b7-8b79-457f-b937-8d03615e19c4.jpg"
    };
  },
  created() {
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        //修改值
        this.$store.state.ispd = !this.$store.state.ispd;
        this.$router.push("/index");
      } else if (this.num == 2) {
        this.img =
          "https://fms.res.meizu.com/dms/2019/11/12/6c280303-6ba7-41ba-a288-ff7598e1e04a.jpg";
        this.num--;
      } else if (this.num == 1) {
        this.img =
          "https://openfile.meizu.com/group1/M00/07/58/Cgbj0F1_MtWAGBY6AAIMTaHG4lI991.jpg";

        this.num--;
      } else {
        this.num--;
      }
    }, 1000);
  },
  beforeDestroy() {
    // 页面跳转先销毁 再跳转
    clearInterval(this.cleardata);
  }
};
</script>

<style lang="scss" scoped>
.gg {
  width: 100%;
  margin-top: calc(40% - 43px);
  position: relative;
  .wz {
    position: absolute;
    top: -60%;
    right: 50%;
  }
  img {
    width: 100%;
    display: block;
  }
}
</style>