import React from 'react'
// import headerImage from '../../assets/bg-header-3.webp'

import './Header.css'

const Header = ({ title, imageUrl }) => {
    return (
        <div className='header-wrapper'>
            <img
                src={imageUrl}
                alt={title}
                loading="lazy"
            />
            <div className='header-wrapper-content'>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Header