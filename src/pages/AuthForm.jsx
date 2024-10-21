import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../utils/AuthContext'; // Asegúrate de que la ruta sea correcta
import '../styles/scss/components/log/_auth-form.scss';

const AuthForm = () => {
  const { login } = useAuth(); // Acceder al método login del contexto
  const navigate = useNavigate();
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Función para abrir el modal de registro
  const handleOpenRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  // Función para cerrar el modal de registro
  const handleCloseRegisterModal = () => {
    setRegisterModalOpen(false);
    setError('');
    setSuccessMessage('');
  };

  // Mostrar mensajes de éxito o error
  const showMessage = (message, isSuccess) => {
    if (isSuccess) {
      setSuccessMessage(message);
    } else {
      setError(message);
    }
    setTimeout(() => {
      setSuccessMessage('');
      setError('');
    }, 3000); // Mensaje visible por 3 segundos
  };

  // Registro de usuarios
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/register-users', user);
      console.log('Usuario registrado:', response.data);
      showMessage('Registro exitoso!', true);
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error al registrar al usuario:', err.response ? err.response.data : err.message);
      showMessage('Registro fallido, intenta nuevamente', false); // Mensaje de error
    }
  };

  // Inicio de sesión de usuarios
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/login', user);
      console.log('Usuario inició sesión:', response.data);
      showMessage('Inicio de sesión exitoso!', true); // Mensaje de éxito
      login(); // Llama al método login del contexto
      navigate('/products'); // Cambia '/products' a la ruta deseada
    } catch (err) {
      console.error('Error al iniciar sesión:', err.response ? err.response.data : err.message);
      showMessage('Credenciales incorrectas. Intenta nuevamente.', false); // Mensaje de error de inicio de sesión
    }
  };

  return (
    <div className="AuthForm">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="login-email">Correo electrónico:</label>
        <input
          type="email"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="login-password">Contraseña:</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <a href="#" className="link" onClick={handleOpenRegisterModal}>
        ¿No tienes una cuenta? Regístrate
      </a>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}

      {/* Modal de Registro */}
      {isRegisterModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Regístrate</h2>
            <form className="modal-register" onSubmit={handleRegisterSubmit}>
              <label htmlFor="register-name">Nombre:</label>
              <input
                type="text"
                id="register-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="register-email">Correo electrónico:</label>
              <input
                type="email"
                id="register-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="register-password">Contraseña:</label>
              <input
                type="password"
                id="register-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Registrarse</button>
            </form>
            <button className="close-button" onClick={handleCloseRegisterModal}>
              Cerrar
            </button>

            {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}
            {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
