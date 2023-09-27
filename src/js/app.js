document.addEventListener('DOMContentLoaded', function() {
    iniciarapp();
});

// Returns a random integer from 1 to 21
let randomNumber = Math.floor(Math.random() * 21) + 1;

const img =  ['(1).jpg' , '(2).jpg' , '(3).jpg' , '(4).jpg' , '(5).jpg' , '(6).jpg' , '(7).jpg' , '(8).jpg' , '(9).jpg' , '(10).jpg' , '(11).jpg' , '(12).jpg' , '(13).jpg' , '(14).jpg' , '(15).jpg' , '(16).jpg' , '(17).jpg' , '(18).jpg' , '(19).jpg' , '(20).jpg' , '(21).jpg', '(22).jpg'];
const author = ['AxelVEVO', 'SebastianYatraVEVO', 'Felipe Peláez', 'Andrés Cepeda', 'Sergio Dalma', 'Río Roma', 'LuisFonsiVEVO', 'TizianoFerroVEVO', 'Alexander Acha', 'Tito "El Bambino"', 'julietavenegasVEVO', 'José Luis Perales - Topic', 'Sie7e & The IslaNauts', 'MoratVEVO', 'Monsieur Periné', 'Colectivo Panamera', 'Jósean Log', 'GUFI - Topic', 'Emma Stone - Topic', 'Panda Oficial en Vivo', 'Café Tacvba - Topic', 'Jonathan Larson', 'Cavetown'];
const title = ['Axel - Amo', 'No Hay Nadie Más', 'El Amor Más Grande Del Planeta', 'Lo mejor que hay en mi vida', 'Te amo', 'Mi Persona Favorita', 'Aqui Estoy Yo', 'El Regalo Mas Grande', 'Te amo', 'Tito "El Bambino" El Amor', 'Limon Y Sal', '¿Y Cómo Es Él?', 'Tengo tu love', 'Yo No Merezco Volver', 'Nuestra Canción', 'Un río que se va', 'Alguien Como Tú', 'Por Ella', 'Someone In The Crowd', 'Los Malaventurados No Lloran', 'Eres', 'Come to Your Senses', 'Lemon Boy'];
const songs = ['Axel - Amo (Videoclip).mp3', 'Sebastián Yatra - No Hay Nadie Más (Official Video).mp3', 'El Amor Más Grande Del Planeta.mp3', 'Andrés Cepeda - Lo mejor que hay en mi vida (Video Oficial).mp3', 'Te amo - Sergio Dalma Letra.mp3', 'Río Roma - Mi Persona Favorita (Lyric Video).mp3', 'Luis Fonsi - Aqui Estoy Yo ft. Aleks Syntek, Noel Schajris, David Bisbal.mp3', 'Tiziano Ferro - El Regalo Mas Grande.mp3','Te amo - Alexander Acha (letra).mp3','Tito El Bambino El Patrón - El Amor (Official video).mp3', 'Julieta Venegas - Limon y Sal.mp3', 'Y Cómo Es Él.mp3', 'Sie7e - Tengo tu love (Official Video).mp3', 'Morat - Yo No Merezco Volver.mp3', 'Monsieur Periné - Nuestra Canción.mp3', 'Colectivo Panamera - Un río que se va ft. Georgina (Acústico).mp3', 'Jósean Log - Alguien Como Tú.mp3', 'Por Ella.mp3','Someone In The Crowd.mp3', 'Los Malaventurados No Lloran.mp3', 'Eres.mp3', 'Come to Your Senses.mp3', 'Lemon Boy Cavetown.mp3']

function iniciarapp() {
    fillHTML(randomNumber);

    addReproductionMenu();
    addReproductionIcons();
}

function fillHTML(arrayposition) {

    console.log('arraypositon = ', arrayposition);
    
    addImg(img[arrayposition]);
    addTitleSong(title[arrayposition]);
    addAuthorSong(author[arrayposition]);
    setAudioSource(songs[arrayposition]);
}

function agregarAlMain(elementohijo) {

    tagMain = document.getElementsByTagName("main");
    tagMain[0].appendChild(elementohijo);
}

function addImg(nombreImg) {

    const divImagen = document.createElement('DIV');
    divImagen.classList.add('imgMain', 'display-flex');
    
    const imagenCute = document.createElement('IMG');
    imagenCute.alt = 'Imagen que acompaña la canción';
    imagenCute.id = 'imgMain';
    imagenCute.src = `/src/img/ImagenesTiernas/${nombreImg}`;
    
    divImagen.appendChild(imagenCute);
    
    agregarAlMain(divImagen);
}

function changeImg(nombreImg) {
    const imagenCute = document.getElementById('imgMain');
    imagenCute.src = `/src/img/ImagenesTiernas/${nombreImg}`;
}

