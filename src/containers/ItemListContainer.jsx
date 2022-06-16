import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import './ItemListContainer.css';

export default function ItemListContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const api = 'https://api.mercadolibre.com/sites/MLA/search?q=ropa-de-monta%C3%B1a';

const task = new Promise ((resolve, reject) => {
  setTimeout(() => {
      fetch(`${api}&limit=20`)
        .then(res => res.json())
        .then (res => {
          (!id) ? setProductos(res.results) : setProductos((res.results).filter(item => item.category_id == id));
        })
        .catch(err => console.log("Hubo un error: " + err));
    }, 2000);
  }, [])
  

  return (
    <div className="containerList">
      <ItemList productos={productos} />
    </div>
  )
}
