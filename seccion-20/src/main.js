import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
// hoja de estilos de vuesax
import 'vuesax/dist/vuesax.css'
 // hoja de estilos de bootsrap
import 'bootstrap/dist/js/bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
// importamos las funciones de firebase
import {getAuth,onAuthStateChanged } from 'firebase/auth'
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const userdetect = {
      email: user.email,
      uid: user.uid

    }
    store.dispatch('detectarUser',userdetect)
  } else {
    console.log(user)
    // ...
    store.dispatch('detectarUser',user)
  }
Vue.config.productionTip = false
Vue.use(Vuesax, {
  // options here
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
});
