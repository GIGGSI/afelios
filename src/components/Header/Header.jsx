import React from 'react'
// import headerImage from '../../assets/bg-header-3.webp'

import './Header.css'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <img
                src='https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/bg-header-3.webp?alt=media&token=c737fde6-5199-4d80-9b5d-868e7f6c85fe'
                alt="Парти Балони"
                loading="lazy"
            />
            <div className='header-wrapper-content'>
                <h1>Топ качество на пълнители за сметана с вкус</h1>
            </div>
        </div>
    )
}

export default Header