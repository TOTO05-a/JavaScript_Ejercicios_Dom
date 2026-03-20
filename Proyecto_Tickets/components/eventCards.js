class EventCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }


    set data(event) {
        this.render(event);
    }

    render(event) {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: #121212;
                    color: white;
                    padding: 10px;
                    border-radius: 10px;
                    width: 200px;
                    font-family: sans-serif;
                }

                img {
                    width: 100%;
                    border-radius: 10px;
                }

                button {
                    margin-top: 10px;
                    background: #1db954;
                    border: none;
                    padding: 10px;
                    color: white;
                    cursor: pointer;
                    border-radius: 5px;
                    width: 100%;
                }
            </style>

            <div class="card">
                <img src="${event.image}">
                <h3>${event.name}</h3>
                <p>${event.city}</p>
                <p>$${event.price}</p>
                <button id="detail">Ver más</button>
            </div>
        `;

        this.shadowRoot.querySelector("#detail")
            .addEventListener("click", () => {
                window.navigate("/event", event.id);
            });
    }
}

customElements.define("event-card", EventCard);