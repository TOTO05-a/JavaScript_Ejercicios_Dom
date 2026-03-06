const mensaje = document.getElementById('mensaje');

const contenedor = document.querySelector('#contenedor');

// mensaje.innerText = `Nombre del nodo: ${contenedor.nodeName}`;

// mensaje.textContent = `Contenido de texto elemento ${contenedor.textContent}`;

// mensaje.textContent = `Contenido de texto del elemento ${content.outerText}`;

// mensaje.innerText = `Contenido HTML del elemento ${contenedor.innerHTML}`;

// contenedor.innerHTML = `<strong> Hola TOTO</strong>`;
// const items = document.querySelectorAll('#contenedor > div.item')
// for(let i =0; i< items.length; i++){
//     items[i].classList.add('item-background', 'item-font-color')
// }

// mensaje.innerText = `¿Existe la clase container en el item1?: ${item1.classList.contains('contain') ? 'si' : 'no' }`;
// // internario
btnExito = document.getElementById('btnExito');
btnError = document.getElementById('btnError');


item1.classList.add('item-background', 'item-font-color');
item1.classList.remove('borde', 'item-background')


btnExito.addEventListener('click', (event)=>{
    item1.classList.remove('error');
    item1.classList.add('exito');
})

btnError.addEventListener('click', (event)=>{
    item1.classList.add('error');
    item1.classList.remove('exito');
})

