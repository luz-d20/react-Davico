import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const {cart, getItemQuantity, getCartTotal} = useContext(CartContext);

  return (
    <>
    <h2>Carrito</h2>
    <table className="cart-body">
      <thead className="cart-headers">
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr className="cart-item" key={item.id}>
            <td>
              <img className="cart-item-img" src={item.thumbnail} alt={item.name} />
              <p className="cart-item-title">{item.title}</p>
            </td>
            <td className="cart-item-price">${item.price}</td>
            <td>
              {getItemQuantity()}
            </td>
            <td>{getCartTotal(item.price, item.quantity)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="cart-footer">
          <h3>Total: ${getCartTotal()}</h3>
          <Link to="/cart"><button className="botonPrincipal">Continuar al Pago</button></Link>
        </div>
          </>
  )
}
