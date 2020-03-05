<template>
  <div class="goods">
    <div class="next" @click="goindex">
      <van-icon name="arrow-left" />
    </div>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in $store.state.xqy.objs.thumb" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <!-- <div class="goods-title">{{ $store.state.xqy.get }}</div> -->
        <div class="goods-title">{{$store.state.xqy.objs.title}}</div>
        <!-- <div class="goods-price">{{formatPrice($store.state.xqy.objs.price)}}</div> -->
        <div class="goods-price">{{formatPrice()}}</div>
      </van-cell>
      <div class="van-cell text">{{$store.state.xqy.objs.text}}</div>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{$store.state.xqy.objs.express}}</van-col>
        <van-col span="14">剩余：{{$store.state.xqy.objs.remain}}</van-col>
      </van-cell>
    </van-cell-group>
    <!-- 商品介绍/规格详情 -->
    <van-tabs v-model="active" class="ces">
      <van-tab title="图文详情">
        <div class="tp">
          <img src="//openfile.meizu.com/group1/M00/07/6D/Cgbj0F3DeLSAEc4HAA0BWjMSgkI325.jpg" />
          <img src="//openfile.meizu.com/group1/M00/07/67/Cgbj0F2v6_aAHX_4AAqp6uaqdVA938.jpg" />
          <img src="//openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yYkuAIwl0AAPlvDz8ySg479.jpg" />
          <img src="//openfile.meizu.com/group1/M00/07/6A/Cgbj0F20SIqAN-lQAA9u2qAq5Qs658.jpg" />
        </div>
      </van-tab>
      <van-tab title="参数规格">
        <div class="list">
          <ul>
            <li class="title">品牌信息</li>
            <li>
              <div class="fl">品牌</div>
              <div class="fr">魅族</div>
            </li>
            <li>
              <div class="fl">型号</div>
              <div class="fr">魅族 16 T</div>
            </li>
            <li>
              <div class="fl">尺寸</div>
              <div class="fr">159.63*78.2*8.3mm</div>
            </li>
            <li>
              <div class="fl">重量</div>
              <div class="fr">183g</div>
            </li>
          </ul>

          <ul>
            <li class="title">屏幕</li>
            <li>
              <div class="fl">屏幕尺寸</div>
              <div class="fr">6.5英寸</div>
            </li>
            <li>
              <div class="fl">对比度</div>
              <div class="fr">1000000:1</div>
            </li>
            <li>
              <div class="fl">分辨率</div>
              <div class="fr">2232 x 1080</div>
            </li>
            <li>
              <div class="fl">PPI</div>
              <div class="fr">382</div>
            </li>
            <li>
              <div class="fl">亮度</div>
              <div class="fr">430nit(典型值)</div>
            </li>
            <li>
              <div class="fl">制造工艺</div>
              <div class="fr">On-Cell全贴合</div>
            </li>
          </ul>

          <ul>
            <li class="title">容量</li>
            <li>
              <div class="fl">运行内存</div>
              <div class="fr">6GB/8GB</div>
            </li>
          </ul>

          <ul>
            <li class="title">处理器</li>
            <li>
              <div class="fl">CPU</div>
              <div class="fr">Qualcomm® 骁龙™ 855 8 核心移动平台</div>
            </li>
            <li>
              <div class="fl">GPU</div>
              <div class="fr">Adreno™ 640 图形处理器</div>
            </li>
          </ul>

          <ul>
            <li class="title">摄像</li>
            <li>
              <div class="fl">前置摄像头</div>
              <div class="fr">
                1600万像素
                <br />ƒ/2.2 大光圈
                <br />5片式定制镜头
                <br />AI 美颜
                <br />人像模式
                <br />人脸识别解锁
                <br />自动 HDR
                <br />自拍超级夜景（后续OTA升级）
                <br />逆光模式（后续OTA升级）
              </div>
            </li>
            <li>
              <div class="fl">后置摄像头</div>
              <div class="fr">
                主镜头：1200 万像素 + SONY IMX362 + ƒ/1.9 + 等效焦距 24mm + 6 片式定制镜头
                <br />副镜头：500 万像素 + Samsung 5E9 + ƒ/1.9 + 等效焦距 23mm + 4 片式定制镜头
                <br />超广角镜头：800 万像素 + Samsung 4H7 + ƒ/2.2 + 等效焦距 15mm + 5 片式定制镜头
                <br />手持超级夜景 / 脚架超级夜景
                <br />AI 场景识别
                <br />自动 HDR
                <br />118° 超广角
                <br />超广角录像
                <br />PDAF 相位对焦
                <br />2.5cm 微距摄像
                <br />4K 60 帧超清录像
                <br />人像模式
                <br />240 帧慢动作录像
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>

    <van-goods-action>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="getcart">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="llgm">立即购买</van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      xqyobjs: {},
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 26800,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      },
      active: 0
    };
  },
  methods: {
    //返回主页
    goindex() {
      this.$router.push("/index");
    },
    formatPrice() {
      return "¥" + (this.$store.state.xqy.objs.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("/cart");
    },
    getcart() {
      let ids = this.$store.state.cart.goods.length;
      //判断，需要从购物车的数组中判断是否有相等的，如果有 就让num+1
      var gets = true;
      this.$store.state.cart.goods.forEach((element, index) => {
        //判断name是否重合
        if (element.title == this.$store.state.xqy.objs.title) {
          //如果判断是数量+1，就不要再push进数组了
          this.$store.state.cart.goods[index].num++;
          gets = false;
        }
      });
      //如果gets为true 就表示是第一次添加进购物车
      if (gets) {
        var obj = {
          // id: ''+ ++this.$store.state.cart.goods.length +'',
          id: "" + ++ids + "",
          title: this.$store.state.xqy.objs.title,
          desc: this.$store.state.xqy.objs.text,
          price: this.$store.state.xqy.objs.price,
          num: 1,
          thumb: this.$store.state.xqy.objs.thumb[0]
        };

        window.console.log(obj);
        this.$store.state.cart.goods.push(obj);
        Toast("加入购物车成功");
      } else {
        Toast("购物车已有本商品，数量+1");
      }
      //1
    },
    llgm() {
      var obj = {
        title: this.$store.state.xqy.objs.title,
        desc: this.$store.state.xqy.objs.text,
        price: this.$store.state.xqy.objs.price,
        num: 1,
        thumb: this.$store.state.xqy.objs.thumb[0]
      };
      this.$store.state.ljgm = obj;
      // window.console.log(obj);
      this.$router.push("/ljgm");
      // 清除图片防止报错
      this.$store.state.xqy.objs.thumb = [];
    }
  },
  created() {
    this.$store.state.ispd = false;
    if (this.$store.state.xqy.objs.thumb.length == 0) {
      this.$router.push("/index");
    }
    this.xqyobjs = this.$store.state.xqy.objs;
    // window.console.log(this.xqyobjs);
  }
};
</script>

<style lang="scss">
.van-cell-group {
  .text {
    color: #f0415f !important;
  }
}
.ces {
  .tp {
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
  }
}
.list {
  width: 100%;
  overflow: hidden;
  ul {
    width: calc(100% - 6px);
    overflow: hidden;
    margin: 0 3px;
    .title {
      width: 100%;
      background-color: #f5f5f5;
    }
    li:nth-child(1){
      border: 0;
    }
    li {
      width: 100%;
      color: #999;
      padding: 10px;
      padding-left: 15px;
      box-sizing: border-box;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid #ccc;
      .fl {
        float: left;
        width: 40%;
      }
      .fr {
        float: left;
        width: 60%;
        color: #333;
      }
    }
  }
}
.next {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 200000;
  font-size: 24px;
  background-color: white;
  opacity: 0.75;
  i {
    margin-top: 3px;
    margin-left: 1px;
    opacity: 1;
  }
}
.goods {
  // position: fixed;
  margin-top: -43px;
  margin-bottom: -55px;
  width: 100%;
  // top: 0;
  // left: 0;
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
</style>