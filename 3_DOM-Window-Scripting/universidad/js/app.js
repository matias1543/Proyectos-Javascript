// Eliminar de Local Storage
// localStorage.clear();

// Trabajando con el DOM - primeros pasos

// let elemento;

// elemento = document.all;
// elemento = document.all[10];
// elemento = document.head;
// elemento = document.body;
// elemento = document.domain;
// elemento = document.URL;
// elemento = document.forms;
// elemento = document.forms[0].id;
// elemento = document.forms[0].className;
// elemento = document.forms[0].classList;
// elemento = document.forms[0].classList[0];
// elemento = document.images;
// elemento = document.images[2];
// elemento = document.images[2].getAttribute('src');

// elemento = document.scripts;

// let images = document.images;
// let imagesArr = Array.from(images);

// imagesArr.forEach((image) => {
//     console.log(image);
// })

// console.log(imagesArr);

// -----------------------------------------------------------------------------

// Trabajando con el DOM - Seleccionando elementos y aplicandole propiedades
// let elemento = document.getElementById('hero');
// let elemento = document.getElementById('hero').id;
// elemento = elemento.id;
// let elemento = document.getElementById('header').className;
// let elemento = document.getElementById('encabezado').textContent;
// let elemento = document.getElementById('encabezado').innerText;
// let encabezado = document.getElementById('encabezado');
// encabezado.style.background = '#333';
// encabezado.style.color = '#fff';
// encabezado.style.padding = '20px';
// encabezado.textContent = 'Los mejores cursos';

// console.log(elemento);

// -------------------------------------------------------------------------------

// Trabajando con el DOM - Seleccionando un elemento
// Query Selector
// const encabezado = document.querySelector('#encabezado');
// encabezado.style.background = '#333';
// encabezado.style.color = '#fff';
// encabezado.style.padding = '20px';
// encabezado.textContent = 'Los mejores cursos';
// let enlace;
// enlace = document.querySelector("#principal a:first-child");
// enlace = document.querySelector("#principal a:last-child");
// enlace = document.querySelector("#principal a:nth-child(3)");

// console.log(enlace);

// -------------------------------------------------------------------------------

//Trabajando con el DOM - Seleccionando multiples elementos
// Selecciona todas las clases .enlace
// let enlaces = document.getElementsByClassName('enlace');
// let enlaces = document.getElementsByClassName('enlace')[3];

// Selecciona el primer elemento que tenga la clase .enlace
// const enlaces = document.querySelector('.enlace');

// enlaces = enlaces[3];
// enlaces.style.background = '#333';
// enlaces.textContent = 'Nuevo enlace';
// console.log(enlaces);

// const listEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
// console.log(listEnlaces)

// const links = document.getElementsByTagName('a');
// links[18].style.color = 'red';
// links[18].textContent = 'Nuevo enlace';

// let enlaces = Array.from(links);

// enlaces.forEach((enlace) => {
//     console.log(enlace.textContent);
// })

// console.log(enlaces);

// const enlaces = document.querySelectorAll('#principal .enlace');
// enlaces[1].style.background = 'red';
// enlaces[1].textContent = 'Nuevo enlace';
// console.log(enlaces);

// Con (odd) seleccionamos todos los que sean impares
// const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');

// enlaces.forEach((enlace) => {
//     enlace.style.background = 'red';
//     enlace.style.color = 'white';
// });

// console.log(enlaces)

// --------------------------------------------------------------------------------------

// Trabajando con el DOM - Traversing

//  const navegacion = document.querySelector('#principal');
//  navegacion.children[0].textContent = 'Nuevo Enlace';
//  console.log(navegacion.children);
// const barra = document.querySelector('.barra');
// console.log(barra.children[0].children[0].children);


 // Nodos tipos:
// 1 = Elementos
// 2 = Atributos
// 3 = Text Node
// 8 = Comentarios
// 9 = Documentos
// 10 = Doctype

// const cursos = document.querySelectorAll('.card');

