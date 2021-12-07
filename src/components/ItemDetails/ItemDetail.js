import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    return (
        <div className='ItemCard'>
            <h1>Item Detail</h1>
            <img className='ItemCard__image' src={product.image} alt={product.name}/>
            <h2 className='ItemCard__title'>{product.name}</h2> 
            <p className='ItemCard__price'>{product.price}</p>
            <p className='descripcion'>{product.descripcion}</p>
        </div>
    )
}

export default ItemDetail
