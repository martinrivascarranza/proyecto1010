import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import ItemDetail from './ItemDetail';

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
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
