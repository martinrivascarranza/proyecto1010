import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json'; 
import '../components/styles/ItemListContainer.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <div className="grid-container">
      {items.map((item) => (
        <div key={item.id} className="card">
          <h2>{item.title}</h2>
          <Link to={`/item/${item.id}`}>
            <img src={`/imagenes/${item.img}`} alt={item.title} style={{cursor: "pointer"}} />
          </Link>
          {item.size && <p>Tamaño: {item.size}</p>}
          <p>Precio: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
