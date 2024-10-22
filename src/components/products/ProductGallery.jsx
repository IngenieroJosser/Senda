import React, { useState } from 'react';
import '../../styles/scss/components/products/_productGallery.scss';
import ArrayProductsGallery from '../products/components/ArrayProductsGallery';

const ProductGallery = ({ user }) => { // Asegúrate de que el usuario esté pasado como prop
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartModalVisible, setCartModalVisible] = useState(false);
    const [cartMessage, setCartMessage] = useState('');

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handlePurchase = async () => {
        if (!selectedProduct || !user) return; // Asegúrate de que hay un producto seleccionado y un usuario
    
        const purchaseData = {
            user_id: user.id, // ID del usuario que realiza la compra
            product_name: selectedProduct.name_product,
            product_price: selectedProduct.price,
        };
    
        try {
            const response = await fetch('http://localhost:3000/api/purchases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(purchaseData),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Compra realizada:', result);
                setCartMessage('Compra realizada con éxito!');
            } else {
                throw new Error('Error al realizar la compra');
            }
        } catch (error) {
            console.error(error);
            setCartMessage('Error al realizar la compra, intenta nuevamente.');
        }
    
        setCartModalVisible(true);
        setTimeout(() => {
            setCartModalVisible(false);
        }, 5000);
    };

    const handleAddToCart = () => {
        // Simular la adición al carrito (puedes incluir lógica adicional aquí)
        const isSuccess = Math.random() > 0.5; // Simulación de éxito o error (50% de probabilidad)

        if (isSuccess) {
            setCartMessage(`Producto añadido al carrito: ${selectedProduct.name_product}`);
        } else {
            setCartMessage('Error, intenta nuevamente.');
        }

        setCartModalVisible(true);
        handleCloseModal(); // Cierra el modal después de añadir al carrito

        // Ocultar el modal del carrito después de 5 segundos
        setTimeout(() => {
            setCartModalVisible(false);
        }, 5000);
    };

    if (!ArrayProductsGallery || !ArrayProductsGallery.length) {
        return <p>No hay productos disponibles.</p>;
    }

    return (
        <div className="product-gallery-grid">
            {ArrayProductsGallery.map((product, index) => (
                <button 
                    key={index} 
                    className='btn-modal-description' 
                    onClick={() => handleOpenModal(product)}
                >
                    <div className="product-item">
                        <img src={product.img} alt={product.name_product} />
                        <span>{product.name_product}</span>
                        <p>{product.star}</p>
                        <h5>{product.price}</h5>
                    </div>
                </button>
            ))}

            {isModalOpen && selectedProduct && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>
                            X
                        </button>
                        <h2>{selectedProduct.name_product}</h2>
                        <img src={selectedProduct.img} alt={selectedProduct.alltr} />
                        <p>{selectedProduct.description}</p>
                        <h5>{selectedProduct.price}</h5>
                        
                        {/* Información adicional */}
                        <div className="additional-info">
                            <h4>Tallas Disponibles</h4>
                            <select>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                            <h4>Tipo de Tela</h4>
                            <p>{selectedProduct.fabric || 'Información no disponible'}</p>

                            <h4>Colores Disponibles</h4>
                            <div className="color-options">
                                {selectedProduct.colors.map((color, index) => (
                                    <div 
                                        key={index} 
                                        className="color-swatch" 
                                        style={{ backgroundColor: color }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <button onClick={handlePurchase}>Comprar</button> {/* Cambiar a botón de compra */}
                    </div>
                </div>
            )}

            {/* Modal para mostrar el mensaje del carrito */}
            {cartModalVisible && (
                <div className="cart-modal-overlay">
                    <div className="cart-modal-content">
                        <p>{cartMessage}</p>
                        {selectedProduct && <img src={selectedProduct.img} alt={selectedProduct.name_product} />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductGallery