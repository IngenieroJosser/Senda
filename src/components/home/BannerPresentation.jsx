import '../../styles/scss/components/home/_banner-presentation.scss'
import ImageSlider from './ImageSlider'

const BannerPresentation = () => {
  return (
    <section className='banner-presentation'>
        <h1>Nueva Colección</h1>
        <p>Descubre la elegancia atemporal en cada prenda que ofrecemos. En nuestra colección, cada diseño refleja la herencia de un estilo refinado y la sofisticación que caracteriza a aquellos que valoran lo auténtico y lo clásico. Nuestros tejidos de calidad superior y los detalles meticulosamente elaborados garantizan no solo comodidad, sino también un aire de distinción que perdura en el tiempo. Con nosotros, no solo adquieres ropa, sino una declaración de estilo que resuena con la tradición y el gusto.</p>
        <ImageSlider />
    </section>
  )
}

export default BannerPresentation