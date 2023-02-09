import React from 'react'
import Contacts from '../Contacts/Contacts'
import Content from '../Content/Content'
import Header from '../Header/Header'
import Products from '../Products/Products'

const HomePage = () => {
    return (
        <div className="home-wrapper" id='scrollContainer'>
            <Header />
            <Products />
            <Content />
            <Contacts />
        </div>
    )
}

export default HomePage