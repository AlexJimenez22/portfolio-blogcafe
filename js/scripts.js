// querySelector
const heading = document.querySelector('.header__texto h2'); // Retorna 0 o 1 Elementos
// heading.classList.add('nueva-clase'); Añade una nueva clase
// heading.textContent = 'Nuevo Contenido'; Modifica el texto del elemento
console.log(heading); // Imprimir el elemento heading

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion  a'); // Retorna todos los elementos con clases iguales
console.log(enlaces);
// enlaces[0].textContent = 'Este es el nuevo texto del enlace'; // Cambia el texto del enlace con indice 0
// enlaces[0].classList.remove('navegacion__enlace')
// enlaces[0].classList.add('nueva-clase');
// enlaces[0].href = 'google.com'; Cambia la propiedad del href por otro enlace

// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2)

// Generar un nuevo enlace
// Para crear un enlace primero se debe de declarar una variable con la cual podemos interartuar
// Como recomendacion se debe de poner en mayusculas el tipo de etiqueta que se va a crear
// tipoDato nombre = document.createElement('etiquetaEnMayusculas');
const nuevoEnlace = document.createElement('A');

// Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar texto
nuevoEnlace.textContent = 'Tienda Virtual';
// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregar al documento

const navegacion = document.querySelector('.navegacion'); // Selecionamos la clase padre de navegacion

// nombreElementoPadre.appendChild(elementoAgregar);
navegacion.appendChild(nuevoEnlace); // Agregamos el nuevo enlace como un elemento hijo

console.log(nuevoEnlace);

// Eventos 

console.log(1);

window.addEventListener('load', () => console.log(2)) // load espera a que el JS y los archivos
// Dependientes del HTML esten listos 

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', () => console.log(4)); // Solo espera a que este 
//Descargado el HTML, pero no espera CSS y tampoco imagenes.
// Por lo tanto este reaccionara primero que el window

console.log(5);

window.onscroll = function(){ // Reacciona cuando se hace scroll en la página
    console.log('Scrolling...');
}

/*
// Seleccionar elementos y asociarlos a un event
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', evento => {
    console.log(evento); // recibe el parametro de e, que en pocas palabras es el evento
    // y lo que hace es que muestra todas las acciones que se pueden utilizar
    // por ejemplo: prevenDefault() o target
    evento.preventDefault(); // Esto hace que se prevengan eventos por defecto del navegador
    // Por ejemplo, es muy usado para formularios pero no queremos que los datos se envien
    // hasta lo que los datos se hayan escritos correctamente, por eso prevenimos que se envien 
    // ya que por defecto al hacer un input busca mandarlos
    console.log('enviando formulario...')

})
*/

// MUY IMPORTANTE: preventDefault evita que se recague la pagina y es muy importante para formularios

// Leer valores de formulario


