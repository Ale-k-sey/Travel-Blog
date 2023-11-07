// POPUP

// VARIABLES=====================================================================================

// for desctop
let Next = document.querySelector('.control__next');
let Prew = document.querySelector('.control__prew');
let Center = document.querySelector('.control__center');
// for mobile
let nextMob = document.querySelector('.destinations__control-next');
let prevMob = document.querySelector('.destinations__control-prev');

// array of images desctop
const images = ['destinations__japan.svg', 'destinations__spain.svg', 'destinations_usa.svg'];
// array of images mob
const imagesMob = ['destinations__spain-mob.svg', 'destinations__spain-mob2.svg', 'destinations__spain-mob3.svg'];
// number of active image
let numActivImg = 0;
// в этот див будет выводиться изображения
// desctop
const destinationsCarousel = document.querySelector('.destinations__carousel');
// mobile
const destinationsCarouselMob = document.querySelector('.destinations__carousel-mob');

// FUNCTIONS======================================

// desctop
const createCentralImg = () => {
    const img = document.createElement('img');
    img.src = './img/' + images[numActivImg];
    destinationsCarousel.append(img);
    img.style.marginLeft = 20 + 'px';
}

// mobile
const createCentralImgMob = () => {
    const img = document.createElement('img');
    console.log(numActivImg);
    img.src = './img/' + imagesMob[numActivImg];
    destinationsCarouselMob.append(img);
    img.style.display = 'block';
    img.style.margin = 'auto';
    img.style.width = '80%';
}

// desctop
const createRigthlImg = () => {
    let numRigthImg = numActivImg + 1;
    if (numRigthImg == images.length) {
        numRigthImg = 0;
    }
    const img = document.createElement('img');
    img.src = './img/' + images[numRigthImg];
    destinationsCarousel.append(img);
    img.style.marginLeft = 20 + 'px';
}
// mobile
const createRigthImgMob = () => {
    let numRigthImg = numActivImg + 1;
    if (numRigthImg == images.length) {
        numRigthImg = 0;
    }
    const img = document.createElement('img');
    img.src = './img/' + imagesMob[numRigthImg];
    destinationsCarouselMob.append(img);
}

// desctop
const createLeftlImg = () => {
    let numLeftImg = numActivImg - 1;
    if (numLeftImg <0) {
        numLeftImg = images.length - 1;
    }

    const img = document.createElement('img');
    img.src = './img/' + images[numLeftImg];
    destinationsCarousel.prepend(img);
    img.style.marginLeft = 20 + 'px';
}
// mob
const createLeftImgMob = () => {
    let numLeftImg = numActivImg - 1;
    if (numLeftImg <0) {
        numLeftImg = images.length - 1;
    }

    const img = document.createElement('img');
    img.src = './img/' + imagesMob[numLeftImg];
    destinationsCarouselMob.prepend(img);
}

// desctop
const nextClick = () => {
    numActivImg++;
    if (numActivImg == images.length) {
        numActivImg = 0;
    }
    document.querySelector('.destinations__carousel img').remove();
    createRigthlImg();
}
// mob
const nextClickMob = () => {
    numActivImg++;
    if (numActivImg == images.length) {
        numActivImg = 0;
    }
    document.querySelector('.destinations__carousel-mob img').remove();
    createRigthImgMob();
    console.log('next click mob');
}

// desctop
const prevClick = () => {
    numActivImg--;
    if(numActivImg < 0) {
        numActivImg = images.length - 1;
    }
    document.querySelector('.destinations__carousel img:last-child').remove();
    createLeftlImg();
}

// mob
const prevClickMob = () => {
    console.log('click prev');
    // numActivImg--;
    // if(numActivImg < 0) {
    //     numActivImg = images.length - 1;
    // }
    // document.querySelector('.destinations__carousel-mob img:last-child').remove();
    // createLeftImgMob();
    
}

// BODY desctop==================================================

createCentralImg();
createRigthlImg();
createLeftlImg();

Next.onclick = nextClick;
Prew.onclick = prevClick;
Center.onclick = () => {
    numActivImg = 0;
    document.querySelector('.destinations__carousel img').remove();
    document.querySelector('.destinations__carousel img').remove();
    document.querySelector('.destinations__carousel img').remove();
    createCentralImg();
    createRigthlImg();
    createLeftlImg();
}
//  BODY mobile=========================================================
createCentralImgMob();
createRigthImgMob();
createLeftImgMob();

document.querySelector('.destinations__control-next').onclick = () => {
    console.log('next mob click')
}
prevMob.ontouchstart = prevClickMob;

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

