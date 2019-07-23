import Vue from "vue";
import App from "./App.vue";
import { VueMasonryPlugin } from "vue-masonry";
import axios from "axios";

Vue.use(VueMasonryPlugin);
Vue.config.productionTip = false;

new Vue({
  axios,
  render: h => h(App)
}).$mount("#app");
