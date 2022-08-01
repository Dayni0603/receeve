import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import "./index.css";

//Axios integration
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = `http://localhost:9001/`;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
