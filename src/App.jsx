import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Componente de la pantalla de inicio
import Clients from './pages/Clients'; // Componente de gestión de clientes
import Suppliers from './pages/Suppliers'; // Componente de gestión de proveedores
import Products from './pages/Products'; // Componente de gestión de productos
import Sales from './pages/Sales'; // Componente de gestión de ventas
import Invoices from './pages/Invoices'; // Componente de facturación
import Inventory from './pages/Inventory'; // Componente de stock/inventario
import Reports from './pages/Reports'; // Componente de reportes y estadísticas
import UserManagement from './pages/UserManagement'; // Componente de administración de usuarios
import Settings from './pages/Settings'; // Componente de configuración
import Login from './pages/Login'; // Componente de login/registro
import Error404 from './pages/Error404';

// Configuración de las rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />, // Redirigir a la pantalla de inicio
  },
  {
    path: '/home',
    element: <Home />, // Componente de inicio
  },
  {
    path: '/clients',
    element: <Clients />, // Componente de gestión de clientes
  },
  {
    path: '/suppliers',
    element: <Suppliers />, // Componente de gestión de proveedores
  },
  {
    path: '/products',
    element: <Products />, // Componente de gestión de productos
  },
  {
    path: '/sales',
    element: <Sales />, // Componente de gestión de ventas
  },
  {
    path: '/invoices',
    element: <Invoices />, // Componente de facturación
  },
  {
    path: '/inventory',
    element: <Inventory />, // Componente de stock/inventario
  },
  {
    path: '/reports',
    element: <Reports />, // Componente de reportes
  },
  {
    path: '/user-management',
    element: <UserManagement />, // Componente de administración de usuarios
  },
  {
    path: '/settings',
    element: <Settings />, // Componente de configuración
  },
  {
    path: '/login',
    element: <Login />, // Componente de login/registro
  },
  {
    path: '*',
    element: <Error404 />, // Componente de error 404
  },
  // Otras rutas...
]);

// Componente principal de la aplicación
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
