import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item( { producto } ) {
    const { id, category_id, title, price, thumbnail } = producto;
  return (
    <div>
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="imgProducto" variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title className="lineClamp">{title}</Card.Title>
                <Card.Text className="categoria">{category_id}</Card.Text>
                <Card.Text>
                    Precio: $ {price}
                </Card.Text>
                <Link to={"/producto/" + id} className="lse botonPrincipal">Ver detalle</Link>
            </Card.Body>
        </Card>
    </div>
  )
}
