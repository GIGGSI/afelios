import React from 'react'
import Contacts from '../Contacts/Contacts'
import Content from '../Content/Content'
import Header from '../Header/Header'
import TypeProducts from '../TypeProducts/TypeProducts'

import balloonBG from '../../assets/balloonBG.jpg'

const HomePage = () => {
    return (
        <div className="home-wrapper" id='scrollContainer'>
            <Header
                title="Топ качество на пълнители за сметана с вкус"
                imageUrl={balloonBG}
            />

            <TypeProducts />
            <Content />
            <Contacts />
        </div>
    )
}

export default HomePage