// console.log(cursos[0]);
// console.log(cursos[0].firstChild);
// console.log(cursos[0].lastChild);
// console.log(cursos[0].firstElementChild);
// console.log(cursos[0].lastElementChild);
// console.log(cursos[0].childElementCount);


// const enlaces = document.querySelectorAll('.enlace');

// console.log(enlaces[0].parentElement.parentElement.parentElement);

// console.log(enlaces[0].nextElementSibling.nextElementSibling.nextElementSibling);

// --------------------------------------------------------------------------------------

// Trabajando con el DOM - Creando elementos

// const enlace = document.createElement('a');

// // Agregando una clase
// enlace.className = 'enlace';
// // añadir id
// enlace.id = 'nuevo-id';
// // atributo de href
// enlace.setAttribute('href', '#');
// //añadir texto
// enlace.textContent = 'Nuevo Enlace';
// // enlace.appendChild(document.createTextNode('Nuevo Enlace'));
// //Agregarlo al HTML
// document.querySelector('#secundaria').appendChild(enlace);

// console.log(enlace);

// ---------------------------------------------------------------------------------------

// Trabajar con el DOM - Reemplazar elementos
// const nuevoEncabezado = document.createElement('h2');

// // agregar un id
// nuevoEncabezado.id = 'encabezado';
// //agregar nuevo texto
// nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));
// // Elemento anterior (sera reemplazado);
// const anterior = document.querySelector('#encabezado');
// const elPadre = document.querySelector('#lista-cursos');
// // Reemplazar
// elPadre.replaceChild(nuevoEncabezado, anterior);

// console.log(nuevoEncabezado);

// -------------------------------------------------------------------------------------

// Trabajar con el DOM - Agregando y quitando clases y otros atributos
// const enlaces = document.querySelectorAll('.enlace');
// const navegacion = document.querySelector('#principal');

// enlaces[0].remove();
// navegacion.removeChild(enlaces[0]);

// const primerLi = document.querySelector('.enlace');

// let elemento;

// // obtener una clase de CSS
// elemento = primerLi.className;
// elemento = primerLi.classList.add('nueva-clase');
// elemento = primerLi.classList.remove('nueva-clase');
// elemento = primerLi.classList;

// // Leer atributos
// elemento = primerLi.getAttribute('href');
// primerLi.setAttribute('href', 'http://facebook.com');
// primerLi.setAttribute('data-id', 20);
// elemento = primerLi.hasAttribute('data-id');


// console.log(elemento);

// --------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------- 
// Event Listener
// Event Listener  - Click

// document.querySelector('#submit-buscador').addEventListener('click', (e) => {
//     e.preventDefault();
//     alert('Buscando Cursos');
// });

// document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton)

// function ejecutarBoton(e) {
//     e.preventDefault(); // Previene la función por defecto al hacer 'Click'
//     let elemento;
//     elemento = e.target; // Elemento al que le di 'Click'
//     elemento = e.target.id;
//     elemento = e.target.className;
//     elemento = e.target.innerText;

//     console.log(elemento);
// }

// document.querySelector('#encabezado').addEventListener('click', (e) => {
//     e.target.innerText = 2 + 2;
// })

// ------------------------------------------------------------------------------------------

// Event Listener - Otros eventos con el mouse
//  Variables
// const encabezado = document.querySelector('#encabezado');
// const enlaces = document.querySelectorAll('.enlace');
// const boton = document.querySelector('#vaciar-carrito');

// Click
// boton.addEventListener('click', obtenerEvento);
// Doble click
// boton.addEventListener('dbclick', obtenerEvento);
// Mouse enter
// boton.addEventListener('mouseenter', obtenerEvento);
// Mouse leave
// boton.addEventListener('mouseleave', obtenerEvento);
// Mouse over
// boton.addEventListener('mouseover', obtenerEvento);
// Mouse out
// boton.addEventListener('mouseout', obtenerEvento);
// Mouse down
// boton.addEventListener('mousedown', obtenerEvento);
// Mouse up
// boton.addEventListener('mouseup', obtenerEvento);
// Mouse move
// encabezado.addEventListener('mousemove', obtenerEvento);

