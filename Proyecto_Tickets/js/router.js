import { Home, loadEvents } from "../views/home.js";
import { EventDetail } from "../views/eventDetail.js";
import { Cart } from "../views/cart.js";

export const router = (route, param = null) => {
    const app = document.getElementById("app");

    switch(route) {
        case "/":
            app.innerHTML = Home();
            loadEvents();
            break;

        case "/event":
            app.innerHTML = EventDetail(param);
            break;

        case "/cart":
            app.innerHTML = Cart();
            break;

        default:
            app.innerHTML = "<h1>404</h1>";
    }
};