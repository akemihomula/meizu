<template>
    <!-- 为您推荐 -->
    <div class="page-foryou">
      <div class="foryou-top">
        <h3>为您推荐</h3>
      </div>
      <div class="foryou-cont">
        <ul>
          <li>
            <div class="foryou-img">
              <img src="../assets/img/ye02/05.jpg" />
            </div>
            <div class="foryou-info">
              <p class="f-title">魅族 16s</p>
              <p class="f-jg">&yen;2699</p>
            </div>
          </li>

          <li>
            <div class="foryou-img">
              <img src="../assets/img/ye02/02.jpg" />
            </div>
            <div class="foryou-info">
              <p class="f-title">魅族 POP2 真无线蓝牙耳机</p>
              <p class="f-jg">&yen;369</p>
            </div>
          </li>

          <li>
            <div class="foryou-img">
              <img src="../assets/img/ye02/06.jpg" />
            </div>
            <div class="foryou-info">
              <p class="f-title">魅族 16X</p>
              <p class="f-jg">&yen;1096</p>
            </div>
          </li>

          <li>
            <div class="foryou-img">
              <img src="../assets/img/ye02/01.jpg" />
            </div>
            <div class="foryou-info">
              <p class="f-title">魅族 16s</p>
              <p class="f-jg">&yen;2699</p>
            </div>
          </li>

          <li>
            <div class="foryou-img">
              <img src="../assets/img/ye02/06.jpg" />
            </div>
            <div class="foryou-info">
              <p class="f-title">魅族 POP2 真无线蓝牙耳机</p>
              <p class="f-jg">&yen;369</p>
            </div>
          </li>

          <li>
            <div class="foryou-img">
              <img src="../assets/img/ye02/01.jpg" />
            </div>
            <div class="foryou-info">
              <p class="f-title">魅族 16X</p>
              <p class="f-jg">&yen;1096</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 为您推荐end -->
</template>

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
      width: 300%;
      li {
        background-color: white;
        float: left;
        width: 12%;
        margin-right: 10px;
        .foryou-img {
          width: 100%;
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