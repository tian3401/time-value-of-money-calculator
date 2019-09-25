import Vue from 'vue'
import App from './App.vue'
import MaskedInput from 'vue-masked-input'

export const eventBus = new Vue(); 

new Vue({
  el: '#app',
  render: h => h(App)
})
