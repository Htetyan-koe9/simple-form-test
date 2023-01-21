import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

require('./vee-validate');

new Vue({
  render: (h) => h(App),
}).$mount("#app");
