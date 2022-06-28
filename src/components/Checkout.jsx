import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import './Checkout.css'

export default function Checkout() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const db = getFirestore();
    const orderCollection = collection (db, 'pedidos');
    const sentOrder = false;


    const { cart, getCartTotal } = useContext(CartContext);
    
    
    function handleClick() {
        const order = {
            buyer: {name, email, phone},
            items: cart,
            total: getCartTotal()
        }
        console.log(order)
        addDoc(orderCollection, order).then(({id}) => {
                console.log(id)
            }
            )
            .catch(error => {
                console.log(error)
            }
        )
        sentOrder = true;
    }

    if (cart.length === 0) {
        return (
            <div className="checkoutBody">
                <h1>Tu carro está vacío</h1>
                <Link to="/cart"><button className="botonPrincipal">Volver al carro</button></Link>
            </div>
        )
    }

    return (
        <div className="checkoutBody">
            {sentOrder ?
            <>
                <h1>¡Gracias por tu pedido!</h1>
                <h2>¡Tu pedido ha sido enviado!</h2>
                <p>Nos pondremos en contacto para gestionar el pago y el envío!</p>
                <Link to="/"><button className="botonPrincipal">Volver al inicio</button></Link>
            </>
    :
    <>
        <h1>¡Gracias por tu pedido!</h1>
        <h2>Completá con tu información</h2>
        <p>Llená tu información en el formulario para completar la compra. Nos pondremos en contacto para gestionar el pago y el envío!</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre..." />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu email..." />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Tu teléfono..." />
        <button onClick={handleClick} className="botonPrincipal">Comprar</button>
        </>
    }
    </div>
  )
}
