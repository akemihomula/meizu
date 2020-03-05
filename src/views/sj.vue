<template>
  <div class="home">
    <!-- 头部栏end -->
    <h3>手机</h3>
    <div class="mz-bottom-box">
      <!-- 手机分页面 -->
      <!-- 图片栏 -->
      <div class="page-sj">
        <img src="https://openfile.meizu.com/group1/M00/07/58/Cgbj0F1_MtWAGBY6AAIMTaHG4lI991.jpg" />
      </div>
      <!-- 图片栏end -->
      <!-- 商品栏 -->
      <div class="page-sj-cont">
        <ul>
          <li v-for="(item,i) in $store.state.shouji.sj" :key="i">
            <div class="page-sj-pho">
              <img :src="item.img" />
            </div>
            <div class="into">
              <p class="title">{{item.title}}</p>
              <p :class="item.istype?'name':'name not-type'">
                <span class="type-text" v-show="item.istype">{{item.type}}</span>
                <span :class="item.istype?'':'text'">{{item.name}}</span>
              </p>
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
// import gwc from "../components/gwc.vue"
export default {
  data() {
    return {};
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
//第二个页面 手机页面设置
.page-sj {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
//手机页分页 商品栏
.page-sj-cont {
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
      .page-sj-pho {
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
          font-size: 14px;
        }

        .name {
          margin: 5px 10px;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          box-shadow: 0 0 0 1px red;
          color: #e4393c;
          .text {
            color: #ababab;
          }
          .type-text {
            height: 100%;
            color: white;
            background-color: #e4393c;
            padding: 0 5px;
            box-sizing: border-box;
          }
        }

        .not-type {
          box-shadow: none;
        }
        .yan {
          color: #e4393c;
        }
      }
    }
  }
}
//为你推荐 全分页适用
</style>