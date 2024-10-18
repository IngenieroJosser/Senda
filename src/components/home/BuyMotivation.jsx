import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../../styles/scss/components/home/_banner-motivation-buy.scss';

const BuyMotivation = () => {
  return (
    <section className="banner-motivation py-5 bg-light">
      <div className="section-header text-center mt-5">
        {/* <h3 className="section-title">Elegancia y Estilo para Cada Ocasión</h3> */}
        {/* <p className="section-subtitle">Encuentra la ropa perfecta que refleja tu personalidad y te hace sentir seguro/a en cada paso.</p> */}
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <blockquote>
              <p>“Nuestro suéter crop combina la suavidad del algodón con un diseño que realza tu estilo natural.”</p>
              {/* <div className="review-title text-uppercase">Crop Sweater</div> */}
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <blockquote>
              <p>“Siente la sofisticación con un toque moderno. Un diseño creado para destacar sin esfuerzo.”</p>
              {/* <div className="review-title text-uppercase">Dark Florish Onepiece</div> */}
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <blockquote>
              <p>“La comodidad de una camiseta oversize nunca fue tan elegante. Perfecta para cualquier ocasión.”</p>
              {/* <div className="review-title text-uppercase">Black Algodón Oversize</div> */}
            </blockquote>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BuyMotivation;
