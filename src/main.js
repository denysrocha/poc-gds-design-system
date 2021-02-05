import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './assets/scss/main.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

function importMobileSass() {
  if (screen.width <= 591.98) {
    require('./assets/scss/mobile.scss')
  }
}

importMobileSass()

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
