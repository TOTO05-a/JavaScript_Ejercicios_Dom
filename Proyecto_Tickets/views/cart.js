import { getCart, clearCart } from "../storage/carts.js";

export const Cart = () => {
    const cart = getCart();

    let total = 0;

    const items = cart.map(item => {
        total += item.price;
        return `<p>${item.name} - $${item.price}</p>`;
    }).join("");

    setTimeout(() => {
        document.getElementById("buy")
            .addEventListener("click", () => {
                alert("Compra realizada");
                clearCart();
                navigate("/");
            });
    }, 0);

    return `
        <h1>Carrito</h1>

        ${items || "<p>Vacío</p>"}

        <h2>Total: $${total}</h2>

        <button onclick="navigate('/')">Volver</button>
        <button id="buy">Comprar</button>
    `;
};