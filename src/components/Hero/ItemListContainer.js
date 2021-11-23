import { faSmileWink } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className="greeting">{greeting}</h1>
            <FontAwesomeIcon className="smile" icon={faSmileWink}/>
        </div>
    )
}

export default ItemListContainer