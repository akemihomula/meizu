<template>
  <div class="mydz">
    <div class="getdz" v-show="tjdz">
      <van-nav-bar title="添加收货地址" left-arrow @click-left="close" />
      <div class="get">
        <div>
          <span>姓名：</span>
          <input type="text" v-model="name" />
        </div>
        <div>
          <span>手机号：</span>
          <input type="text" v-model="sj" />
        </div>
        <div>
          <span>详细地址：</span>
          <input type="text" v-model="dz" />
        </div>
        <van-button class="addss" type="primary" size="large" @click="adds">确认添加</van-button>
      </div>
    </div>
    <van-nav-bar title="地址" left-arrow @click-left="onClickLeft" />
    <div class="dz">
      <div class="adddz" @click="getis">添加收货人信息</div>
      <div class="isdz">
        <ul>
          <li v-for="(item,i) in $store.state.mydz.arrs" :key="i">
            <div class="top">
              <div class="ns">
                <div class="name">
                  <span class="left">姓名：</span>
                  {{item.name}}
                </div>
                <div class="sj">
                  <span class="left">手机：</span>
                  {{item.sj}}
                </div>
              </div>
              <div class="xxdz">
                <span class="left">地址：</span>
                {{item.dz}}
              </div>
            </div>
            <div class="conts">
              <div class="mr" @click="mordz(i)">
                <input type="radio" name="dz" :checked="item.checked" />
                <span>选为默认地址</span>
              </div>
              <div class="cz" @click="deldz(i)">
                <span>删除</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      name: "",
      sj: "",
      dz: "",
      tjdz: false,
      cks: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
    getis() {
      this.tjdz = true;
    },
    //关闭/返回
    close() {
      this.tjdz = false;
    },
    //添加地址
    adds() {
      var obj = { name: this.name, sj: this.sj, dz: this.dz, checked: false };
      this.$store.state.mydz.arrs.push(obj);
      //收尾逻辑
      this.name = this.sj = this.dz = "";
      this.close();
      Toast("添加成功");
    },
    //删除地址
    deldz(i) {
      this.$store.state.mydz.arrs.splice(i, 1);
      Toast("删除成功");
    },
    //给本地添加默认地址
    mordz(i) {
      Toast("已选为默认地址");
      // this.$store.state.mydz.arrs[i].checked = true;
      // 循环数组，将选中的数组中checked的值变为true 其他变为false
      this.$store.state.mydz.arrs.forEach((item, index) => {
        if (index == i) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    }
  },
  created() {
    this.$store.state.mydz.arrs.forEach(item => {
      if (item.checked) {
        this.$store.state.mydz.jsdz = item;
      }
    });
    // window.console.log(this.$store.state.mydz.jsdz)
  }
};
</script>

<style lang="scss" scoped>
.getdz {
  width: 100%;
  height: 2000px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  z-index: 100000;
  .get {
    width: 100%;
    overflow: hidden;
    div {
      margin: 10px 20px;
      margin: auto;
      width: calc(100% - 40px);
      height: 40px;
      position: relative;
      border-bottom: 1px solid #ccc;
      span {
        position: absolute;
        bottom: 5px;
      }
      input {
        width: 70%;
        height: 20px;
        border: 0;
        position: absolute;
        bottom: 5px;
        right: 30px;
      }
    }
    .addss {
      margin: 20px 15px 0 15px;
      width: calc(100% - 30px);
      height: 40px;
      line-height: 40px;
      background-color: #6cf;
    }
  }
}
.mydz {
  margin: -43px 0 -55px 0;
}
.dz {
  width: calc(100% - 30px);
  margin: 15px;
  overflow: hidden;
  .adddz {
    width: 100%;
    padding: 5px 30px;
    height: 30px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
  }
}
.isdz {
  width: 100%;
  overflow: hidden;
  ul {
    width: 100%;
    overflow: hidden;
    li {
      margin-top: 15px;
      width: 100%;
      overflow: hidden;
      border: 1px solid #ccc;
      padding: 10px;
      box-sizing: border-box;
      .top {
        width: 100%;
        border-bottom: 1px solid #ccc;
        .ns {
          display: flex;
          margin-bottom: 10px;
          div {
            flex: 1;
          }
        }
        .xxdz {
          margin-bottom: 10px;
        }
      }
      .conts {
        margin-top: 10px;
        width: 100%;
        display: flex;
        .mr {
          flex: 8;
          input {
            margin: 0;
          }
          span {
            margin-left: 8px;
          }
        }
        .cz {
          flex: 2;
          text-align: center;
        }
      }
    }
  }
}
</style>