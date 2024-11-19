import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { currentUser  } = useAuth(); // Asegúrate de que currentUser  contenga la información del usuario autenticado

    if (!currentUser ) {
        // Si no hay usuario autenticado, redirige a la página de inicio de sesión
        return <Navigate to="/login" />;
    }

    return children; // Si el usuario está autenticado, renderiza los hijos
};

export default ProtectedRoute;