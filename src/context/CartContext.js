import { createContext, useState } from "react";

export const CartContext = createContext()
const {Provider} = CartContext;
const MyProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    //Is in cart determina si el producto a agregar ya está en el carrito o no
    const isInCart = (id) => {
        return cart.some((detail) => detail.id === id);
    }

    //AddToCart agrega un producto al carrito, o aumenta la cantidad si ya está en el carrito
    const addToCart = (detail, count, id) => {
        const newItem = {
            ...detail,
            count,
            id,
        };
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id);            
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            auxArray[productIndex].count += count;
            setCart(auxArray);
        }
        else {
            setCart([...cart, newItem]);
        }
    }

    //EmptyCart vacia el carrito
    const emptyCart = () => {
        setCart([]);
    }

    //RemoveFromCart elimina un producto cuyo ID coincida con el que se le pasa por parámetro.
    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }
    
    //GetItemQuantity retorna la cantidad total de unidades que tiene nuestro state cart
    const getItemQuantity = () => {
        return cart.reduce((acc, x) => acc += x.count , 0)
    }
    
    //GetCartTotal retorna el precio total de todos los productos que tiene el carrito
    const getCartTotal = () => {
        return cart.reduce((acc, x) => (acc += x.price * x.count) , 0)
    }

    
    return <Provider value={{
        cart,
        isInCart,
        addToCart,
        emptyCart,
        removeFromCart,
        getItemQuantity,
        getCartTotal
    }}>{children}</Provider>
}
export default MyProvider;