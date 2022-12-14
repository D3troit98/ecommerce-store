import React, { createContext, useContext, useState, useEffect } from "react"

import { toast } from 'react-hot-toast'

const context = createContext()

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuanties) => prevTotalQuanties + quantity)

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                console.log(cartProduct)
                if (cartProduct?._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }

            })
            setCartItems(updatedCartItems)


        } else {
            product.quantity = quantity

            setCartItems([...cartItems, { ...product }])
        }
        toast.success(`${qty} ${product.name} added to the cart.`)
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.sort().filter((item) => item._id !== product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalPrice((prevTotalQuanties) => prevTotalQuanties - foundProduct.quantity)
        setCartItems(newCartItems)
    }
    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id)
        const newCartItems = cartItems.sort().filter((item) => item._id !== id)

        if (value === 'inc') {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuanties => prevTotalQuanties + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(prevTotalQuanties => prevTotalQuanties - 1)
            }
        }
    }

    const incQt = () => {
        setQty((prevQry) => prevQry + 1)
    }

    const deccQt = () => {
        setQty((prevQry) => {
            if (prevQry - 1 < 1) return 1
            return prevQry - 1
        })
    }


    return (
        <context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQt,
                deccQt,
                onAdd,
                setShowCart,
                toggleCartItemQuantity,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities,
            }}
        >
            {children}
        </context.Provider>
    )
}

export const useStateContext = () => useContext(context)