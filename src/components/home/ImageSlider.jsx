import React, { useState } from 'react';
import '../../styles/scss/components/home/_image-slider.scss'; // Asegúrate de crear este archivo para los estilos
import img1 from '../../assets/img/product1.jpg'; // Ajusta la ruta a tus imágenes
import img2 from '../../assets/img/product2.jpg';
import img3 from '../../assets/img/product3.jpg';
import img4 from '../../assets/img/product1.jpg';
import img5 from '../../assets/img/product2.jpg';
import img6 from '../../assets/img/product3.jpg';

const ImageSlider = () => {
  const slides = [
    { image: img1, name: 'BLACK ALGODON OVERSIZE', description: 'Camiseta oversize negra de algodón, cómoda y versátil.', price: '$45,000' },
    { image: img2, name: 'DARK FLORISH ONEPIECE', description: 'Mono oscuro con estampado floral, elegante y chic.', price: '$90,000' },
    { image: img3, name: 'CROP SWEATER', description: 'Suéter corto, perfecto para un estilo moderno y casual.', price: '$50,000' },
    { image: img4, name: 'Producto 1', description: 'Descripción del producto 1' },
    { image: img5, name: 'Producto 2', description: 'Descripción del producto 2' },
    { image: img6, name: 'Producto 3', description: 'Descripción del producto 3' },
  ]; // Usar un arreglo de objetos

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + (slides.length / 3)) % (slides.length / 3)
    );
  };

  const displayImages = () => {
    const start = currentIndex * 3;
    return slides.slice(start, start + 3).map((slide, index) => (
      <div className="slide" key={index}>
        <img src={slide.image} alt={`Slide ${index}`} />
        <h2>{slide.name}</h2>
        <p>{slide.description}</p>
        <h3>{slide.price}</h3>
        <a href="#">Descubre ahora</a>
      </div>
    ));
  };

  return (
    <div className="slider">
      <button className="slider-button" onClick={prevSlide}>
        &#10094; {/* Flecha izquierda */}
      </button>
      <div className="slider-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {displayImages()}
      </div>
      <button className="slider-button" onClick={nextSlide}>
        &#10095; {/* Flecha derecha */}
      </button>
    </div>
  );
};

export default ImageSlider;
