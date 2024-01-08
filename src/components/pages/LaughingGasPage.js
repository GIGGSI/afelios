import React from 'react'
import Products from '../Products/Products'
import Contacts from '../Contacts/Contacts'
import Header from '../Header/Header'
import { productsData } from '../../data'

const LaughingGasPage = () => {
    return (
        <div className="home-wrapper" id='scrollContainer'>
            <Header
                title='Топ качество на пълнители за сметана с вкус'
                imageUrl="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/bg-header-3.webp?alt=media&token=c737fde6-5199-4d80-9b5d-868e7f6c85fe"
            />
            <Products
                products={productsData}
            />
            <Contacts />
        </div>
    )
}

export default LaughingGasPage