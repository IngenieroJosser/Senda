// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Suppliers from './pages/Suppliers';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Invoices from './pages/Invoices';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';
import UserManagement from './pages/UserManagement';
import Settings from './pages/Settings';
import AuthForm from './pages/AuthForm';
import Error404 from './pages/Error404';
import ProtectedRoute from './utils/ProtectedRoute'; // Importar ProtectedRoute
import { AuthProvider } from './utils/AuthContext'; // Importar AuthProvider

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/clients',
    element: <ProtectedRoute><Clients /></ProtectedRoute>, // Proteger la ruta
  },
  {
    path: '/suppliers',
    element: <ProtectedRoute><Suppliers /></ProtectedRoute>, // Proteger la ruta
  },
  {
    path: '/products',
    element: <ProtectedRoute><Products /></ProtectedRoute>, // Proteger la ruta
  },
  {
    path: '/sales',
    element: <ProtectedRoute><Sales /></ProtectedRoute>, // Proteger la ruta
  },
  {
    path: '/invoices',
    element: <ProtectedRoute><Invoices /></ProtectedRoute>, // Proteger la ruta
  },
  {
    path: '/inventory',
    element: <ProtectedRoute><Inventory /></ProtectedRoute>, // Proteger la ruta
  },
  {
    path: '/reports',
    element: <ProtectedRoute><Reports /></ProtectedRoute>, // Proteger la ruta
  },
  {
    path: '/user-management',
    element: <ProtectedRoute><UserManagement /></ProtectedRoute>, // Proteger la ruta
  },
  {
    path: '/settings',
    element: <ProtectedRoute><Settings /></ProtectedRoute>, // Proteger la ruta
  },
  {
    path: '/login',
    element: <AuthForm />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
