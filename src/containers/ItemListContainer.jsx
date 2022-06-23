import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import './ItemListContainer.css';
import { Spinner } from 'react-bootstrap';


export default function ItemListContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  const api = 'https://api.mercadolibre.com/sites/MLA/search?q=ropa-de-monta%C3%B1a';

const task = new Promise ((resolve, reject) => {
  setTimeout(() => {
      fetch(`${api}&limit=20`)
        .then(res => res.json())
        .then (res => {
          (!id) ? setProductos(res.results) : setProductos((res.results).filter(item => item.category_id == id));
          setCargando(false);
        })
        .catch(err => console.log("Hubo un error: " + err));
    }, 2000);
  }, [])
  
if (cargando) {
  return <div className="loader">  <Spinner animation="border" variant="danger" />
  </div>;
}
  return (
    <div className="containerList">
      <ItemList productos={productos} />
    </div>
  )
}
