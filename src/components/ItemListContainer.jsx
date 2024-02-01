import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="image-container">
      <div className="centered-text">{greeting}</div>
      <img src="./src/assets/imagenes/11.jpg" alt="" />
    </div>
  );
};

export default ItemListContainer;
