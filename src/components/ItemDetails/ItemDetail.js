import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../Counter/ItemCount'
import './ItemDetail.css'

// const cartButton = () => {
//     const [counter, setCounter] = useState(0);
    
//     const handleChange = (e) => {
        
//     }
//     return (
//         <div className='contador'>
//             <ItemCount stock={10} initial={0} onAdd={handleChange}/>
//         </div>
//     )
// }


const ItemDetail = ({product}) => {
    // const [counter, setCounter] = useState(true);
    const [showButton, setShowButton] = useState(true);

    const onAdd = () => {
        setShowButton(false);
    }

    const addToCart = (count)=>{
        setShowButton(false);  
    }

    return (
        <div className='ItemCard'>
            <h1>Item Detail</h1>
            <img className='ItemCard__image' src={product?.image} alt={product?.name}/>
            <h2 className='ItemCard__title'>{product?.name}</h2> 
            <p className='ItemCard__price'>{product?.price}</p>
            <p className='descripcion'>{product?.descripcion}</p>
            {/* <ItemCount stock={10} initial={0} onAdd={addToCart}/> */}
            {showButton ? <ItemCount onAdd={onAdd}/> : <Link to='/cart'>Finalizar Compra</Link>}
    
        </div>
    )
}

export default ItemDetail
