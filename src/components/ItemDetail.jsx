import React from 'react';
import './styles/ItemDetail.css';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <img src={`/imagenes/${item.img}`} alt={item.title} className="detail-image" />
      <h2>{item.title}</h2>
      {item.size && <p>Tamaño: {item.size}</p>}
      <p>Precio: ${item.price}</p>
    
    </div>
  );
};

export default ItemDetail;
