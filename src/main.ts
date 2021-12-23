import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import dotenv from "dotenv";
import "@/assets/css/tailwind.css";

dotenv.config();

import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app")
