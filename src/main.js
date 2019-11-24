import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import router from './router'



Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')