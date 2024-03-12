import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import { Inkline, components } from "@inkline/inkline";
import "./css/variables/index.scss";
import "@inkline/inkline/css/index.scss";
import "@inkline/inkline/css/utilities.scss";

createApp(App)
  .use(router)
  .use(pinia)
  .use(Inkline, { components })
  .mount("#root");
