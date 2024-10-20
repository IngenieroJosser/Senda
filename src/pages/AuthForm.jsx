import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/scss/components/log/_auth-form.scss';

const AuthForm = () => {
  const navigate = useNavigate();
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoginError, setIsLoginError] = useState(''); // Estado para errores de inicio de sesión

  const handleOpenRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setRegisterModalOpen(false);
    setError('');
    setSuccessMessage('');
    setIsLoginError(''); // Limpiar el error de inicio de sesión al cerrar el modal
  };

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
      setSuccessMessage('Registro exitoso!');
      setTimeout(handleCloseRegisterModal, 2000);
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error al registrar al usuario:', err.response ? err.response.data : err.message);
      setError('Registro fallido, intenta nuevamente'); // Mensaje de error
      setTimeout(handleCloseRegisterModal, 2000); // Cerrar el modal después de 2 segundos
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: document.getElementById('login-email').value,
      password: document.getElementById('login-password').value,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/login', user); // Cambia la URL según tu ruta de inicio de sesión
      console.log('Usuario iniciado sesión:', response.data);
      navigate('/products'); // Cambia '/dashboard' a la ruta del componente al que deseas redirigir
    } catch (err) {
      console.error('Error al iniciar sesión:', err.response ? err.response.data : err.message);
      setIsLoginError('Credenciales incorrectas. Intenta nuevamente.'); // Mensaje de error de inicio de sesión
    }
  };

  const handleGoHome = () => {
    navigate('/'); // Cambia la ruta al home
  };

  return (
    <div className="AuthForm">
      <p onClick={handleGoHome} style={{ cursor: 'pointer' }}>🔙</p>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLoginSubmit}> {/* Manejo de inicio de sesión */}
        <label htmlFor="login-email">Correo electrónico:</label>
        <input type="email" id="login-email" required />
        <label htmlFor="login-password">Contraseña:</label>
        <input type="password" id="login-password" required />
        <button type="submit">Iniciar sesión</button>
      </form>
      <a href="#" className="link" onClick={handleOpenRegisterModal}>
        ¿No tienes una cuenta? Regístrate
      </a>

      {/* Mostrar errores de inicio de sesión si los hay */}
      {isLoginError && <p className="error-message" style={{ color: 'red' }}>{isLoginError}</p>}

      {/* Mostrar errores si los hay */}
      {error && <p className="error-message">{error}</p>}

      {/* Modal de Registro */}
      {isRegisterModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Regístrate</h2>
            <form className='modal-register' onSubmit={handleRegisterSubmit}>
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

            {/* Mostrar mensaje de éxito o error */}
            {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}
            {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
