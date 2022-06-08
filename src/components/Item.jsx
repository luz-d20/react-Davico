import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './Item.css';

export default function Item( { producto } ) {
    const { title, price, thumbnail } = producto;
  return (
    <div>
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="imgProducto" variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title className="lineClamp">{title}</Card.Title>
                <Card.Text>
                    Precio: $ {price}
                </Card.Text>
                <Button className="botonPrincipal">Ver detalle</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
