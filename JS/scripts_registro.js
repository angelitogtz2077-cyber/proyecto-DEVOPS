const datos = {
    nombre : '',
    gamerTag : '',
    raza : '',
    correo : '',
    mensaje : ''
}
//definimos un objeto que será quien almacene los datos del formulario

//seleccionamos los elementos html, y creamos un objeto a partir de los elementos.
const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const gamerTag = document.querySelector('#gamerTag');
const raza = document.querySelector('#raza');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
//fin selección de elementos

//agregamos un evento para cada objeto de mi formulario
nombre.addEventListener('input',leerTexto);
gamerTag.addEventListener('input',leerTexto);
raza.addEventListener('change',leerTexto);
correo.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);
//aquí agregamos un evento al furmulario, creamos una función, y ejecutamos la función. 
//por defecto los formularios tienen una acción que se llama submit
//pero en este ejemplo, nosotros, manipularemos dicha función.
formulario.addEventListener('submit', function(evento){//el evento por default, es el submit, pero nosotros lo manipularemos, y haremos otra cosa
    evento.preventDefault();//con está línea de codígo evito que el formulario haga el evento por default, y en lugra de ello haga lo siguiente. 
    const {nombre, gamerTag, raza, correo, mensaje} = datos;//creo las variables, nombre, gamerTag, raza, correo y mensaje, apartir del objeto datos.
    if(nombre === '' || gamerTag === '' || correo === '' || raza === '' || mensaje === ''){//solo comparo si son cadenas vacías
        mostrarError('¡Todos los campos son obligatorios!');//en caso de no llenar ningún campo del formulario, mandamos esta función.
        return;//y como no hay datos válidos en el formulario, no hacemos nada
    }
    envioCorrecto('Los datos han sido enviados correctamentes');
    //en caso de que los datos, sean correctos, le notificamos al usuario
    //por aquí debería aparecer el código para enviar los datos a nuestro servidor.
    //código para enviar los datos a un servidor. 
});
//fin agregar eventos

//esta función sirve para al tener un cambio en los campos(input's) del formulario registrar el valor, y guardarlo en el objeto datos.
function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
    
    //este códidgo puede ser confuso, te sugiero hacer un console.log, para cada elemento
    //console.log(evento.target.id); //cuando mandamos llamar la función leerTexto, en el evento input, se envía el evento
    //y con este evento, podemos ver que elemento es, nombre, gamerTag... ,
    //en mi objeto datos, sería algo equivalente a lo siguiente: 
    //datos.nombre = nombre.value; //datos.nombre, del objeto que defini al principio, nombre por la propiedad nombre
    //nombre del objeto que seleccione del formulario, y para obtener su valor, con .value.
    //esto se tendría que hacer con cada uno de los elementos del objeto datos, y de cada uno de los inputs
    //datos.nombre = nombre.value;
    //datos.gamerTag = gamerTag.value;
    //datos.correo = correo.value;
    //datos.mensaje = mensaje.value;
    //console.log(datos);
    //console.log(evento.target.value);
    //pero todo esto, funciona de igual manera con una sola lína que es la que deje.... 
    //si quieres comprobarlo, comenta la línea 43, y descomenta las líneas 51-55
}
//fin función leerTexto

//función para crear un parrafo en el formulario, en caso de tener algún campo vacío
function mostrarError(mensaje){
    const errorFormulario = document.createElement('P');
    errorFormulario.textContent = mensaje;
    errorFormulario.classList.add('error');
    errorFormulario.classList.add('centrar-texto');
    setTimeout(() => {
        errorFormulario.remove();
    },5000);
    formulario.appendChild(errorFormulario);
}
//fin función crear parrafo error

//función para crear un parrafo cuando los datos sean correctos
function envioCorrecto(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    alerta.classList.add('centrar-texto');
    formulario.appendChild(alerta);
    
    setTimeout(()=> {
        alerta.remove();
    },5000)
}
//fin función crear parrafo datos correctos. 
