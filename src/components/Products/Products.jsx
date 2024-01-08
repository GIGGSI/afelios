import React from 'react'

import './Products.css'
import SingleProduct from './SingleProduct/SingleProduct'
import InfoSection from '../InfoSection/InfoSection'

const Products = ({ products }) => {
    return (
        <div className='products-wrapper' id='products'>
            <InfoSection />
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