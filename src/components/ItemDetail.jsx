import React from 'react';
import './ItemDetail.css';
import ItemCount from '../components/ItemCount';
import swal from 'sweetalert';


const agregar = (count) => {
    if (count === 1) {
      swal("Se agregó 1 producto");
    } else {	
    swal(`Se agregaron ${count} productos.`);
    }
}

export default function ItemDetail ( { category_id, title, thumbnail, price } ) {
  return (
    <div className="item-detail-contenedor">
            <div className="item-detail-featured-img">
                <img className="item-detail-img grow" src={thumbnail} alt={title}/>
            </div>
        <div className="item-detail-info">
            <h2>{title}</h2>
            <h6>{category_id}</h6>
            <h4>$ {price}</h4>
            <ItemCount initial={1} stock={10} onAdd={agregar} />
        </div>
    </div>
   )
}
