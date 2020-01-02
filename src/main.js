import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import Vuikit from 'vuikit'
// import VuikitIcons from '@vuikit/icons'
import SuiVue from 'semantic-ui-vue';

import 'semantic-ui-css/semantic.min.css';



Vue.use(SuiVue);

// import '@vuikit/theme'

// Vue.use(Vuikit)
// Vue.use(VuikitIcons)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

