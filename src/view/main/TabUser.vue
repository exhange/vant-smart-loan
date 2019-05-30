<template>
  <div>
    <van-nav-bar :title="$t('tab_user')" fixed :z-index="10"></van-nav-bar>
    <div class="nav-con-16">
      <van-cell-group>
        <van-cell icon="setting-o" :title="$t('settings')" size="large" is-link to="/SettingsPage"></van-cell>
        <van-cell icon="service-o" :title="$t('customer_service')" size="large" is-link to="/CommonHelp"></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-user"
  }
</script>

<style scoped>

</style>
