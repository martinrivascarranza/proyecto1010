
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className='cart'>
      <FaShoppingCart />
      <span>3</span> 
    </div>
  );
};

export default CartWidget;
