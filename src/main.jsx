import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './utils/AuthContext'; // Asegúrate de que la ruta sea correcta
import './styles/scss/index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* Agregar AuthProvider para proporcionar el contexto a la app */}
      <App />
    </AuthProvider>
  </StrictMode>,
);
