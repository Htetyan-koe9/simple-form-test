import Vue from "vue";
import App from "./App.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faUserSecret, faBars, faFacebook, faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

require('./vee-validate');

new Vue({
  render: (h) => h(App),
}).$mount("#app");
