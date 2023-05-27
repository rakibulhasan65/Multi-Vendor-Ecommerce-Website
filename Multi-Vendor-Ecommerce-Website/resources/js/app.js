import "./bootstrap";
import { createApp } from "vue";
import router from "./index";

const app = createApp({}).use(router).mount("#app");;
import example from "./components/ExampleComponent.vue";
import VueAdvance from "./components/VueAdvance.vue";
import ApiTesting from "./components/ApiTesting.vue";
import Home from "./components/views/Home.vue";
app.component("example", example);
app.component("VueAdvance", VueAdvance);
app.component("ApiTesting", ApiTesting);
app.component("Home", Home);

// app.mount("#app");
// app.use(router);
