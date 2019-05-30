<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" :title="$t('customer_service')" fixed :z-index="10"></van-nav-bar>

    <div class="nav-con-16">
      <!--电话号码-->
      <div class="contact-title">{{phone.name}}</div>
      <van-cell-group>
        <van-cell v-for="(item, i) in phone.list" @click="onPhoneClick(item)" :title="item" size="large" :key="i"
                  is-link>
          <van-icon slot="right-icon" name="phone" class="my-right-icon">
          </van-icon>
        </van-cell>
      </van-cell-group>

      <!--WhatsApp-->
      <div class="contact-title">{{whatsapp.name}}</div>
      <van-cell-group>
        <van-cell v-for="(item, i) in whatsapp.list" v-clipboard="item" @click="copySuccess(item)"
                  :title="item" size="large" :value="$t('copy')" :key="i" is-link>
        </van-cell>
      </van-cell-group>

      <!--Email-->
      <div class="contact-title">{{email.name}}</div>
      <van-cell-group>
        <a :href="'mailto:' + item" v-for="(item, i) in email.list" :key="i">
          <van-cell :title="item" v-clipboard="item" @click="copySuccess(item)" value=""
                    size="large" is-link>
          </van-cell>
        </a>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "phone-contact",
    data() {
      return {
        phone: {
          name: "Hot Line:",
          list: [
            "+8613144827184"
          ]
        },
        whatsapp: {
          name: "WhatsApp",
          list: [
            "+8613144827184",
            "081265645254"
          ]
        },
        email: {
          name: "Email",
          list: [
            "hzy3774@qq.com",
            "hzy3774@gmail.com",
          ]
        },
      };
    },
    methods: {
      onPhoneClick(item) {
        window.location.href = "tel:" + item;
      },
      copySuccess(item) {
        this._showToast(this.$t('copied') + ': ' + item);
      },
    }
  }
</script>

<style scoped>
  .my-right-icon {
    font-size: 20px;
  }

  .contact-title {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    color: #666666;
    padding: 15px;
  }
</style>
