import { faSmileWink } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ItemCount, { ButtonOnAdd } from '../Counter/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className="greeting">{greeting}</h1>
            <FontAwesomeIcon className="smile" icon={faSmileWink}/>
            <ItemCount stock={10}/>
           
        </div>
    )
}

export default ItemListContainer