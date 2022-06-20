import { createContext, useState } from "react";

export const CartContext = createContext()

const {Provider} = CartContext;

const MyProvider = ({children}) => {
    
    const [cart, setCart] = useState();

    //Método Some - Item Detail - se encarga de determinar si el producto a agregar ya está en el carrito o no - retorna booleano
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    //Método Add - Item Detail - se encarga de agregar un producto al carrito
    const addToCart = (item, qty) => {
        const newCart = [...cart, {...item, qty}];
        if (isInCart(newCart.id)) {
            const findProduct = newCart.find(item => item.id === newCart.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            auxArray[productIndex].qty += qty;
            setCart(auxArray);
        }
        else {
            setCart([...cart], newCart)
        }
    }

    //Vaciar el carrito - Cart - Botón
    const emptyCart = () => {
        setCart([]);
    }

    //Método filter - Cart - se encarga en función del ID de retornar un nuevo array sin el producto seleccionado
    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }

    //Método Reduce - CartWidget - Retorna la cantidad total de unidades que tiene nuestro state cart
    const getItemQuantity = (item) => {
        return cart.reduce((acc, x) => acc += x.qty , 0)
    }
    
    //Método Reduce - Cart - Retorna e precio total del carrito
    const getCartTotal = () => {
        return cart.reduce((acc, x) => acc += x.price * x.qty , 0)
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