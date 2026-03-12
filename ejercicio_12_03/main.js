class MiComponente extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = '<strong> Hola Toto </strong>';

    }
    static get observedAttributes(){
        return ['pais','hora'];

    }
    connectedCallback(){
        this.innerHTML += ' <i> This is awesonme </i> ';

    }
    disconnectedCallback(){
        console.log('Componente personalizado eliminado del DOM.');

    }
    attributeChangedCallback(atributeName, oldValue, newValue){
        switch(atributeName){
            case 'pais':
                this.innerHTML += `<p>Bienvenido a ${newValue}</p>`
                this.pais = atributeName
                break;
            case 'hora':
                this.innerHTML += `<p> La hora es: ${newValue} </p>`
                this.hora = newValue 
                break;
        }
    }
}

customElements.define('mi-componente-personal', MiComponente);

const btnEliminar = document.getElementById('btnEliminar');
btnEliminar.addEventListener('click', ()=>{
    const wc = document.querySelector('mi-componente-personal');
    wc.remove();
});

// const wc = document.querySelector('mi-componente-personal');
// console.log(wc.hora);