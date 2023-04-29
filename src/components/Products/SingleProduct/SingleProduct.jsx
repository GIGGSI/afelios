import React from 'react'

import './SingleProduct.css'

const SingleProduct = ({ title, imgPath, priceOne, priceTwo, isBallon, priceDuptnica }) => {
    return (
        <div className='single-product-wrapper'>
            <img src={imgPath} alt={title} loading="lazy" />
            <h3>{title}</h3>
            <div className='single-product-wrpaper-content'>
                {isBallon ? <>
                    <h5>1 брой {priceOne} ст.</h5>
                    <h5>100 броя: {priceTwo} лв.</h5>
                </>
                    : <>
                        <h5>Благоевград: {priceOne} лв.</h5>
                        <h5>Банско: {priceTwo} лв.</h5>
                        <h5>Дупница: {priceDuptnica} лв.</h5>
                    </>}

            </div>

        </div>
    )
}

export default SingleProduct