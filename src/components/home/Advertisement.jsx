import '../../styles/scss/components/home/_advertisement.scss'
import ad from '../../assets/img/product4.jpg'

const Advertisement = () => {
  return (
    <section className='advertisement-flex'>
        <img src={ad} alt="imagen de anuncio para una nueva colección" />
        <div className="content-ad">
            <h2>COLECCION CLASICA DE INVIERNO</h2>
            <p>Sumérgete en la calidez y el estilo con nuestra nueva colección de invierno. Cada prenda ha sido diseñada para ofrecerte confort y elegancia en los días más fríos. Desde abrigos clásicos hasta suéteres acogedores, cada pieza refleja nuestra dedicación a la calidad y al detalle. Este invierno, vístete con lo mejor y mantén tu estilo inigualable mientras enfrentas el frío. <br />
            Los suéteres de nuestra colección, elaborados con materiales suaves y cálidos, son el complemento ideal para tus outfits de invierno. Disponibles en una variedad de colores y estilos, son perfectos para crear capas y mantenerte abrigado durante todo el día.</p>
        </div>
    </section>
  )
}

export default Advertisement