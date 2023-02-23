import React from 'react'
import './cta.css'

import substract from '../../assets/substract.png'


const Cta = () => {
    return (
        <div className='cta'>
            <img src={ substract } alt='substract' />
            <div className='cta__content'>
                <h3>Subscribe to my blog.</h3>
                <p>I post fresh content every week.</p>
                <div className='cta__content__form'>
                    <input type='text' placeholder='Email adress' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Cta
