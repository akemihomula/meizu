<template>
  <div>
    <h3>推荐</h3>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/img/lbt-1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/lbt-2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/lbt-3.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/lbt-4.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/lbt-5.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/lbt-6.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/lbt-7.jpg" />
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
    <!-- 轮播图end -->

    <!-- 保证栏 -->
    <div class="mz-ensure">
      <div class="ensure">
        <div>
          <img
            src="https://fms.res.meizu.com/dms/2018/03/30/99f49dfe-25c2-485a-b7b3-8b63d6487b46.png"
            alt
          />
        </div>
        <span>魅族官方直供</span>
      </div>
      <div class="ensure">
        <div>
          <img
            src="https://fms.res.meizu.com/dms/2018/03/30/8f1252b1-3fb2-48e2-b992-1f38a9745314.png"
            alt
          />
        </div>
        <span>满80免运费</span>
      </div>
      <div class="ensure">
        <div>
          <img
            src="https://fms.res.meizu.com/dms/2018/03/30/3924a1e1-5b4a-41de-9e79-ee904ec69d90.png"
            alt
          />
        </div>
        <span>7天无理由退货</span>
      </div>
    </div>
    <!-- 保证栏end -->

    <!-- 推广栏 -->
    <div class="mz-hot">
      <div>
        <ul>
          <a href="https://hd.mall.meizu.com/sale/peijiangoukuanghuan.html" target="_blank">
            <li>
              <div>
                <img
                  src="https://fms.res.meizu.com/dms/2019/10/23/fe0dc6bc-b02e-435c-8dd2-2b7d7d0cd369.jpg"
                  alt
                />
              </div>
              <div class="hot-text">魅族16 T</div>
            </li>
          </a>
          <a href="https://hd.mall.meizu.com/sale/peijiangoukuanghuan.html" target="_blank">
            <li>
              <div>
                <img
                  src="https://fms.res.meizu.com/dms/2019/10/31/37f8ac2a-570e-4f5d-8352-c785c6a2ccb0.png"
                  alt
                />
              </div>
              <div class="hot-text">颜值狂欢抢购</div>
            </li>
          </a>
          <a href="https://hd.mall.meizu.com/sale/peijiangoukuanghuan.html" target="_blank">
            <li>
              <div>
                <img
                  src="https://fms.res.meizu.com/dms/2019/04/28/552f6669-8652-4f78-a122-4866d2f7d25c.jpg"
                  alt
                />
              </div>
              <div class="hot-text">魅族 16S Pro</div>
            </li>
          </a>
          <a href="https://hd.mall.meizu.com/sale/peijiangoukuanghuan.html" target="_blank">
            <li>
              <div>
                <img
                  src="https://fms.res.meizu.com/dms/2019/10/23/fe0dc6bc-b02e-435c-8dd2-2b7d7d0cd369.jpg"
                  alt
                />
              </div>
              <div class="hot-text">mCycle</div>
            </li>
          </a>
        </ul>
      </div>
    </div>
    <!-- 推广栏end -->

    <!-- 介绍栏 -->
    <div class="mz-introduce">
      <div class="introduce">
        <img
          src="https://fms.res.meizu.com/dms/2019/10/23/113968b1-80e2-4a79-95e9-00509e12256e.jpg"
          alt
        />
      </div>
      <div class="introduce">
        <div>
          <img
            src="https://fms.res.meizu.com/dms/2019/10/24/5b4b466a-9131-4dfb-adad-43603617f57e.png"
            alt
          />
        </div>
        <div>
          <img
            src="https://fms.res.meizu.com/dms/2019/10/28/3f8ccf1e-71e5-473e-8c5f-f3750236fd4d.jpg"
            alt
          />
        </div>
      </div>
    </div>
    <!-- 介绍栏end -->

    <!-- 智能手机 -->
    <div class="mz-box mz-zzsj">
      <div class="mz-title">
        <h3>智能手机</h3>
        <i></i>
      </div>
      <div class="mz-adv">
        <img
          src="https://fms.res.meizu.com/dms/2019/11/01/4f86babc-2d5e-4f8c-bfdc-6f8a47940a92.jpg"
          alt
        />
      </div>
      <div class="mz-row">
        <ul>
          <li v-for="(item,i) in $store.state.sj" :key="i" @click="sjxqy(i)">
            <img :src="item.src" />
            <div class="info">
              <p>{{item.title}}</p>
              <p :class="item.type == '新品' ? 'p-get':'p-get lj-th'">
                <span class="xp">{{item.type}}</span>
                {{item.text}}
              </p>
              <p class="jg">&yen;{{item.jq}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 智能手机end -->

    <!-- 魅族声学 -->
    <div class="mz-box mz-mzsx">
      <div class="mz-title">
        <h3>魅族声学</h3>
        <i></i>
      </div>
      <div class="mz-adv">
        <div class="sx-box">
          <img
            src="https://fms.res.meizu.com/dms/2019/10/23/b2651b25-a85b-464b-8ff6-57106898e6c3.jpg"
          />
          <div class="wz fl">
            <h4>魅族 HD60 头戴式蓝牙耳机</h4>
            <p>40mm生物振膜 | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质</p>
            <i></i>
          </div>
        </div>

        <div class="sx-box">
          <img
            class="right"
            src="https://fms.res.meizu.com/dms/2019/08/28/1cbca752-3b8f-4ddf-a20e-c6bbcbebc5fa.jpg"
          />
          <div class="wz wz-2 fl">
            <h4>MEIZU UR 高端定制耳机 预约</h4>
            <p>40mm生物振膜 | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质</p>
            <i></i>
          </div>
        </div>
      </div>
      <div class="mz-row">
        <ul>
          <li v-for="(item,i) in $store.state.sx" :key="i" @click="sxxqy(i)">
            <img :src="item.src" />
            <div class="info">
              <p>{{item.title}}</p>
              <p class="p-get rm bm">
                <span class="xp">{{item.type}}</span>
                {{item.text}}
              </p>
              <p class="jg">&yen;{{item.jq}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 魅族声学end -->

    <!-- 智能配件 -->
    <div class="mz-box mz-znpj">
      <div class="mz-title">
        <h3>智能配件</h3>
        <i></i>
      </div>
      <div class="mz-adv">
        <div class="mz-adv">
          <div class="sx-box">
            <img
              src="https://fms.res.meizu.com/dms/2018/09/19/e1a6e477-23ab-4dd9-9931-be8a23745054.jpg"
            />
            <div class="wz fl">
              <h4>魅族移动电源3</h4>
              <p>双向快充双充电口 轻薄小巧</p>
              <i></i>
              <p class="jg">&yen;79</p>
            </div>
          </div>

          <div class="sx-box">
            <img
              class="right"
              src="https://fms.res.meizu.com/dms/2018/09/05/4f1db11e-e74e-4058-a041-4dd30666cf81.jpg"
            />
            <div class="wz wz-2 fl">
              <h4>魅族无线充电器</h4>
              <p>10W快速充电 无线即放即充</p>
              <i></i>
              <p class="jg">&yen;499</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mz-row">
        <ul>
          <li v-for="(item,i) in $store.state.pj" :key="i" @click="pjxqy(i)">
            <img :src="item.src" />
            <div class="info">
              <p>{{item.title}}</p>
              <p class="p-get">{{item.text}}</p>
              <p class="jg">&yen;{{item.jq}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 智能配件end -->
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      show: false,
      isdsq: false
    };
  },
  methods: {
    //返回首页
    gettop() {
      window.scrollTo(0, 0);
    },
    //切换详情页
    xqy() {
      this.$store.state.ispd = false;
      this.$router.push("/xq");
    },
    sjxqy(i) {
      this.$store.state.xqy.objs.thumb = [];
      this.$store.state.xqy.objs.title = this.$store.state.sj[i].title;
      this.$store.state.xqy.objs.price = this.$store.state.sj[i].jq * 100;
      this.$store.state.xqy.objs.text = this.$store.state.sj[i].text;
      this.$store.state.xqy.objs.thumb.push(this.$store.state.sj[i].src);
      this.$store.state.xqy.objs.thumb.push(
        "https://openfile.meizu.com/group1/M00/07/2C/Cgbj0FzvRKCAKQ5vAAi2dZyo2v4915.png680x680.jpg"
      );
      this.$router.push("/xq");
    },
    sxxqy(i) {
      this.$store.state.xqy.objs.thumb = [];
      this.$store.state.xqy.objs.title = this.$store.state.sx[i].title;
      this.$store.state.xqy.objs.price = this.$store.state.sx[i].jq * 100;
      this.$store.state.xqy.objs.text = this.$store.state.sx[i].text;
      this.$store.state.xqy.objs.thumb.push(this.$store.state.sx[i].src);
      this.$store.state.xqy.objs.thumb.push(
        "https://fms.res.meizu.com/dms/2019/10/23/b2651b25-a85b-464b-8ff6-57106898e6c3.jpg"
      );
      this.$router.push("/xq");
    },
    pjxqy(i) {
      this.$store.state.xqy.objs.thumb = [];
      this.$store.state.xqy.objs.title = this.$store.state.pj[i].title;
      this.$store.state.xqy.objs.price = this.$store.state.pj[i].jq * 100;
      this.$store.state.xqy.objs.text = this.$store.state.pj[i].text;
      this.$store.state.xqy.objs.thumb.push(this.$store.state.pj[i].src);
      this.$store.state.xqy.objs.thumb.push(
        "https://fms.res.meizu.com/dms/2018/09/19/e1a6e477-23ab-4dd9-9931-be8a23745054.jpg"
      );
      this.$store.state.xqy.objs.thumb.push(
        "https://fms.res.meizu.com/dms/2018/09/05/4f1db11e-e74e-4058-a041-4dd30666cf81.jpg"
      );
      this.$router.push("/xq");
    }
  },
  created() {
    this.$store.state.ispd = true;
    this.$store.state.index = true;
    // window.console.log("123");
  },
  mounted() {
    new Swiper(".swiper-container", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}
h3 {
  margin: 5px 0;
  text-align: center;
  color: #00b4ff;
}
//头部栏
.mz-top-box {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 10000;
  background-color: white;
  .top {
    width: 100%;
    height: 20px;
    position: relative;
    .icon-1 {
      width: 20px;
      height: 20px;
      background: url(../assets/img/tb-1.png) no-repeat 2px 2px;
      background-size: 75%;
    }
    .icon-2 {
      width: 100px;
      height: 20px;
      background: url(../assets/img/tb-2.png) no-repeat;
      position: absolute;
      left: calc(50% - 40px);
      top: 3px;
      background-size: 75%;
    }
    .icon-3 {
      width: 20px;
      height: 20px;
      background: url(../assets/img/tb-3.png) no-repeat 3px 3px;
      margin-right: 10px;
      background-size: 75%;
    }
    .icon-4 {
      width: 7px;
      height: 21px;
      background: url(../assets/img/tb-4.png) no-repeat;
      margin-top: 2px;
      background-size: 75%;
    }
  }
}

.conter {
  margin-top: 43px;
  // margin-bottom: 55px;
  overflow: hidden;
}
//轮播图
.swiper-container {
  width: 100%;
  overflow: hidden;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  img {
    width: 100%;
    display: block;
  }
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

//保证
.mz-ensure {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  background-color: #f7f7f7;
  .ensure {
    flex: 1;
    div {
      width: 16px;
      float: left;
      margin: 5px 5px 0px 0px;
      img {
        width: 100%;
        display: block;
      }
    }
    span {
      font-size: 10px;
      color: #999;
    }
  }
}

//推广
.mz-hot {
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  div {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      a {
        flex: 1;
        li {
          width: 100%;
          div {
            width: 100%;
            img {
              width: 60%;
              display: block;
              margin: auto;
            }
          }
          .hot-text {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            text-align: center;
          }
        }
      }
    }
  }
}

//介绍栏
.mz-introduce {
  width: 100%;
  display: flex;
  background-color: #ccc;
  box-sizing: border-box;
  .introduce {
    flex: 1;
    img {
      width: 100%;
      display: block;
    }
    div {
      width: 100%;
      img {
        width: 100%;
        display: block;
      }
    }
  }
}

//智能手机 魅族声学 智能配件通用样式
.mz-box {
  width: 100%;
  background-color: #ccc;
  .mz-title {
    padding: 32px 0px 20px 0px;
    position: relative;
    i {
      width: 26px;
      height: 3px;
      background-color: #66ccff;
      position: absolute;
      left: calc(50% - 13px);
      bottom: 10px;
    }
    h3 {
      // margin: auto;
      text-align: center;
    }
  }
  .mz-adv {
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
  }
  .mz-row {
    width: 100%;
    overflow: hidden;
    ul {
      width: 100%;
      overflow: hidden;
      li:nth-child(2n) {
        margin: 0px 0px 5px 0px;
      }
      li {
        width: calc(50% - 2.5px);
        float: left;
        margin: 0px 5px 5px 0px;
        background-color: white;
        img {
          width: 70%;
          margin: auto;
          display: block;
        }
        .info {
          width: 100%;
          p {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            margin-bottom: 5px;
          }
          p:nth-child(2) {
            text-align: left;
          }
          //领劵 特惠
          .lj-th {
            color: #cc0000 !important;
            box-shadow: 0px 0px 0px 1px;
          }
          .p-get {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            margin: 0 5px;
            color: #999999;
            .xp {
              background-color: #e4393c;
              padding: 0 3px;
              color: white;
            }
          }
          .jg {
            color: #e4393c;
            font-size: 13px;
          }
        }
      }
    }
  }
}

//魅族声学 mz-adv下不相同格式
.mz-mzsx {
  .mz-title {
    i {
      background-color: #ff6363;
    }
  }
  .mz-adv {
    width: 100%;
    .wz {
      height: 100%;
    }
    .sx-box {
      width: 100%;
      height: 150px;
      position: relative;
      img.right {
        position: absolute;
        right: 0;
        top: 0;
      }
      img {
        width: 50%;
        height: 100%;
        display: block;
        float: left;
      }
      .wz-2 {
        background-color: #7063c9 !important;
      }
      .wz {
        width: 50%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        color: white;
        background-color: #f55c5c;
        position: relative;
        h4 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        p {
          font-size: 12px;
        }
        i {
          width: 16px;
          height: 2px;
          background-color: white;
          position: absolute;
          left: 10px;
          bottom: 37px;
        }
        .jg {
          position: absolute;
          font-size: 20px;
          left: 10px;
          bottom: 10px;
        }
      }
    }
  }

  .mz-row {
    ul {
      padding-top: 5px;
      li {
        //不满一行
        .bm {
          display: inline-block;
        }
        //热卖
        text-align: center;
        .rm {
          border: 1px solid red;
          color: #ff6363 !important;
        }
        .pt {
          font-size: 13px;
          color: #a1a1a1;
          text-align: center;
        }
      }
    }
  }
}

//智能配件
.mz-znpj {
  .mz-title {
    i {
      background-color: #7143ff;
    }
  }
  .mz-adv {
    width: 100%;
    .wz {
      height: 100%;
    }
    .sx-box {
      width: 100%;
      height: 150px;
      position: relative;
      img.right {
        position: absolute;
        right: 0;
        top: 0;
      }
      img {
        width: 50%;
        height: 100%;
        display: block;
        float: left;
      }
      .wz-2 {
        background-color: #ffae45 !important;
      }
      .wz {
        width: 50%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        color: white;
        background-color: #55c3c3;
        position: relative;
        h4 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        p {
          font-size: 12px;
        }
        i {
          width: 16px;
          height: 2px;
          background-color: white;
          position: absolute;
          left: 10px;
          top: 70px;
        }
        .jg {
          position: absolute;
          font-size: 20px;
          left: 10px;
          bottom: 10px;
        }
      }
    }
  }
  .mz-row {
    ul {
      li {
        .info {
          .p-get {
            text-align: center !important;
          }
          .pj-xp {
            border-top: 1px solid #e4393c;
            border-bottom: 1px solid #e4393c;
            border-right: 1px solid #e4393c;
            .xp {
              padding-left: 6px !important;
            }
          }
        }
      }
    }
  }
}
//返回顶部
.mz-gettop {
  width: 100%;
  background-color: #ccc;
  h3 {
    padding: 20px 0;
    margin: 0;
    text-align: center;
    font-size: 13px;
    color: #000;
  }
}

//底部连接栏
.mz-call {
  width: 100%;

  overflow: hidden;
  .call-top {
    width: 100%;
    overflow: hidden;
    .fl {
      float: left;
    }
    div {
      font-size: 14px;
      width: calc(50% - 20px);
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #00b4ff;
      border-radius: 10px;
      margin: 10px;
      color: white;
      i {
        font-size: 20px;
        margin-right: 10px;
      }
      .fa-phone {
        margin-top: 5px;
      }
    }
  }
  .call-bottom {
    width: 100%;
    overflow: hidden;
    div {
      height: 80px;
    }
    .fl {
      float: left;
      width: 70%;
      padding: 12px;
      box-sizing: border-box;
      color: #999;
      font-size: 10px;
      text-align: center;
      line-height: 20px;
    }
    .fr {
      float: left;
      position: relative;
      i {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url(https://fms.res.meizu.com/dms/2017/12/18/1c31db15-ab85-4932-8e6c-edfd6039bc60.png);
        background-size: 100%;
        position: absolute;
        left: 5px;
        top: 16px;
      }
      width: 30%;
      text-align: center;
      line-height: 50px;
      font-size: 12px;
    }
  }
}
</style>