/*
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

let datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// Forma tradional de leer los datos  de un input
// para leer valores existen dos eventos, puede ser change e input
// change lee el input pero hasta que termina de escribir
// input lee el input por cada letra que inserta 
nombre.addEventListener('input', (e) => { // e recibe como parametros datos del evento
    console.log(e.target.value); 
    // e accede al evento
    // target apunta al elemento que estamos accdiento, en este caso el input de NOMBRE
    // value obtiene el valor del input al que esta apuntando target

    // guardar los datos dentro de un arreglo
    datos[e.target.id] = e.target.value;
    // otra forma de acceder a las propiedades de un objeto es poner el nombre de la propiedad
    // dentro de corchetes, ejemplo: nombreObjeto[nombrePropiedad];
    // en este caso queremos guardar los datos de una manera sostenible
    // nombreObjeto[e.target.id] = e.target.value;
    // e.target.id: e = evento, target = apunta al elemento, id = obtiene el id del elemento
    // por eso la salida o lo que obtiene es el id nombre
    // POR LO TANTO ES MUY IMPORTANTE QUE EL ID DEL ELEMENTO Y EL NOMBRE DE LA PROPIEDA SEA EL MISMO
    console.log(datos);
});
email.addEventListener('input', (e) => { // e recibe como parametros datos del evento
    console.log(e.target.value);
    // e accede al evento
    // target apunta al elemento que estamos accdiento, en este caso el input de EMAIL
    // value obtiene el valor del input al que esta apuntando target

    // guardar los datos dentro de un arreglo
    datos[e.target.id] = e.target.value;
    // otra forma de acceder a las propiedades de un objeto es poner el nombre de la propiedad
    // dentro de corchetes, ejemplo: nombreObjeto[nombrePropiedad];
    // en este caso queremos guardar los datos de una manera sostenible
    // nombreObjeto[e.target.id] = e.target.value;
    // e.target.id: e = evento, target = apunta al elemento, id = obtiene el id del elemento
    // por eso la salida o lo que obtiene es el id EMAIL
    // POR LO TANTO ES MUY IMPORTANTE QUE EL ID DEL ELEMENTO Y EL NOMBRE DE LA PROPIEDA SEA EL MISMO
    console.log(datos);
});
mensaje.addEventListener('input', (e) => { // e recibe como parametros datos del evento
    console.log(e.target.value);
    // e accede al evento
    // target apunta al elemento que estamos accdiento, en este caso el input de MENSAJE
    // value obtiene el valor del input al que esta apuntando target

    // guardar los datos dentro de un arreglo
    datos[e.target.id] = e.target.value;
    // otra forma de acceder a las propiedades de un objeto es poner el nombre de la propiedad
    // dentro de corchetes, ejemplo: nombreObjeto[nombrePropiedad];
    // en este caso queremos guardar los datos de una manera sostenible
    // nombreObjeto[e.target.id] = e.target.value;
    // e.target.id: e = evento, target = apunta al elemento, id = obtiene el id del elemento
    // por eso la salida o lo que obtiene es el id MENSAJE
    // POR LO TANTO ES MUY IMPORTANTE QUE EL ID DEL ELEMENTO Y EL NOMBRE DE LA PROPIEDA SEA EL MISMO
    console.log(datos);
});

*/

// Diferencias en entre click y submit
// Click: Se puede usar en cualquier parte del html, incluso en texto e imagenes
// Submit: Es exclusivo para enviar datos y se tiene que aplicar directamente en el formulario
// y el formulario debe de incluir un submit necesariamente

// Forma simplificada de leer un input
// Forma correcta de estructurar codigo
// 1.- Variables
// 2.- Eventos
// 3.- Funciones adicionales

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

let datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

nombre.addEventListener('input', leerTexto);//mandamos a llamar a la funcion en vez de crearla aqui
email.addEventListener('input', leerTexto);//mandamos a llamar a la funcion en vez de crearla aqui
mensaje.addEventListener('input', leerTexto);//mandamos a llamar a la funcion en vez de crearla aqui
// El evento de submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar Formulario
    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true); // manda como segundo parametro que si hay un error

        return; // RETURN CORTA LE EJECICION DEL CODIGO
    }

    // Enviar Formulario
    mostrarAlerta('Mensaje enviado con exito');
});

function leerTexto(e) { // tenemos el parametro aqui de los datos del evento

    // guardar datos en el objeto
    datos[e.target.id] = e.target.value; // nombreObjeto[nombrePropiedad] = valor;

    console.log(e.target.value); // imprimir valor del input en tiempo real
    // console.log(datos); // imprimir objeto
}

function mostrarAlerta(mensaje, error = null){ // Si no hay error lo mantiene como nulo
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){ // si hay un error entonces la clase sera error
        alerta.classList = 'error';
    } else { // si el error se mantiene null entonces la clase es correcto
        alerta.classList = 'correcto';
    }

    formulario.appendChild(alerta); // muestra el parrafo en el html

    // elimina del html el parrado despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}