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

export default function ItemDetail ( { categoria, title, description, thumbnail, precio } ) {
  return (
    <div className="item-detail-contenedor">
            <div className="item-detail-featured-img">
                <img className="item-detail-img grow" src={thumbnail} alt={description}/>
            </div>
        <div className="item-detail-info">
            <h2>{title}</h2>
            <h6>{categoria}</h6>
            <p>{description}</p>
            <h4>{precio}</h4>
            <ItemCount initial={1} stock={10} onAdd={agregar} />
        </div>
    </div>
   )
}
