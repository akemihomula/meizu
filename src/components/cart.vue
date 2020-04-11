<template>
  <div>
    <div class="gd">
      <div class="getindex" @click="goindex">
        <van-icon name="arrow-left" />
      </div>
      <div class="text">购物车</div>
      <div class="bj" @click="bianji">{{bj}}</div>
    </div>
    <div class="cont">
      <van-checkbox-group class="card-goods" v-model="checked">
        <van-checkbox
          class="card-goods__item"
          v-for="item in $store.state.cart.goods"
          :key="item.id"
          :name="item.id"
        >
          <!-- 控制商品数量的加减 -->
          <div class="nums" v-show="isbj">
            <button @click.stop="item.num == 1 ? 1 : item.num-- ">-</button>
            <span>{{item.num}}</span>
            <button @click.stop="item.num++">+</button>
          </div>
          <van-card
            :title="'商品名称：'+item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.thumb"
          />
        </van-checkbox>
      </van-checkbox-group>
      <van-submit-bar
        :price="totalPrice"
        :disabled="!checked.length"
        :button-text="submitBarText"
        @submit="onSubmit"
      >
        <div class="dang" v-show="isbj"></div>
        <div class="bjs" v-show="isbj" @click="dels">删除</div>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checked: [],
      isbj: false,
      bj: "编辑"
    };
  },
  computed: {
    submitBarText() {
      const count = this.checked.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      // 价格计算;
      return this.$store.state.cart.goods.reduce(
        (total, item) =>
          total +
          (this.checked.indexOf(item.id) !== -1 ? item.price * item.num : 0),
        0
      );
    }
  },
  methods: {
    //返回主页
    goindex() {
      // this.$router.push("/index");
      this.$router.go(-1);
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      this.$router.push("/js");
    },
    //编辑
    bianji() {
      this.isbj = !this.isbj;
      if (this.isbj) {
        this.bj = "完成";
      } else {
        this.bj = "编辑";
      }
    },
    //删除
    dels() {
      Toast("删除完成");
      //根据条件筛选，将相应的数据给新的数组，让新的数组替换this.$store.state.cart.goods
      var newobj = [];
      // var newnum = [];
      this.$store.state.cart.goods.forEach(item => {
        if (this.checked.indexOf(item.id) == -1) {
          newobj.push(item);
        }
      });
      //重新计算id
      //如果我不重新计算id 三个商品中我删除第二个，剩下两个商品的id就会为1 3 然后添加2个商品 id会为2 3 之后两个3就会冲突
      newobj.forEach((item, i) => {
        item.id = "" + ++i + "";
      });
      this.$store.state.cart.goods = newobj;
      window.console.log(newobj);
      //重新计算其中的id和checked值
      var newarr = [];
      this.$store.state.cart.goods.forEach((element, index) => {
        newarr.push("" + ++index + "");
      });
      this.checked = newarr;
      this.checked.length = this.$store.state.cart.goods.length;
    }
  },
  created() {
    //利用数组长度给checked赋值
    this.$store.state.ispd = false;
    var newarr = [];
    this.$store.state.cart.goods.forEach((element, index) => {
      newarr.push("" + ++index + "");
    });
    this.checked = newarr;
    this.checked.length = this.$store.state.cart.goods.length;
  }
};
</script>

<style lang="scss">
.van-checkbox__label {
  position: relative;
  .nums {
    overflow: hidden;
    position: absolute;
    right: 7%;
    top: 67%;
    z-index: 100000;

    span {
      width: 35px;
      text-align: center;
      display: inline-block;
    }
    button {
      width: 30px;
      height: 30px;
      line-height: 20px;
      margin: 0;
      padding: 0;
      border: 1px solid #ccc;
      background-color: white;
    }
  }
}
.van-submit-bar__bar {
  position: relative;
  .dang {
    position: absolute;
    width: 50%;
    height: 50px;
    background-color: white;
    top: 0;
    right: 112px;
  }
  .bjs {
    width: 110px;
    height: 50px;
    text-align: center;
    line-height: 45px;
    border: 1px solid #ccc;
    background-color: #6cf;
    position: absolute;
    right: 0px;
    top: 0;
    z-index: 10000;
    font-size: 18px;
    color: white;
  }
}
.gd {
  width: 100%;
  height: 43px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #6cf;
  .bj {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 14px;
    color: white;
  }
  .text {
    font-size: 24px;
    text-align: center;
    line-height: 43px;
    color: white;
  }
  .getindex {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 200000;
    font-size: 24px;
    opacity: 0.75;
    i {
      margin-top: 3px;
      margin-left: 1px;
      opacity: 1;
    }
  }
}
.cont {
  position: absolute;
  width: 100%;
  top: 43px;
  left: 0;
}
.card-goods {
  padding: 10px 0;
  margin-bottom: 50px;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>
