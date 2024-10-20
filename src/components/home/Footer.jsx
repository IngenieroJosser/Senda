import '../../styles/scss/components/home/_footer.scss'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import x from '../../assets/icons/X.png'
import dhl from '../../assets/icons/dhl-icon.png'
import visa_card from '../../assets/icons/visa-card.png'
import paypal from '../../assets/icons/paypal-card.png'
import mastercard from '../../assets/icons/master-card.png'

const Footer = () => {
  return (
    <footer>
        <h2>SENDA</h2>

        <div className="flex-footer">
            <p>&copy; Derechos reservados a Senda</p>

            <div className="icons-social">
                <a href="#"><img src={facebook} alt="facebook" /></a>
                <a href="#"><img src={instagram} alt="instagram" /></a>
                <a href="#"><img src={x} alt="x" /></a>
            </div>

            <div className="flex-footer-payment">
                <p>Enviamos con: </p>
                <img src={dhl} alt="dhl" />
                <p>Opciones de pago: </p>
                <img src={visa_card} alt="visa card" />
                <img src={paypal} alt="paypal" />
                <img src={mastercard} alt="master card" />
            </div>
        </div>
    </footer>
  )
}

export default Footer