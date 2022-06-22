import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


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
  return <div className="loader">  <Spinner animation="border" variant="danger" />
  </div>;
}


return (
    <div className="itemCard">
      <ItemDetail detail={producto} />
    </div>
  )
}
