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
            <li>
              <div class="page-pj-pho">
                <img src="../assets/img/ye02/01.jpg" />
              </div>
              <div class="into">
                <p class="title">魅族 HD60 头戴式蓝牙耳机</p>
                <p class="name">40mm生物振膜 | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质</p>
                <p class="yan">&yen;499</p>
              </div>
            </li>

            <li>
              <div class="page-pj-pho">
                <img src="../assets/img/ye02/02.jpg" />
              </div>
              <div class="into">
                <p class="title">MEIZU UR 高端定制耳机 预约</p>
                <p class="name">【预约专用】私人定制，为你而声</p>
                <p class="yan">&yen;200</p>
              </div>
            </li>

            <li>
              <div class="page-pj-pho">
                <img src="../assets/img/ye02/01.jpg" />
              </div>
              <div class="into">
                <p class="title">魅族 HD60 头戴式蓝牙耳机</p>
                <p class="name">40mm生物振膜 | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质</p>
                <p class="yan">&yen;499</p>
              </div>
            </li>

            <li>
              <div class="page-pj-pho">
                <img src="../assets/img/ye02/02.jpg" />
              </div>
              <div class="into">
                <p class="title">MEIZU UR 高端定制耳机 预约</p>
                <p class="name">【预约专用】私人定制，为你而声</p>
                <p class="yan">&yen;200</p>
              </div>
            </li>

            <li>
              <div class="page-pj-pho">
                <img src="../assets/img/ye02/05.jpg" />
              </div>
              <div class="into">
                <p class="title">魅族 POP2 真无线蓝牙耳机</p>
                <p class="name">【限时3期免息】蓝牙5.0 超长续航</p>
                <p class="yan th">
                  <span>限时特惠</span>&yen;200
                </p>
              </div>
            </li>

            <li>
              <div class="page-pj-pho">
                <img src="../assets/img/ye02/06.jpg" />
              </div>
              <div class="into">
                <p class="title">魅族 EP2C 耳机</p>
                <p class="name">钕铁硼单元 Type-C接口</p>
                <p class="yan th">
                  <span>限时特惠</span>&yen;200
                </p>
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
//第四个分页 配件分页
.page-pj{
  width: 100%;
  img{
    width: 100%;
    display: block;
  }
}
.page-pj-cont{
  width: 100%;
  overflow: hidden;
  background-color: #ccc;
  ul{
    width: 100%;
    overflow: hidden;
    li:nth-child(2n){
      margin: 0 0 4px 2px;
    }
    li{
      background-color: white;
      width:calc(50% - 2px);
      float: left;
      margin: 0 2px 4px 0;
      .page-pj-pho{
        width: 100%;
        img{
          width: 80%;
          display: block;
          margin:auto;
        }
      }
      .into{
        p{
          text-align: center;
        }
        .title{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 13px;
          padding: 0 5px;
          box-sizing: border-box;
        }
        .name{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 5px 10px;
          box-sizing: border-box;
          font-size: 12px;
          color: #999999;
        }
        .yan{
          position: relative;
          color: #e4393c;
          span{
            position: absolute;
            font-size: 10px;
            left: 40px;
            top: 5px;
          }
        }
        .th{
          padding-left: 50px;
          box-sizing: border-box;
        }
      }
    }
  }
}

</style>