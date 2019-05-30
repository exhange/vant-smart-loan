import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainPage from '../view/MainPage';
import TabHome from '../view/main/TabHome';
import TabInfo from '../view/main/TabInfo';
import TabUser from '../view/main/TabUser';

const SettingsPage = r => require.ensure([], () => r(require('../view/mine/SettingsPage')), 'SettingsPage');
const CommonHelp = r => require.ensure([], () => r(require('../view/mine/CommonHelp')), 'CommonHelp');
const PhoneContact = r => require.ensure([], () => r(require('../view/mine/PhoneContact')), 'PhoneContact');
const IFrameWebPage = r => require.ensure([], () => r(require('../view/common/IFrameWebPage')), 'IFrameWebPage');

const routes = [
  {path: '*', redirect: '/main'},
  {
    name: 'main', redirect: '/main/home', component: MainPage,
    children: [
      {name: 'home', path: 'home', component: TabHome, meta: {keepAlive: true}},
      {name: 'info', path: 'info', component: TabInfo, meta: {keepAlive: true}},
      {name: 'user', path: 'user', component: TabUser, meta: {keepAlive: true}},
    ], meta: {keepAlive: true}
  },
  {name: 'SettingsPage', component: SettingsPage},
  {name: 'CommonHelp', component: CommonHelp},
  {name: 'PhoneContact', component: PhoneContact},
  {name: 'IFrameWebPage', component: IFrameWebPage},
];

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new VueRouter({routes});

// 生命周期之前
router.beforeEach((to, from, next) => {
  next();
});

//生命周期之后
router.afterEach((to, from) => {

});

export default router;
