import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products.json'; 
import '../components/styles/ItemListContainer.css';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredProducts = categoryId ?
            products.filter(product => product.category === categoryId) :
            products;
          resolve(filteredProducts);
        }, 500); 
      });
    };

    fetchProducts().then(data => {
      setItems(data);
    });
  }, [categoryId]); 

  return (
    <div className="grid-container">
      <ItemList items={items} />
    </div>
  );
};;

export default ItemListContainer;

