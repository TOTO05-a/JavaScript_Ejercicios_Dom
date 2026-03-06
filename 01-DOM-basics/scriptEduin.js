const boton = document.getElementById("btnAgregar")
const tabla = document.getElementById("tablaProductos")
boton.addEventListener("click", function(){
    alert("se hizo click en agregar")


let codigo = prompt("Ingrese el codigo")
let nombre = prompt("Ingrese el nombre")
let precio = prompt("Ingrese el precio")

tabla.innerHTML += `
<tr>
    <td>${codigo}</td>
    <td>${nombre}</td>
    <td>${precio}</td>
    <td>
        <button>Editar</button>
        <button class="btnBorrar">Borrar</button>

    </td>
</tr>
    `
}) 

document.addEventListener("click", function(e){
    if(e.target.classList.contains("btnBorrar")){
        e.target.parentElement.parentElement.remove()
    }
})
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

