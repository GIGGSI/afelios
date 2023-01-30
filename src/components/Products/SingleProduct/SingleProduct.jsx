import React from 'react'

import './SingleProduct.css'

const SingleProduct = ({ title, imgPath, priceOne, priceTwo, isBallon }) => {
    return (
        <div className='single-product-wrapper'>
            <img src={imgPath} alt={title} />
            <h3>{title}</h3>
            <div className='single-product-wrpaper-content'>
                {isBallon ? <>
                    <p>1 брой {priceOne} ст.</p>
                    <p>100 броя: {priceTwo} лв.</p>
                </>
                    : <>
                        <p>Благоевград: {priceOne} лв.</p>
                        <p>Банско: {priceTwo} лв.</p>
                    </>}

            </div>

        </div>
    )
}

export default SingleProduct