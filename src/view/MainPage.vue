<template>
  <div>
    <!--缓存的页面-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="main-router-view" v-keep-scroll-position>
      </router-view>
    </keep-alive>
    <!--不缓存的页面-->
    <router-view v-if="!$route.meta.keepAlive" class="main-router-view">
    </router-view>
    <!--下方的TabBar-->
    <van-tabbar v-model="tabBarSelect">
      <!--TabBar项目-->
      <van-tabbar-item v-for="(item, i) in tabItemList" :key="i" :to="item.to" :icon="item.icon" replace>
        <div>{{$t(item.name)}}</div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import 'vant/lib/tabbar-item/index.less'

  export default {
    name: "main-page",
    watch: {
      '$route'() {
        this.checkTabSelection();
      }
    },
    data() {
      return {
        tabBarSelect: 0,
        // Tab栏数据
        tabItemList: [
          {
            icon: 'point-gift',
            name: 'tab_home',
            to: "home"
          },
          {
            icon: 'star',
            name: 'tab_info',
            to: "info",
          },
          {
            icon: 'manager',
            name: 'tab_user',
            to: "user"
          },
        ],
      };
    },
    methods: {
      // 看一下tab栏应给高亮哪一个
      checkTabSelection() {
        for (let i = 0; i < this.tabItemList.length; i++) {
          let p = this.tabItemList[i];
          if (this.$route.path.endsWith(p.to)) {
            this.tabBarSelect = i;
          }
        }
      }
    },
    mounted() {
      this.checkTabSelection();
    }
  }
</script>

<style scoped>
  .main-router-view {
    height: calc(100vh - 50px);
    overflow-y: auto;
    box-sizing: border-box;
    background-color: #f8f8f8;
  }
</style>
