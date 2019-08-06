// Your code goes here

//
// MouseOver
//

let headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseover', event => {
    event.target.classList.toggle('vibrate-1');
});

//
//Mouse Leave
//

headerImg.addEventListener('mouseleave', event => {
    event.target.classList.toggle('vibrate-1');
});

//
//KeyDown
//

let catArray = [
    'http://pngimg.com/uploads/cat/cat_PNG50497.png',
    'http://pngimg.com/uploads/cat/cat_PNG50529.png',
    'http://pngimg.com/uploads/cat/cat_PNG50548.png',
    'http://pngimg.com/uploads/cat/cat_PNG50504.png',
    'https://yokoent.com/images/cat-png-kitten.png',
    'http://pngimg.com/uploads/cat/cat_PNG50485.png',
    'http://pngriver.com/wp-content/uploads/2018/04/Download-Cat-PNG-2.png',
    'http://pngimg.com/uploads/cat/cat_PNG50491.png',
    'https://clipart.info/images/ccovers/1522852544cute-cat-png-image-download-picture-kitten.png',
    'http://www.sclance.com/pngs/cute-cat-png/cute_cat_png_359122.png',
];

getRandomCat = array => {
    return array[Math.ceil(Math.random() * array.length) - 1];
};

getRandomPosition = () => {
    let width = Math.floor(Math.random() * window.innerWidth);
    let height = Math.floor(
        Math.random() * document.documentElement.scrollHeight
    );
    return [width, height];
};

let body = document.querySelector('body');
body.addEventListener('keydown', event => {
    let newCat = document.createElement('img');
    newCat.src = getRandomCat(catArray);
    let [width, height] = getRandomPosition();
    console.log(width, height);
    newCat.setAttribute(
        'style',
        `position: absolute; top: ${height}px; left: ${width}px; width:300px; z-index: 999;`
    );
    event.target.prepend(newCat);
});

console.log(getRandomCat(catArray));
console.log(getRandomPosition());

//
//Wheel  Event
//

zoom = event => {
    let scale = 1;

    event.preventDefault();

    scale += event.deltaY * -0.01;

    //Restrict scale
    scale = Math.min(Math.max(0.125, scale), 4);

    event.target.style.transform = `scale(${scale})`;
};

let allImgs = document.querySelectorAll('.img-content img');
allImgs.forEach(element => {
    element.addEventListener('wheel', zoom);
});

//
// Drag / Drop
//

let audio = document.createElement('AUDIO');
audio.src = './media/Blue_Whale.mp3';
body.append(audio);

let everything = document.querySelector('*');
everything.addEventListener('drag', event => {
    let mySong = document.querySelector('audio');
    mySong.play();
});

everything.addEventListener('dragend', event => {
    let mySong = document.querySelector('audio');
    mySong.pause();
});

//
// Load
//

window.addEventListener('load', event => {
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('style', 'color: #17A2B8');
    });
});

//
//Focus
//

let navLinks = document.querySelectorAll('a');
navLinks.forEach(element => {
    element.addEventListener('focus', event => {
        event.target.setAttribute(
            'style',
            'transform: scale(1.1); text-decoration: underline'
        );
    });
});

//
//Resize
//

let messages = [
    'Oooohh',
    'Ahhh',
    'Yeah, resize me big boy',
    'Ouch',
    'That hurts',
    'I like that',
    'What are you doing?!',
    'Give me more!',
    'I like it like that',
    'You are funny',
];

window.addEventListener('resize', event => {
    everything.classList.toggle('vibrate-1');
});

// console.log(messages[Math.ceil(Math.random() * messages.length) - 1]);

//
//Scroll
//

let destinationImage = document.querySelector('.content-destination img');

window.addEventListener('scroll', event => {
    let radius = window.scrollY / 10;
    destinationImage.setAttribute('style', `border-radius: ${radius}px`);
});

//
//Select
//

let allPs = document.querySelectorAll('p');

let selected = document.querySelector('form input[type="text"]');
selected.addEventListener('select', event => {
    let selString = event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd
    );
    allPs.forEach(p => {
        p.textContent = `You selected ${selString}`;
    });
});

//
//DoubleClick
//

everything.addEventListener('dblclick', event => {
    alert('I got lazy');
});

//
// GSAP Green Sock Animation Plugin
//

TweenMax.from('.logo-heading', 2, { opacity: 0, scale: 1.13 });
