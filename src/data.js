
import grapes from './assets/vapes/mixedBerry.jpg';
import banana from './assets/vapes/banana.jpg';
import bananaStrawberry from './assets/vapes/bananaStrawberry.jpg';
import cranberry from './assets/vapes/cranberry.jpg';
import kiwi from './assets/vapes/kiwi.jpg';
import strawberry from './assets/vapes/strawberry.jpg'


// import unflavoured from '../../assets/unflavoured.jpeg'
// import greenApple from '../../assets/green-apple.jpeg';
// import melon from '../../assets/melon.jpeg'
import ballon from './assets/balon.JPG'
import blubery from './assets/blueberry.webp'
// import lemon from '../../assets/lemon.webp';
import watermelon from './assets/watermelon.webp'
import greenApple from './assets/IMG_0391.jpeg'
import unFlaver from './assets/IMG_0392.jpeg'


export const vapesData = [
    {
        id: 1,
        title: "Горски Плод",
        imgPath: cranberry,
        // priceOne: 50,
        // priceTwo: 65,
        // priceDuptnica: 45,
    },
    {
        id: 2,
        title: "Ягода и банан",
        imgPath: bananaStrawberry,
        // priceOne: 50,
        // priceTwo: 65,
        // priceDuptnica: 45,
    },
    {
        id: 3,
        title: "Ягода и айс",
        imgPath: strawberry,
        // priceOne: 50,
        // priceTwo: 65,
        // priceDuptnica: 45,
    },
    {
        id: 4,
        title: "Ягода и Киви",
        imgPath: kiwi,
        // priceOne: 50,
        // priceTwo: 65,
        // priceDuptnica: 45,
    },
    {
        id: 5,
        title: "Банан айс",
        imgPath: banana,
        // priceOne: 50,
        // priceTwo: 65,
        // priceDuptnica: 45,
    },
    {
        id: 6,
        title: "Грозде",
        imgPath: grapes,
        // priceOne: 50,
        // priceTwo: 65,
        // priceDuptnica: 45,
    },
];

export const productsData = [
    {
        id: 1,
        title: "Флакон с вкус - Зелена ябълка",
        imgPath: greenApple,
        priceOne: 50,
        priceTwo: 55,
        // priceDuptnica: 45,
    },
    {
        id: 2,
        title: "Флакон без вкус",
        imgPath: unFlaver,
        priceOne: 50,
        priceTwo: 55,
        // priceDuptnica: 45,
    },
    {
        id: 3,
        title: "Флакон с вкус - Диня",
        imgPath: watermelon,
        priceOne: 45,
        priceTwo: 50,
        // priceDuptnica: 45,
    },
    {
        id: 4,
        title: "Флакон с вкус - Боровинка",
        imgPath: blubery,
        priceOne: 45,
        priceTwo: 50,
        // priceDuptnica: 45,
    },
    // {
    //     id: 1,
    //     title: 'Пълнители за сметана с вкус 640 грама Зеленя ябълка',
    //     imgPath: greenApple,
    //     priceOne: 40,
    //     priceTwo: 65,
    //     priceDuptnica: 45,
    //     isBallon: false
    // },
    // {
    //     id: 2,
    //     title: "Пълнители за сметана с вкус 640 грама Пъпеш",
    //     imgPath: melon,
    //     priceOne: 40,
    //     priceTwo: 65,
    //     priceDuptnica: 45,
    //     isBallon: false
    // },
    // {
    //     id: 3,
    //     title: "Пълнители за сметана 640 без вкус",
    //     imgPath: unflavoured,
    //     priceOne: 40,
    //     priceTwo: 65,
    //     priceDuptnica: 45,
    //     isBallon: false
    // },
    {
        id: 5,
        title: "Пакет парти балони",
        imgPath: ballon,
        priceOne: 20,
        priceTwo: 15,
        isBallon: true
    },

]