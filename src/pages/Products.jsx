import React from "react";
import BannerOptions from "../components/products/BannerOptions";
import ProductGallery from "../components/products/ProductGallery";
import HeaderShop from "../components/products/HeaderShop";
import { useAuth } from '../utils/AuthContext'; // Asegúrate de que la ruta sea correcta

const Products = () => {
  const { currentUser  } = useAuth(); // Accede a los datos del usuario desde el contexto

  return (
    <>
      <HeaderShop />
      <BannerOptions />
      {currentUser  ? (
        <ProductGallery user={currentUser } />
      ) : (
        <p>Por favor, inicia sesión para ver los productos.</p>
      )}
    </>
  );
};

export default Products;