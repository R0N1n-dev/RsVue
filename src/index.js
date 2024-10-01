import "./index.css";
import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import { Inkline, components } from "@inkline/inkline";
import "./css/variables/index.scss";
import "@inkline/inkline/css/index.scss";
import "@inkline/inkline/css/utilities.scss";
import { createHead } from "@unhead/vue";
const head = createHead();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
createApp(App)
  .use(router)
  .use(pinia)
  .use(head)
  .use(Inkline, { components })
  .mount("#root");
