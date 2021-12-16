import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { getCategories } from '../../product'


const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])
    console.log(categories);

    return (
        <nav className="NavContainer">
            <Link to={'/'}><h3 className="logo">DecoHome</h3></Link>
            {/* <ul className="navbar">
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Contacto</li>
            </ul> */}
            <div className="categories">
                {categories.map(cat => <Link key={cat.id} to={`/category/${cat.id}`}>{cat.description}</Link>)}
            </div>    
            <div className="icons">
                <FontAwesomeIcon icon={faUser} />
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar
