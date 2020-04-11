<template>
  <div>
    <h3>配件</h3>
    <div class="mz-bottom-box">
      <!-- 手机分页面 -->
      <!-- 图片栏 -->
      <div class="page-pj">
        <img src="https://openfile.meizu.com/group1/M00/06/FC/Cgbj0VwtzU2AEp14AAF565TOmGQ380.jpg" />
      </div>
      <!-- 图片栏end -->

      <!-- 商品栏 -->
      <div class="page-pj-cont">
        <ul>
          <li v-for="(item,i) in data" :key="i" @click="getdata(i)">
            <div class="page-pj-pho">
              <img :src="item.src" />
            </div>
            <div class="into">
              <p class="title">{{item.title}}</p>
              <p class="name">{{item.text}}</p>
              <p class="yan">&yen;{{item.jq}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 商品栏end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    getdata(i) {
      this.$store.state.xqy.objs.thumb = [];
      this.$store.state.xqy.objs.title = this.data[i].title;
      this.$store.state.xqy.objs.price = this.data[i].jq * 100;
      this.$store.state.xqy.objs.text = this.data[i].text;
      this.$store.state.xqy.objs.thumb.push(this.data[i].src);
      this.$store.state.xqy.objs.thumb.push(
        "https://fms.res.meizu.com/dms/2018/09/19/e1a6e477-23ab-4dd9-9931-be8a23745054.jpg"
      );
      this.$store.state.xqy.objs.thumb.push(
        "https://fms.res.meizu.com/dms/2018/09/05/4f1db11e-e74e-4058-a041-4dd30666cf81.jpg"
      );
      this.$router.push("/xq")
    }
  },
  created() {
    this.$store.state.ispd = true;
    this.$store.state.index = false;
    // window.console.log(this.$store.state.data.pj)
    this.$store.state.data.pj.forEach((element, i) => {
      if (i > 1) {
        this.data.push(element);
      }
    });
    // window.console.log(this.data)
  }
};
</script>
<style lang="scss" scoped>
h3 {
  margin: 5px 0;
  text-align: center;
  color: #00b4ff;
}
//第四个分页 配件分页
.page-pj {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
.page-pj-cont {
  width: 100%;
  overflow: hidden;
  background-color: #ccc;
  ul {
    width: 100%;
    overflow: hidden;
    li:nth-child(2n) {
      margin: 0 0 4px 2px;
    }
    li {
      background-color: white;
      width: calc(50% - 2px);
      float: left;
      margin: 0 2px 4px 0;
      .page-pj-pho {
        width: 100%;
        img {
          width: 80%;
          display: block;
          margin: auto;
        }
      }
      .into {
        p {
          text-align: center;
        }
        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 13px;
          padding: 0 5px;
          box-sizing: border-box;
        }
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 5px 10px;
          box-sizing: border-box;
          font-size: 12px;
          color: #999999;
        }
        .yan {
          position: relative;
          color: #e4393c;
          span {
            position: absolute;
            font-size: 10px;
            left: 40px;
            top: 5px;
          }
        }
        .th {
          padding-left: 50px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>