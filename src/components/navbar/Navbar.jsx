import React from 'react'
import './navbar.css'

import brandLogo from '../../assets/brand.png'

const Brand = () => (
    <img className='navbar__brand' src={brandLogo} alt='blogga' />
)

const NavLinks = () => (
    <ul className='navbar__navLinks'>
        <li><a href='#'>Design Tools</a></li>
        <li><a href='#'>Daily Updates</a></li>
        <li><a href='#'>Tutorials</a></li>
        <li><a href='#'>Library</a></li>
    </ul>
)

const Button = () => (
    <div className='navbar__button'>
        <a href="#">Subscribe</a>
    </div>
)

const Navbar = () => {
    return (
        <div className='navbar'>
            <Brand />
            <NavLinks />
            <Button />
        </div>
    )
}

export default Navbar
