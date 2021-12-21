import React, { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [CantidadTotal, setCantidadTotal] = useState(0);

    const addItem = (item, cantidad) => {
        const flag = isInCart(item.id);

        if (flag) {
            let productoRep = cart.find(el => el.itemId === item.id);
            let newArratCart = cart;
            newArratCart[productoRep].cantidad += cantidad;
            setCart(newArratCart);
        }else{
            let newItem = { itemId: item.id, name: item.name, price: item.price, cantidad: cantidad };
            setCart([...cart, newItem]);
        }
        return 
    };
    
    const removeItem = (id) => {
        let isIn = isInCart(id);
        if (isIn) {
            let newCart = cart.filter(el => el.itemId !== id);
            setCart(newCart);
        }else {
            console.log('No se encontro el producto')
        }
    };

    const CleanCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        const encontrar = cart.find(el => el.item.id === id);
        const isIn = encontrar === undefined ? false : true;
        return isIn;
    };

    const getQuantity = () => {
        let total = 0;
        cart.forEach(el => {
            total += el.cantidad;
        })
        return total;
    };

    const getTotal = () => {
        let total = 0;
        cart.forEach(el => {
            let subTotal = el.cantidad * el.price;
            total += subTotal;
        })
        return total;
    };

    return (
        <CartContext.Provider value={{
            cart, addItem, removeItem, getQuantity, getTotal, CleanCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = React.useContext(CartContext);
    return context;
};


    // return (
    //     <CartContext.Provider value = {{
    //         cart, CantidadTotal,
    //         addItem, removeItem, CleanCart,
    //     }}>
    //         {children}
    //     </CartContext.Provider>
    // )

    // const updateItem = (item) => {
    //     const updatedItem = {
    //         ...item,
    //         quantity: item.quantity + 1
    //     }
    //     setCart(cart.map(cartItem => cartItem.id === item.id ? updatedItem : cartItem))
    // }


// }

// export default CartContextProvider;