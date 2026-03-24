//querySelector
// const titulo = document.querySelector('.header__texto h2');
// titulo.textContent = "Texto desde JS";
// titulo.classList.add('header__texto--secundario');
// console.log(titulo);
// titulo.classList.remove('header__texto--secundario');
// console.log(titulo);

//querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);

//crear elementos con JS
// const nuevoEnlace = document.createElement('A');
// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);
// nuevoEnlace.href="#";
// nuevoEnlace.classList.add('navegacion__enlace');
// nuevoEnlace.textContent = 'Otro enlace';

// navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);

const boton = document.querySelector('#boton1');
boton.addEventListener('click',function(){
    console.log('Diste click en el botón 1');
});
const boton2 = document.querySelector('#boton2');
boton2.addEventListener('click',function(){
    console.log('Diste click en el botón 2');
});
//console.log(boton);

