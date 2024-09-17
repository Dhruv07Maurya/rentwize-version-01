import React from 'react';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const { state } = location;
  const userName = state?.name || 'Guest';

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <p>Start your shopping!</p>
    </div>
  );
}

export default Products;