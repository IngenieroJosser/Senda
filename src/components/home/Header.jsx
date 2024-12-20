import '../../styles/scss/components/home/_header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Senda S.A.S</h1>

        <nav>
            <ul>
                <Link to='/' className='btn-link'><li>HOME</li></Link>
                <Link to='/products' className='btn-link'><li>COMPRA</li></Link>
                <Link to='' className='btn-link'><li>BLOG</li></Link>
                <Link to='' className='btn-link'><li>PÁGINA</li></Link>
                <Link to='/contact' className='btn-link'><li>CONTACTO</li></Link>

            </ul>
        </nav>
          <div className="login-register">
            <Link to='/login' className='btn-link'><li>INICIAR SESIÓN</li></Link>
          </div>
    </header>
  )
}

export default Header