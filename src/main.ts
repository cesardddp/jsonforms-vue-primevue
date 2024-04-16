
import  App from "./App.vue";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Wind from "./presets/wind/index";





const app = createApp(App);
app.use(PrimeVue, { unstyled: false, pt: Wind });
app.mount("#app")
