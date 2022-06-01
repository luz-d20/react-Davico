import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Badge from 'react-bootstrap/Badge';
import { Button} from 'react-bootstrap';



export default function CartWidget( { contador } ) {
  return (
    <IconContext.Provider value={{ color: "rgba(255, 255, 255, .55)", size: "2em", className:"iconos"}}>
      <div>
        <FaShoppingCart />
        <Badge bg="light" text="secondary" pill>{ contador }</Badge>
      </div>
      <FaUserCircle />
    </IconContext.Provider>
  )
}
