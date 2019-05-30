<template>
  <div>
    <div class="top-static">
      <!--头部轮播-->
      <van-swipe :autoplay="5000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swipeImages" :key="index">
          <img class="swipe-img" :src="item.img" @click="swipeImageClick(item)"/>
        </van-swipe-item>
      </van-swipe>
      <!--通告栏-->
      <van-notice-bar
        text="热烈庆祝Vant推出2.0版本，Vant在Github上的Star用户已超过8000！"
        left-icon="volume-o">
      </van-notice-bar>
    </div>
    <!--产品区域-->
    <div class="prod-box">
      <div class="prod-card shadow-box" v-for="(it, idx) in productList" :key="idx">
        <div>{{it.name}}</div>
        <div class="align-center">
          <div>最大额度</div>
          <div><span class="red-txt">{{it.max}}</span>元</div>
          <div>利息低至</div>
          <div>{{it.rate}}% 每天</div>
          <van-button type="info" round class="apply-btn">马上申请</van-button>
        </div>
      </div>
    </div>
    <!--遇到问题-->
    <div class="align-center">
      <div class="underline help-btn" @click="_routePush('CommonHelp')">客户服务</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-home",
    data() {
      return {
        swipeImages: [
          {img: 'static/img/banner1.png', link: ''},
          {img: 'static/img/banner2.png', link: ''},
        ],
        productList: [
          {name: '现金贷', max: '100000', rate: '0.02'},
          {name: '房抵代', max: '300000', rate: '0.01'},
          {name: '车底代', max: '200000', rate: '0.012'},
        ]
      };
    },
    methods: {
      swipeImageClick(item) {

      }
    }
  }
</script>

<style scoped lang="scss">
  .help-btn {
    color: #008B8B;
    margin-bottom: 20px;
  }

  .top-static {
    position: fixed;
    width: 100%;
    z-index: 10;
    .swipe-img {
      width: 100%;
      height: 42.6vw;
      vertical-align: bottom;
    }
  }

  .prod-box {
    padding: calc(42.6vw + 40px) 0 10px 0;
    .prod-card {
      background-color: white;
      border-radius: 8px;
      padding: 12px;
      margin: 10px;
      .apply-btn {
        margin-top: 12px;
        width: 75%;
      }
    }
  }
</style>
