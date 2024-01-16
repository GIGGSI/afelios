import React from 'react'
import Header from '../Header/Header'
import Contacts from '../Contacts/Contacts'

import iceBg from '../../assets/ice-bg.jpg'

import Products from '../Products/Products'
import { vapesData } from '../../data'

const IcePage = () => {
    return (
        <div className="home-wrapper" id='scrollContainer'>
            <Header
                title="Качествени и оригинални вейп устройства."
                imageUrl={iceBg}
            />
            <Products
                products={vapesData}
                vapes
            />
            <Contacts />

        </div>
    )
}

export default IcePage