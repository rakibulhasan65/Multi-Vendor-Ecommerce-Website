import "./bootstrap";
import { createApp } from "vue";

const app = createApp({});
import example from "./components/ExampleComponent.vue";
import VueAdvance from "./components/VueAdvance.vue";
import ApiTesting from "./components/ApiTesting.vue";
app.component("example", example);
app.component("VueAdvance", VueAdvance);
app.component("ApiTesting", ApiTesting);

app.mount("#app");
