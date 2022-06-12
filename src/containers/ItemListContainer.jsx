import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import './ItemListContainer.css';

export default function ItemListContainer( { greeting } ) {
  const [productos, setProductos] = useState([]);
  const api = 'https://api.mercadolibre.com/sites/MLA/search?q=ropa-de-monta%C3%B1a';

const task = new Promise ((resolve, reject) => {
  setTimeout(() => {
      fetch(`${api}&limit=20`)
        .then(res => res.json())
        .then (data => {
          setProductos(data.results);
        })
        .catch(err => console.log("Hubo un error: " + err));
    }, 2000);
  }, [])
  
  
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}