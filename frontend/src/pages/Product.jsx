import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    axios.get('/product/all')
      .then(res => setProducts(res.data))
      .catch(err => {
        if (err.response?.status === 401) logout();
      });
  }, [logout]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Product List</h2>
      <button onClick={() => navigate('/products/create')}>+ Add Product</button>
      <button onClick={logout} style={{ marginLeft: '1rem' }}>Logout</button>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => navigate(`/products/edit/${p.id}`)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
