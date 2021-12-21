import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../product';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {paramId} = useParams();

    useEffect(()=>{
        getProductById(paramId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })

        return(()=>{
            setProduct()
        })
    },[paramId])

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
