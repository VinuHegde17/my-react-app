import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Axio() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className="App">
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
          <p>Ratings: {product.rating.rate}</p>
          <p>Number of stocks: {product.rating.count}</p>
          <img src={product.image} alt={product.title} style={{height:'300px', width:'250px'}} />
          
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Axio;
