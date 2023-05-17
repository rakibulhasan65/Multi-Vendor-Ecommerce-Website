import "./bootstrap";
import { createApp } from "vue";

const app = createApp({});
import example from "./components/ExampleComponent.vue";
app.component("example", example);

app.mount("#app");
