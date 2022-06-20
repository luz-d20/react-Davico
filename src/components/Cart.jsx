import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const {cart} = useContext(CartContext);

  return (
    <div>{cart}</div>
  )
}
