<template>
  <div>
    <!--头部轮播-->
    <van-swipe :autoplay="5000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipeImages" :key="index">
        <img class="swipe-img" :src="item.img" @click="swipeImageClick(item)"/>
      </van-swipe-item>
    </van-swipe>
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
        ]
      };
    },
    methods: {
      swipeImageClick(item) {

      }
    }
  }
</script>

<style scoped>
  .swipe-img {
    width: 100%;
    height: 42.6vw;
  }
</style>
