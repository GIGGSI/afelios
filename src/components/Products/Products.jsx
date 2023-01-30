import React from 'react'
import { productsData } from './ProductsConstants'

import './Products.css'
import SingleProduct from './SingleProduct/SingleProduct'

const Products = () => {
    return (
        <div className='products-wrapper noisy'>
            <div className='products-wrapper-title'>
                <h1>Продукти</h1>
            </div>
            <div className='products-container'>
                {productsData.map((item) => (
                    <SingleProduct key={item.id} {...item} />
                ))}

            </div>
        </div>
    )
}

export default Products