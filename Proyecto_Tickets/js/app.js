import { router } from "./router.js";
import { initEvents } from "../storage/events.js";

window.addEventListener("DOMContentLoaded", () => {
    initEvents();
    router("/");
});

window.navigate = (route, param) => {
    router(route, param);
};