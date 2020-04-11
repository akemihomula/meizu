<template>
  <div>
    <h3>声学</h3>
    <!-- 图片栏 -->
    <div class="page-sx">
      <img src="https://openfile.meizu.com/group1/M00/07/68/Cgbj0F2wC-2ANK5-AATzRFaCugE400.jpg" />
    </div>
    <!-- 图片栏end -->
    <div class="page-sx-cont">
      <ul>
        <li v-for="(item,i) in $store.state.data.sx" :key="i" @click="getcart(i)">
          <div class="page-sx-pho">
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //加入购物车
    getcart(i) {
      this.$store.state.xqy.objs.thumb = [];
      this.$store.state.xqy.objs.title = this.$store.state.data.sx[i].title;
      this.$store.state.xqy.objs.price = this.$store.state.data.sx[i].jq * 100;
      this.$store.state.xqy.objs.text = this.$store.state.data.sx[i].text;
      // 三张图片轮播图
      this.$store.state.xqy.objs.thumb.push(this.$store.state.data.sx[i].src);
      this.$store.state.xqy.objs.thumb.push(
        "https://fms.res.meizu.com/dms/2019/10/23/b2651b25-a85b-464b-8ff6-57106898e6c3.jpg"
      );
      this.$store.state.xqy.objs.thumb.push(
        require("../assets/img/ye02/06.jpg")
      );
      this.$router.push("/xq");
    }
  },
  created() {
    this.$store.state.ispd = true;
    this.$store.state.index = false;
  }
};
</script>


<style lang="scss" scoped>
h3 {
  margin: 5px 0;
  text-align: center;
  color: #00b4ff;
}
//第三个分页 声学分页
.page-sx {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
.page-sx-cont {
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
      .page-sx-pho {
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