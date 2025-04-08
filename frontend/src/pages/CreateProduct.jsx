import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function CreateProduct() {
  const [product, setProduct] = useState({ name: '', price: 0 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/product/create', product);
    navigate('/products');
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} required /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
