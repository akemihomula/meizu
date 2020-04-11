<template>
  <!-- 为您推荐 -->
  <div class="page-foryou">
    <div class="foryou-top">
      <h3>为您推荐</h3>
    </div>
    <div class="foryou-cont">
      <ul>
        <li v-for="(item,i) in this.data" :key="i" @click="pushdata(i,item)">
          <div class="foryou-img">
            <img :src="item.src" />
          </div>
          <div class="foryou-info">
            <p class="f-title">{{item.title}}</p>
            <p class="f-jg">&yen;{{item.jq}}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- 为您推荐end -->
</template>

<script>
export default {
  data() {
    return {
      foryou: "这一切都是为了你哟",
      data: []
    };
  },
  methods: {
    // 随机从手机 声学 配件 三个数组里面获取两条数据
    getdata() {
      for (var i = 0; i < 2; i++) {
        this.data.push(
          this.$store.state.data.sj[
            Math.floor(Math.random() * this.$store.state.data.sj.length)
          ]
        );
        this.data.push(
          this.$store.state.data.sx[
            Math.floor(Math.random() * this.$store.state.data.sx.length)
          ]
        );
        this.data.push(
          this.$store.state.data.pj[
            Math.floor(Math.random() * this.$store.state.data.pj.length)
          ]
        );
      }
    },
    pushdata(i, item) {
      // 将获取的数据放入xqy数组 实现购买
      this.$store.state.xqy.objs.thumb = [];
      this.$store.state.xqy.objs.title = this.data[i].title;
      this.$store.state.xqy.objs.price = this.data[i].jq * 100;
      this.$store.state.xqy.objs.text = this.data[i].text;
      this.$store.state.xqy.objs.thumb.push(this.data[i].src);
      if (item.isdata == "sj") {
        this.$store.state.xqy.objs.thumb.push(
          "https://openfile.meizu.com/group1/M00/07/2C/Cgbj0FzvRKCAKQ5vAAi2dZyo2v4915.png680x680.jpg"
        );
      } else if (item.isdata == "sx") {
        this.$store.state.xqy.objs.thumb.push(
          "https://fms.res.meizu.com/dms/2019/10/23/b2651b25-a85b-464b-8ff6-57106898e6c3.jpg"
        );
        this.$store.state.xqy.objs.thumb.push(
          require("../assets/img/ye02/06.jpg")
        );
      } else if (item.isdata == "pj") {
        this.$store.state.xqy.objs.thumb.push(
          "https://fms.res.meizu.com/dms/2018/09/19/e1a6e477-23ab-4dd9-9931-be8a23745054.jpg"
        );
        this.$store.state.xqy.objs.thumb.push(
          "https://fms.res.meizu.com/dms/2018/09/05/4f1db11e-e74e-4058-a041-4dd30666cf81.jpg"
        );
      }
       this.$router.push("/xq")
    }
  },
  created() {
    this.getdata();
  }
};
</script>

<style lang="scss" scoped>
.page-foryou {
  width: 100%;
  overflow: hidden;
  background-color: #ccc;
  .foryou-top {
    width: 100%;
    h3 {
      width: 100%;
      font-size: 20px;
      padding: 15px 0 10px 0;
      box-sizing: border-box;
      text-align: center;
    }
  }
  .foryou-cont {
    overflow-x: auto;
    background-color: #f1f1f1;
    ul {
      display: flex;
      li {
        background-color: white;
        float: left;
        width: 150px;
        margin-right: 10px;
        .foryou-img {
          width: 150px;
          img {
            width: 75%;
            display: block;
            margin: auto;
          }
        }
        .foryou-info {
          p {
            text-align: center;
            margin-bottom: 5px;
          }
          .f-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            padding: 0 5px;
          }
          .f-jg {
            color: #e4393c;
          }
        }
      }
    }
  }
}
</style>