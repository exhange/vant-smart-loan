<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" :title="$t('customer_service')" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con-16">
      <van-cell-group>
        <van-cell :title="$t('online_service')" is-link @click="onLineCS" icon="chat-o" size="large"></van-cell>
        <van-cell :title="$t('phone_service')" is-link @click="onPhoneCS" icon="phone-o" size="large"></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "common-help",
    data() {
      return {
        onlineHelpUrl: 'http://wpa.qq.com/msgrd?v=3&uin=377406997&site=qq&menu=yes',
      }
    },
    methods: {
      onBackClick() {
        this.$router.back();
      },
      onLineCS() {
        this._routePush('IFrameWebPage', {url: this.onlineHelpUrl, title: this.$t('online_service')})
      },
      onPhoneCS() {
        this._routePush('PhoneContact');
      }
    }
  }
</script>

<style scoped>
</style>
