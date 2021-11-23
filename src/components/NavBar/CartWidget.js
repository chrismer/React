import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart}/><span>7</span>
        </div>    
    
    )
}

export default CartWidget
