// POPUP

// VARIABLES=====================================================================================

let Next = document.querySelector('.control__next');
let Prew = document.querySelector('.control__prew');
let Center = document.querySelector('.control__center');
// array of images
const images = ['destinations__japan.svg', 'destinations__spain.svg', 'destinations_usa.svg'];
// number of active image
let numActivImg = 0;
// в этот див будет выводиться изображения
const destinationsCarousel = document.querySelector('.destinations__carousel');

// FUNCTIONS======================================

const createCentralImg = () => {
    const img = document.createElement('img');
    img.src = '../src/img/' + images[numActivImg];
    destinationsCarousel.append(img);
    img.style.marginLeft = 20 + 'px';
}

const createRigthlImg = () => {
    let numRigthImg = numActivImg + 1;
    // console.log('numRigthImg:', numRigthImg);
    if (numRigthImg == images.length) {
        numRigthImg = 0;
    }
    const img = document.createElement('img');
    img.src = '../src/img/' + images[numRigthImg];
    destinationsCarousel.append(img);
    img.style.marginLeft = 20 + 'px';
}

const createLeftlImg = () => {
    console.log('createLeftlImg')
    let numLeftImg = numActivImg - 1;
    if (numLeftImg <0) {
        numLeftImg = images.length - 1;
    }

    // console.log('numRigthImg:', numRigthImg);
    const img = document.createElement('img');
    img.src = '../src/img/' + images[numLeftImg];
    destinationsCarousel.prepend(img);
    img.style.marginLeft = 20 + 'px';
}

const nextClick = () => {
    numActivImg++;
    if (numActivImg == images.length) {
        numActivImg = 0;
    }
    document.querySelector('.destinations__carousel img').remove();
    createRigthlImg();
}

const prevClick = () => {
    // console.log('prev click');
    numActivImg--;
    if(numActivImg < 0) {
        numActivImg = images.length - 1;
    }
    document.querySelector('.destinations__carousel img:last-child').remove();
    createLeftlImg();
}

// BODY==================================================

createCentralImg();
createRigthlImg();
createLeftlImg();

Next.onclick = nextClick;
Prew.onclick = prevClick;
// Center.onclick = () => {
    
// }

// ====================================
// Modal Window
// ====================================

// Variables

let loginButton = document.querySelector('.login_button');
let popupOwerlay = document.querySelector('.popup_owerlay');
let popupBlock = document.querySelector('.popup');

// Function
loginButton.onclick = () => {
    popupBlock.style.display = 'block';
    popupOwerlay.style.display = 'block';
}

popupOwerlay.onclick = function (event) {
    event.preventDefault()
    if (event.target == popupOwerlay) {
        popupBlock.style.display = 'none';
        popupOwerlay.style.display = 'none';
    }
    
}