function addTitleSong(titleSong) {

    const divTitulo = document.createElement('DIV');
    divTitulo.classList.add('container');

    const pTitulo = document.createElement('P');
    pTitulo.classList.add('auto-scroll-paragraph');
    pTitulo.id = 'title';
    pTitulo.textContent = titleSong;

    divTitulo.appendChild(pTitulo);

    agregarAlMain(divTitulo);
}

function changeTitleSong(titleSong) {
    const pTitulo = document.getElementById('title');
    pTitulo.textContent = titleSong;
}

function addAuthorSong(authorSong) {

    const divAuthor = document.createElement('DIV');
    divAuthor.classList.add('display-flex', 'justify-spaceBetween');
    const pAuthor = document.createElement('P');
    pAuthor.id = 'author';
    pAuthor.textContent = authorSong;
    
    divAuthor.appendChild(pAuthor);

    agregarAlMain(divAuthor);
    
    const svgAuthor = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-filled" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" stroke-width="0" fill="#311922"></path></svg>`;
    document.getElementById('author').outerHTML += svgAuthor;
}

function changeAuthorSong(authorSong) {
    
    const pAuthor = document.getElementById('author');
    pAuthor.textContent = authorSong;
}

function setAudioSource(nameSong) {
    const audioSource = document.getElementById('audioSource');
    
    audioSource.src = '/src/audio/' + nameSong; 
    
    const audio = document.getElementById('myAudio');
    audio.load(); // Reload the audio element to apply the new source
}

function addReproductionMenu() {

    const songDuration = '3:20';

    const divReproduction = document.createElement('DIV');
    divReproduction.classList.add('display-flex', 'justify-spaceBetween', 'duration');

    const pstart = document.createElement('P');
    pstart.textContent = '0:00';

    const pEnd = document.createElement('P');
    pEnd.id = 'duration';
    pEnd.textContent = songDuration;

    divReproduction.appendChild(pstart);
    divReproduction.appendChild(pEnd);

    agregarAlMain(divReproduction);
}

function addReproductionIcons() {

    const svgShufle = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-shuffle-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#311922" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 4l3 3l-3 3"></path><path d="M18 20l3 -3l-3 -3"></path><path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5"></path><path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5"></path></svg>`;
    const svgbefore = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-skip-back-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="none" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" stroke-width="0" fill="#311922"></path><path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" stroke-width="0" fill="#311922"></path></svg>`;
    const svgplay = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="none" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="#311922"></path></svg>`;
    const svgnext = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-skip-forward-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" stroke-width="0" fill="#311922"></path><path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" stroke-width="0" fill="#311922"></path></svg>`;
    const svgloop = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#311922" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path></svg>`;

    const divReproductionIcons = document.createElement('DIV');
    divReproductionIcons.classList.add('display-flex', 'justify-spaceEvenly', 'align-center');
    divReproductionIcons.id = 'reproductionIcons';
    agregarAlMain(divReproductionIcons);
    
    // Primer Icono
    document.getElementById('reproductionIcons').innerHTML += svgShufle;
    
    // Segundo Icono
    const buttonBefore = document.createElement('BUTTON');
    buttonBefore.id = 'btnBefore';
    buttonBefore.innerHTML = svgbefore;
    divReproductionIcons.appendChild(buttonBefore);

    // Tercer Icono
    const buttonPlayPause = document.createElement('BUTTON');
    buttonPlayPause.id = 'btnPlay';
    buttonPlayPause.innerHTML = svgplay;
    divReproductionIcons.appendChild(buttonPlayPause);
    
    // Cuarto Icono
    const buttonAfter = document.createElement('BUTTON');
    buttonAfter.id = 'btnAfter';
    buttonAfter.innerHTML = svgnext;
    divReproductionIcons.appendChild(buttonAfter);
    
    // Quinto Icono
    document.getElementById('reproductionIcons').innerHTML += svgloop;

    // Eventos
    document.getElementById('btnBefore').onclick =  function() {beforeCard()};
    document.getElementById('btnPlay').addEventListener('click', playsong());
    document.getElementById('btnAfter').onclick =  function() {nextCard()};
}

function playsong() {
    
    const audio = document.getElementById('myAudio');
    const playButton = document.getElementById('btnPlay');
    
    playButton.addEventListener('click', function() {
        audio.play();
    });
}

function nextCard() {

    if( randomNumber == 21 ) {
        randomNumber = 0;
    } else {
        randomNumber += 1;
    }
    
    console.log('arraypositon = ', randomNumber);
    changeImg(img[randomNumber]);
    changeTitleSong(title[randomNumber]);
    changeAuthorSong(author[randomNumber]);
    setAudioSource(songs[randomNumber]);
}

function beforeCard() {

    if( randomNumber == 0 ) {
        randomNumber = 21;
    } else {
        randomNumber -= 1;
    }

    console.log('arraypositon = ', randomNumber);
    changeImg(img[randomNumber]);
    changeTitleSong(title[randomNumber]);
    changeAuthorSong(author[randomNumber]);
    setAudioSource(songs[randomNumber]);
}