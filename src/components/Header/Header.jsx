import React from 'react'
import headerImage from '../../assets/bg-header-3.webp'

import './Header.css'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <img
                src={headerImage}
                alt="Парти Балони" />
                <div className='header-wrapper-content'>
                    <p>Топ качество на пълнители за сметана с вкус</p>
                </div>
        </div>
    )
}

export default Header