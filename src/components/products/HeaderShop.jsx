import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HeaderShop = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar el nombre del usuario desde el localStorage
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = async () => {
    try {
      // Hacer la solicitud al backend para cerrar sesión
      await axios.post('/api/logout');

      // Eliminar el token y el nombre del usuario del localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('userName');

      // Redirigir al usuario a la página de inicio de sesión
      navigate('/login', { replace: true });  // Con `replace: true` evitas que el usuario vuelva atrás
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header>
      <h1>Senda S.A.S</h1>

      <nav>
        <ul>
          <Link to='/' className='btn-link'><li>HOME</li></Link>
          <Link to='/contact' className='btn-link'><li>CONTACTO</li></Link>
        </ul>
      </nav>

      <div className="login-register">
        {/* Mostrar el nombre del usuario si está disponible */}
        {userName && <span>Hola, {userName}</span>}
        <li onClick={handleLogout} className='btn-link log-out'>CERRAR SESIÓN</li>
      </div>
    </header>
  );
};

export default HeaderShop;
