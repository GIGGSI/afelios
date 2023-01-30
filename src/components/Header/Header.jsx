import React from 'react'
import ballons from '../../assets/ballons.jpg'
import headerImage from '../../assets/bg-header.jpg'

import './Header.css'
const baseUrl = 'https://img.freepik.com/free-photo/positive-smiling-woman-dancing-wall_197531-13039.jpg?w=1060&t=st=1675071516~exp=1675072116~hmac=7d938f93d354c2dc575670d8b495ddc163eed9f1d0191159c3e321ae7acc6a18'
const baseUrl2= 'https://img.freepik.com/free-photo/young-woman-celebrating-birthday-party_23-2148946049.jpg?w=1060&t=st=1675071459~exp=1675072059~hmac=d561bf7447575ca1bc47c1e277b019a6f2c83f2269304399a4d8f5b9d1da5b12'
const baseUrl3 ='https://img.freepik.com/free-photo/pretty-brunette-girl-with-wineglass-dancing-black-background-elegant-female-model-enjoying-birthday-party_197531-26176.jpg?w=1060&t=st=1675071596~exp=1675072196~hmac=64d5c48eaa948a8b5d34a9527b0b73f428a327d0d5e65516af527dfaed7a219c'
const baseUrl4 ='https://img.freepik.com/free-photo/appealing-blonde-woman-red-dress-celebrating-winter-holidays-with-friends_197531-13057.jpg?w=1060&t=st=1675071759~exp=1675072359~hmac=b874f015efd6950b7ff88be01b199023ebf29c36f8e38153458f80082658415e'
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