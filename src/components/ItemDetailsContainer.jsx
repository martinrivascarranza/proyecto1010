import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const product = products.find((product) => product.id.toString() === itemId);
    setItem(product);
  }, [itemId]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail">
      <img src={`/imagenes/${item.img}`} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      {item.size && <p>Tamaño: {item.size}</p>}
      <p>Precio: ${item.price}</p>
      {/* Agrega aquí más detalles según sea necesario */}
    </div>
  );
};

export default ItemDetailContainer;
