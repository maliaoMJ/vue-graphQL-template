import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloClient from './apolloClient'
import './registerServiceWorker'
import VueApollo from 'vue-apollo';

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
Vue.use(VueApollo);
new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
