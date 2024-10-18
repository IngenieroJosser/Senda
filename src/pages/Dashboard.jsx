import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Bienvenido a nuestro Software Contable</h1>
      <div className="summary">
        <h2>Resumen del Día</h2>
        {/* Aquí puedes incluir gráficos y estadísticas */}
      </div>
      <div className="quick-links">
        <h2>Accesos Rápidos</h2>
        <ul>
          <li><Link to="/clients">Gestión de Clientes</Link></li>
          <li><Link to="/suppliers">Gestión de Proveedores</Link></li>
          <li><Link to="/products">Gestión de Productos</Link></li>
          <li><Link to="/sales">Gestión de Ventas</Link></li>
          <li><Link to="/invoices">Facturación</Link></li>
          <li><Link to="/inventory">Inventario</Link></li>
          <li><Link to="/reports">Reportes</Link></li>
          <li><Link to="/user-management">Administración de Usuarios</Link></li>
          <li><Link to="/settings">Configuración</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
