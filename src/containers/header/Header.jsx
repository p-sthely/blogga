import React from 'react'
import './header.css'

import Navbar from '../../components/navbar/Navbar'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

const Title = () => (
    <h1>Insights about my personal and work life, and the in-betweens</h1>
)

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <div className='header__content'>
                <div>
                    <Breadcrumb />
                    <Title />
                </div>
            </div>
        </div>
    )
}

export default Header
