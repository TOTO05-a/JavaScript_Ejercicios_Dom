const productos =[]
const form = document.getElementById("formProducto")
const tabla = document.getElementById("tablaProductos")

// porque usamos submit Cuando presionas el botón: Se dispara el evento:
form.addEventListener("submit",function(e){
//     ¿Por qué usamos preventDefault()? Porque los formularios normalmente recargan la página
// Eso borraría tus datos.
// Entonces usamos:
    e.preventDefault()

    let codigo = document.getElementById("codigo").value
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value

    const producto = {
        codigo: codigo,
        nombre: nombre,
        precio: precio,
    }
    productos.push(producto)
    renderizarTabla()
})



const boton = document.getElementById("btnAgregar")

document.addEventListener("click", function(e){
    if(e.target.classList.contains("borrar")){
        const index = e.target.dataset.index
        productos.splice(index,1)
        renderizarTabla()
    }
})

// se debe agregar una funcion de renderice la tabla para poder hacer el del boton de editar

function renderizarTabla(){
    tabla.innerHTML = ""
    productos.forEach(function(producto, index){
        tabla.innerHTML += `
        <tr>
        <td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
        <button class = "editar" data-index="${index}">Editar</button>
        <button class = "borrar" data-index="${index}">Borrar</button>
        </td>
        </tr>
        `
    })
}

// const elemento = document.getElementById("titulo");
// elemento.innerHTML = 'Hola!'

// elemento.style.color = "red"; "border: 1px solid red"
// // elemento.style.color = "red"

// const articulos = document.getElementsByClassName('titulo')

// console.log(titulo)


// // for ( let i = 0; i < articulos.length; i++){
// //     articulos[i].innerHTML = Articulo ${i+1};
// // }

// const boton = document.getElementById("boton")
// const texto = document.getElementById("texto")

// boton.addEventListener("click", function(){
//     console.log(textContent = "HICISTE CLICK")
// })

