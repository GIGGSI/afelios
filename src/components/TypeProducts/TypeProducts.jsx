import React from 'react'

import ballonGirl from '../../assets/ballon-girl.jpg'
import vapes from '../../assets/vapes.jpg'

import './TypeProducts.css'
import { Link } from 'react-router-dom'

const products = [
    {
        id: 1,
        url: '/laughing-gas',
        title: "Райски Газ",
        imgUrl: ballonGirl
    },
    {
        id: 2,
        url: '/ice',
        title: "Ice",
        imgUrl: vapes
    }
]

const TypeProducts = () => {
    return (
        <div className='type-products' id='products'>
            <div className='products-wrapper-title'>
                <h1>Продукти</h1>
            </div>
            <div className='prodcuts-wrapper'>
                {products.map((item) => <Link key={item.id} to={item.url}>
                    <img src={item.imgUrl} alt={item.title} />
                    <h3>{item.title}</h3>
                </Link>
                )}
            </div>

        </div>
    )
}

export default TypeProducts