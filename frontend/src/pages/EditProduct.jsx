import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', price: 0 });

  useEffect(() => {
    axios.get('/product/all').then(res => {
      const found = res.data.find(p => p.id === id);
      if (found) setProduct(found);
    });
  }, [id]);

  const handleChange = (e) => {
    setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/product/update/${id}`, product);
    navigate('/products');
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} required /><br />
        <input name="price" type="number" value={product.price} onChange={handleChange} required /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
