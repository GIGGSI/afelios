import unflavoured from '../../assets/unflavoured.jpeg'
import greenApple from '../../assets/green-apple.jpeg';
import melon from '../../assets/melon.jpeg'
import ballon from '../../assets/balon.JPG'

export const productsData = [
    {
        id: 1,
        title: 'Пълнители за сметана с вкус 640 грама Зеленя ябълка',
        imgPath: greenApple,
        priceOne: 55,
        priceTwo: 65,
        isBallon: false
    },
    {
        id: 2,
        title: "Пълнители за сметана с вкус 640 грама Пъпеш",
        imgPath: melon,
        priceOne: 55,
        priceTwo: 65,
        isBallon: false
    },
    {
        id: 3,
        title: "Пълнители за сметана с вкус 640 без вкус",
        imgPath: unflavoured,
        priceOne: 55,
        priceTwo: 65,
        isBallon: false
    },
    {
        id: 4,
        title: "Пакет парти балони",
        imgPath: ballon,
        priceOne: 20,
        priceTwo: 15,
        isBallon: true
    }
]