import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../Counter/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    // const [counter, setCounter] = useState(true);
    // const [cantidad, setCantidad] = useState(0);
    const [showButton, setShowButton] = useState(true);

    const onAdd = () => {
        console.log('Agregado al carrito')
        setShowButton(false);
    }

    // const addToCart = (count)=>{
    //     setCantidad(count);  
    // }

    return (
        <div className='ItemCard'>
            <h1>Item Detail</h1>
            <img className='ItemCard__image' src={product?.image} alt={product?.name}/>
            <h2 className='ItemCard__title'>{product?.name}</h2> 
            <p className='ItemCard__price'>{product?.price}</p>
            <p className='descripcion'>{product?.descripcion}</p>
            {/* {cantidad > 0 ? <ItemCount stock={10} initial={1} onAdd={addToCart}/> : <Link to='/cart'>Finalizar Compra</Link>} */}
            {showButton ? <ItemCount onAdd={onAdd}/> :<Link to='/cart'>Finalizar Compra</Link>}
    
        </div>
    )
}

export default ItemDetail
