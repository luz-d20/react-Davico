import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
  const {id} = useParams();

  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState(null);

//Fetch a cambiar por un find cuando pasemos a Firebase
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setCargando(false);
      }
      )
      .catch(err => {
        setError(true);
        setCargando(false);
      }
      );
  }, [id]);
//Fin del fetch a cambiar

if (cargando) {
  return <div>Cargando...</div>;
}


return (
    <div className="itemCard">
      <ItemDetail category_id={producto.category_id} title={producto.title} description={producto.condition} thumbnail={producto.pictures[0].url} price={producto.price} />
    </div>
  )
}
