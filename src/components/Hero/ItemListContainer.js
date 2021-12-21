import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts } from '../../product'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
// import {collection, getDoc,getDocs,query, where,getDoc, doc} from 'firebase/firestore'
// import {db} from '../../services/firebase/firebase'
// import Item from '../Item/Item'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()
    // const [loading, setLoading] = useState(true);

    useEffect(()=>{
        // firebase 
        // setLoading(true);
        // getDoc (collection(db, 'items')).then(QuerySnapshot => {
        //     const products = QuerySnapshot.docs.map(doc => {
        //         return {
        //             id: doc.id,
        //             ...doc.data()
        //         }
        //     })
        //     setProducts(products)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false);
        // })

        // consulta where y query
        // getDocs(query(collection(db, 'items'), where('categoryId', '==', categoryId))).then(QuerySnapshot => {
        //     const products = QuerySnapshot.docs.map(doc => {
        //         return {
        //             id: doc.id,
        //             ...doc.data()
        //         }
        //     })

        // consulta de 1 Item desde itemdetal
        // getDocs(doc(db, 'items', paramId)).then(QuerySnapshot => {
        //     const product = {id: querySnapshot.id, ...querySnapshot.data()}
        //     setProducts(product)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false);
        // })



        getProducts(categoryId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        // const list = getProducts()
        // list.then(list =>{
        //     setProducts(list)
        // })

        return(()=>{
            setProducts([])
        })
    },[categoryId])

    return (
        <div className='ItemListContainer'>
            <h1 className="greeting">{greeting}</h1>
            {/* <FontAwesomeIcon className="smile" icon={faSmileWink}/> */}
            {/* <ItemCount stock={10}/> */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer