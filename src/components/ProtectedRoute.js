
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const ProtectedRoute = ({ children }) => {
  const { state } = useBlog();
  const { isAdmin } = state;

  if (!isAdmin) {
    return <Navigate to="/blog" replace />;
  }

  return children;
};

export default ProtectedRoute;
