import React, { useEffect, useState } from 'react'
import { getItem } from '../../product';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(()=>{
        const item = getItem()
        item.then(item =>{
            setProduct(item)
            console.log(item);
        })

        return(()=>{
            setProduct()
        })
    },[])

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