// function obtenerEvento(e) {
//     console.log(`EVENTO: ${e.type}`); // Nos mostrara el tipo de evento
// }

// ---------------------------------------------------------------------------------------------
// Event Listener - Inputs
// const busqueda = document.querySelector('#buscador');

// Presionar tecla
// busqueda.addEventListener('keydown', obtenerEvento);
// Soltar tecla
// busqueda.addEventListener('keyup', obtenerEvento);
// Cada vez que escribis una tecla
// busqueda.addEventListener('keypress', obtenerEvento);
// Cuando entras a un input
// busqueda.addEventListener('focus', obtenerEvento);
// Cuando salis de un input (mas utilizado para validación)
// busqueda.addEventListener('blur', obtenerEvento);
// Cortar
// busqueda.addEventListener('cut', obtenerEvento);
// Copiar
// busqueda.addEventListener('copy', obtenerEvento);
// Pegar
// busqueda.addEventListener('paste', obtenerEvento);
// Todo los eventos en uno
// busqueda.addEventListener('input', obtenerEvento);
// Funciona en Select, evento pendiente de cambios
// busqueda.addEventListener('change', obtenerEvento);

// function obtenerEvento(e) {
//     document.querySelector('#encabezado').innerText = busqueda.value;
//     console.log(busqueda.value);
//     console.log(`EVENTO: ${e.type}`); // Nos mostrara el tipo de evento
// }

// ----------------------------------------------------------------------------------------------
// Event Listener - Bubbling
// El evento comienza en el elemento más específico y se eleva hasta llegar al document.
// Este tipo de evento tiene gran soporte en los navegadores.
// Example: <a> --> <li> --> <ul> --> <div> --> <body> --> <html> --> <document> 

// const card = document.querySelector('.card');
// const infoCurso = document.querySelector('.info-card');
// const agregarCarrito = document.querySelector('.agregar-carrito');

// card.addEventListener('click', (e) => {
//     console.log('Click en card');
//     e.stopPropagation(); // Evita el event bubbling
// });

// infoCurso.addEventListener('click', (e) => {
//     console.log('Click en curso');
//     e.stopPropagation();
// });

// agregarCarrito.addEventListener('click', () => {
//     console.log('Click en carrito');
// });

// ----------------------------------------------------------------------------------------------
// Event Listener - Capturing
// El evento inicia en el document y fluye hacia abajo al elemento más específico.
// Este evento no es soportado por internet explorer 8 y navegadores mas viejos.
// Example: <a> <-- <li> <-- <ul> <-- <div> <-- <body> <-- <html> <-- <document>

// ----------------------------------------------------------------------------------------------
// Event Listener - Delegation
// Delegation nos resuelve el problema cuando un elemento se agrega al DOM despues de la carga inicial.
// La idea general detrás de la delegación de eventos es que, en lugar de escuchar un cambio en las entradas
// directamente, deberíamos buscar un elemento HTML que estará en la página cuando la página se cargue inicialmente.

// document.body.addEventListener('click', eliminarElemento);

// function eliminarElemento(e) {
//     e.preventDefault();
//     if(e.target.classList.contains('borrar-curso')) {
//         console.log(e.target.parentElement.parentElement.remove());
//     }
// }

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// Local Storage - Agregando, Leyendo, Borrando y Limpiando el LocalStorage

// Agregar al local storage
// localStorage.setItem('nombre', 'juan');
// Session Storage
// sessionStorage.setItem('nombre', 'juan');
//Eliminar de local storage
// localStorage.removeItem('nombre');
//Limpiar local storage
// localStorage.clear();

// Obtener el valor de nombre
// localStorage.setItem('nombre', 'juan');
// const nombre = localStorage.getItem('nombre');
// console.log(nombre);
