import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vueResource from 'vue-resource'

const fb = require("./firebaseConfig")

Vue.use(vueResource)

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')    
  }
})