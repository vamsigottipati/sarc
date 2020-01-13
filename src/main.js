import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import * as firebase from "firebase"
import vueResource from 'vue-resource'
Vue.use(vueResource)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDvStLDFViYSqC8r7TuogcS8lTC18HCLOI",
  authDomain: "sarc-bphc.firebaseapp.com",
  databaseURL: "https://sarc-bphc.firebaseio.com",
  projectId: "sarc-bphc",
  storageBucket: "sarc-bphc.appspot.com",
  messagingSenderId: "851537766528",
  appId: "1:851537766528:web:5d10d3ee2e691772ec1e65",
  measurementId: "G-TDYK56C5SV"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
