import React from 'react';
import './styles/product-list.scss';

const Home:React.FC=()=> {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">E-commerce Product List</h1>
      <div className="product-grid">
        <div className="product-card">
          <h3>Product 1</h3>
          <p>Description of product 1.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
        <div className="product-card">
          <h3>Product 2</h3>
          <p>Description of product 2.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
        <div className="product-card">
          <h3>Product 3</h3>
          <p>Description of product 3.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;