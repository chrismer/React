import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../product';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {paramId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getProductById(paramId).then(item => {
            setProduct(item)
            setLoading(false)
        }).catch(err  => {
            console.log(err)
        })

        return(()=>{
            setProduct()
        })
    },[paramId])

    return (
        <div>
            {loading ? <h1>loading</h1> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer
