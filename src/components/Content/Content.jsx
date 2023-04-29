import React from 'react'
import goodTime from '../../assets/it-is-good-time.webp'
import womamGiving from '../../assets/woman-giving.webp'

import './Content.css'

const contentData = [
    {
        id: 1,
        imagUrl: womamGiving,
        title: 'Райски газ за вас!',
        subTitle: 'За да може партито да се превърне в Рай!'

    },
    {
        id: 2,
        imagUrl: goodTime,
        title: 'Предлагаме голямо разнообразие от най - силните балони! ',
        subTitle: 'Изпълни купона с райска атмосфера и опитай различните ни вкусове!'
    }
]

const Content = () => {
    return (
        <div className='content-wrapper'>
            {contentData.map((item) => (
                <div key={item.id} className="content-container">
                    <div className='content-image-container'>
                        <img src={item.imagUrl} alt={item.title} loading="lazy" />
                    </div>
                    <div className={`content-info-container content-info-container-${item.id}`}>
                        <h1 className='content-info-container-title'>{item.title}</h1>
                        <h3 className='content-info-container-subTitle'>{item.subTitle}</h3>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Content