import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../styles/scss/components/home/_banner-motivation-buy.scss'; // Asegúrate de crear este archivo para los estilos

// Importa tus imágenes de productos
import img1 from '../../assets/img/product1.jpg';
import img2 from '../../assets/img/product2.jpg';
import img3 from '../../assets/img/product3.jpg';

SwiperCore.use([Navigation, Pagination]);

const MotivationBuy = () => {
  return (
    <section className="banner-motivation py-5 bg-light">
      <div className="section-header text-center mt-5">
        <h3 className="section-title">¡ELEGANCIA Y COMODIDAD PARA CADA OCASIÓN!</h3>
      </div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <img src={img1} alt="Producto 1" />
            <blockquote>
              <p>“Disfruta de la suavidad y estilo de nuestro suéter crop.”</p>
              <div className="review-title text-uppercase">Crop Sweater</div>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <img src={img2} alt="Producto 2" />
            <blockquote>
              <p>“Un diseño único que combina lo clásico con lo moderno.”</p>
              <div className="review-title text-uppercase">Dark Florish Onepiece</div>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <img src={img3} alt="Producto 3" />
            <blockquote>
              <p>“La camiseta oversize de algodón, perfecta para un look relajado.”</p>
              <div className="review-title text-uppercase">Black Algodón Oversize</div>
            </blockquote>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="testimonial-swiper-pagination d-flex justify-content-center mb-5">
        <span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 1"></span>
        <span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 2"></span>
        <span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 3"></span>
      </div>
    </section>
  );
};

export default MotivationBuy;
