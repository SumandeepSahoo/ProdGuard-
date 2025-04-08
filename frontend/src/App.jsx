// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        } />
        <Route path="/products/create" element={
          <ProtectedRoute>
            <CreateProduct />
          </ProtectedRoute>
        } />
        <Route path="/products/edit/:id" element={
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </div>
  );
}
