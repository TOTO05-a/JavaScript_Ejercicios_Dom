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



function nuevoItem(id){
        // esta funcion creara un nuevo elemento llamado div que se encontrara en memoria como existe un documento html este elementop se trabajara con ello , al elemnto se le agregaon clases y un id a ese elemento 
    const div =document.createElement('div');
    div.textContent=`Item ${id} en el contenedor`;
    div.classList.add('item','borde','fuente');
    div.setAttribute('id',`item ${id}`);
    div.id=`item${id}`
    return div;
}


// btnExito = document.getElementById('btnExito');
// btnError = document.getElementById('btnError');


// item1.classList.add('item-background', 'item-font-color');
// item1.classList.remove('borde', 'item-background')


// btnExito.addEventListener('click', (event)=>{
//     item1.classList.remove('error');
//     item1.classList.add('exito');
// })

// btnError.addEventListener('click', (event)=>{
//     item1.classList.add('error');
//     item1.classList.remove('exito');
// })


document.getElementById('btnAgregarAntes').addEventListener('click',()=>{
    contenedor.prepend(nuevoItem(++contador));

});

document.getElementById('btnAgregarDespues').addEventListener('click',()=>{
    ++contador;
    newElement = nuevoItem(++contador);
    contenedor.append(newElement);
});

document.getElementById('btnAgregarDespues').addEventListener('click',()=>{
    contenedor.replaceChildren(nuevoItem(++contador))
});


function nuevoItem(id){
    // esta funcion creara un nuevo elemento llamado div que se encontrara en memoria como existe un documento html este elementop se trabajara con ello , al elemnto se le agregaon clases y un id a ese elemento 
    const div =document.createElement('div');
    div.textContent=`Item ${id} en el contenedor`;
    div.classList.add('item','borde','fuente');
    div.setAttribute('id',`item ${id}`);
    div.id=`item${id}`
    return div;
}

let contador=3;
document.getElementById('btnAgregar').addEventListener('click',()=>{
    contador++;
    contenedor.appendChild(nuevoItem(contador));
})

// Eleminar elemento
// const elementId=prompt("Digite el ID del elemento a eliminar");
// const elemtToRemove=document.querySelector(`#item${elementId}`);
// console.log(elemtToRemove)
// mensaje.innerText=contenedor.removeChild(elemtToRemove);
// function nuevoItem(id){
//     const div=document.createElement('div');
//     div.textContent=`Item${id} en el contenedor`;
//     div.classList.add('item','borde','fuente');
//     div.setAttribute('id',`Item${id}`);
//     return div;
// }


// Agrega elementos pero fuera de la lista de tareas
// document.getElementById('btnAgregarAntes').addEventListener('click',()=>{
//     contenedor.before(nuevoItem(++contador));
// })
// document.getElementById('btnAgregarDespues').addEventListener('click',()=>{
//     contenedor.after(nuevoItem(++contador));
// })
// const newElement=nuevoItem(4);

//Agregar elementos dentro de la lista
document.getElementById('btnAgregarAntes').addEventListener('click',()=>{
    contenedor.prepend(nuevoItem(++contador));
})
document.getElementById('btnAgregarDespues').addEventListener('click',()=>{
    contenedor.append(nuevoItem(++contador));
})
const newElement=nuevoItem(4);

//Remplazar hijos
document.getElementById('btnReemplazarHijos').addEventListener('click',()=>{ 
    const newElement1 = nuevoItem(++contador);
    const newElement2 = nuevoItem(++contador);
    const newElement3 = nuevoItem(++contador);
    const newElement4 = nuevoItem(++contador);
    contenedor.replaceChildren(newElement1,newElement2,newElement3,newElement4);
})
//Remplazar elemento
document.getElementById('btnReemplazarElemento').addEventListener('click',()=>{
    const elementId =Number(prompt('Id del elemento a reemplazar'));
    const elemtToReplace=document.getElementById(`item${elementId}`);
    elemtToReplace.replaceWith(nuevoItem(++contador));
})
