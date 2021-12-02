import { faSmileWink } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import ItemCount from '../Counter/ItemCount'
import './ItemListContainer.css'
import { getProducts } from '../../product'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        const list = getProducts()
        list.then(list =>{
            setProducts(list)
        })

        return(()=>{
            setProducts([])
        })
    },[])

    return (
        <div className='ItemListContainer'>
            <h1 className="greeting">{greeting}</h1>
            <FontAwesomeIcon className="smile" icon={faSmileWink}/>
            <ItemCount stock={10}/>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer