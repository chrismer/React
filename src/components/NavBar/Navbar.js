import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="NavContainer">
            <a href="/" className="logo">Logo</a>
            <ul className="navbar">
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Contacto</li>
            </ul>
            <div className="icons">
                <FontAwesomeIcon icon={faUser} />
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar
