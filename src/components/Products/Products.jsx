import React from 'react'

import './Products.css'
import SingleProduct from './SingleProduct/SingleProduct'
import InfoSection from '../InfoSection/InfoSection'

const Products = ({ products, vapes }) => {
    return (
        <div className='products-wrapper' id='products'>
            <InfoSection />
            {vapes && <div className='vapes-info'>
                <p>
                    За цена и поръчка се обадете на посоченият телефон!

                </p>
            </div>
            }
            <div className='products-wrapper-title'>
                <h1>Продукти</h1>
            </div>
            <div className='products-container'>
                {products.map((item) => (
                    <SingleProduct key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Products