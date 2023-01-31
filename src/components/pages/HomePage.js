import React from 'react'
import Contacts from '../Contacts/Contacts'
import Header from '../Header/Header'
import Products from '../Products/Products'

const HomePage = () => {
    return (
        <div className="home-wrapper" id='scrollContainer'> 
            <Header />
            <Products  />
            <Contacts />
        </div>
    )
}

export default HomePage