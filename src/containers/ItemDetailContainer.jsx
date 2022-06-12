import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../components/ItemDetail';
import imgRemera from '../img/remera-termica.jpg';


/* Producto hardcoded hasta que lleguemos a Firebase */
const getItem = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve([
    {
      id: 'MLA81209898',
      categoria: 'Remeras',
      title: 'Remera térmica de algodón',
      precio: '$2500',
      thumbnail: imgRemera,
      description: 'La remera térmica de !Montagne es el complemento ideal para los días más fríos, ya sea para entrenamiento o para la vida diaria. Cuello redondo y detalle de reborde como terminación. Mantiene el cuerpo seco despues de la actividad deportiva, evitando la pérdida del calor natural que produce el cuerpo y favoreciendo la transpiración.',
    }
  ]);
  }, 2000);
});


export default function ItemDetailContainer() {
  
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState();

  useEffect(() => {
    getItem.then(data => {
      setProducto(data[0]);
  });
  }, []);


  return (
    <>
    {producto === undefined ? (
      <h1>Cargando...</h1>
    ) : (
    <div className="itemCard">
      <ItemDetail categoria={producto.categoria} title={producto.title} description={producto.description} thumbnail={producto.thumbnail} precio={producto.precio} />
    </div>
    )}
    </>
  )
}
