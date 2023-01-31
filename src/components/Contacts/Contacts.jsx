import React from 'react'

import { BsTelephone, BsClock } from 'react-icons/bs'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import './Contacts.css'
const Contacts = () => {
    return (
        <div className='contacts-wrapper'>
            <h1 className='contacts-wrapper-title'>Свържи се с нас</h1>
            <div className='contacts-container'>
                <p> <span><BsClock /></span>Работно време 24/7</p>
                <p><span><MdOutlineDeliveryDining /></span>Безплатна доставка за Благоевград и Банско!</p>

            </div>
            <h1 className='contacts-wrapper-phone'> За поръчки се обадете на : <span><BsTelephone /></span> 0899140304</h1>

        </div>
    )
}

export default Contacts