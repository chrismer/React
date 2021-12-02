import React from 'react'
import './Item.css'

const Item = ({product}) => {
    return (
        <div className='CardItem'>
            <img src={product.image} alt={product.name} className='ImagenCard'/>
            <div className='ItemContainer'>
                <h2 className='ItemTitle'>
                    {product.name}
                </h2>
            </div>
            <p className='InfoCategoria'>
                Categoria: {product.category}
            </p>
            <div className='Precios'>
                <span><del>$ {product.old_price} </del></span>
                <p className='InfoPrecio'>
                    {product.price}
                </p>
            </div>    
            <button className='ButtonDetail'>Ver detalle</button>
        </div>
    )
}

export default Item
