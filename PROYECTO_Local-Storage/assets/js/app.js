// Variables
const listaTweets = document.getElementById('lista-tweets');


// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTweet);

    // Borrar tweets
    listaTweets.addEventListener('click', borrarTweet);

    // Conteniedo cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

// Funciones

// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    // Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    // Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // Añade el botón de borrar al tweet
    li.appendChild(botonBorrar);
    // Añade el tweet a la lista
    listaTweets.appendChild(li);

    // Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}

// Elimina el tweet del DOM
function borrarTweet(e) {
    e.preventDefault();

    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// Eliminar tweet del local storage
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;
    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length -1);
    tweets = obtenerTweetLocalStorage();
    
    tweets.forEach((item, index) => {
        if(tweetBorrar == item) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetLocalStorage();

    // Añadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a array para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que haya elementos en local storage
function obtenerTweetLocalStorage() {
    let tweet;

    // Revisamos los valores de local storage
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Mostrar datos de LocalStorage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetLocalStorage();

    tweets.forEach((tweet) => {
        // Crear boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        // Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        // Añade el botón de borrar al tweet
        li.appendChild(botonBorrar);
        // Añade el tweet a la lista
        listaTweets.appendChild(li);
    });
}