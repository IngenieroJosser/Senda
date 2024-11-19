import React, { useState } from 'react';
import { useAuth } from '../../utils/AuthContext'; // Asegúrate de que la ruta sea correcta
import '../../styles/scss/components/products/_productGallery.scss';
import ArrayProductsGallery from '../products/components/ArrayProductsGallery';

const ProductGallery = () => {
    const { currentUser } = useAuth(); // Obtener el usuario actual del contexto
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [purchaseSuccessModalVisible, setPurchaseSuccessModalVisible] = useState(false);
    const [purchaseDetails, setPurchaseDetails] = useState(null);
    const [cart, setCart] = useState([]);  // Estado para almacenar productos en el carrito

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        setSelectedColor('');
        setSelectedSize('');
    };

    const handlePurchase = async () => {
        if (!selectedColor || !selectedSize) {
            alert('Por favor selecciona una talla y un color');
            return;
        }
    
        if (!currentUser || !currentUser.id) {
            alert('Inicia sesión para realizar una compra');
            console.error('User ID no está disponible!');
            return;
        }
    
        const purchaseData = {
            user_id: currentUser.id,  // Asegúrate de que user_id se esté obteniendo correctamente
            product_name: selectedProduct.name_product,
            product_price: selectedProduct.price,
            selected_color: selectedColor,
            selected_size: selectedSize,
        };
        console.log('Datos de la compra:', purchaseData);
    
        try {
            const response = await fetch('http://localhost:3000/api/purchases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(purchaseData),
            });
    
            if (response.ok) {
                setCart((prevCart) => [...prevCart, purchaseData]);  // Añadir al carrito
                setPurchaseSuccessModalVisible(true);
                setPurchaseDetails({
                    name: selectedProduct.name_product,
                    price: selectedProduct.price,
                    img: selectedProduct.img,
                });
                handleCloseModal();  // Cerrar el modal después de la compra
            } else {
                const data = await response.json();
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error al realizar la compra:', error);
        }
    };
    

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

            {/* Modal de descripción del producto */}
            {isModalOpen && selectedProduct && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>X</button>
                        <h2>{selectedProduct.name_product}</h2>
                        <img src={selectedProduct.img} alt={selectedProduct.alt} />
                        <p>{selectedProduct.description}</p>
                        <h5>{selectedProduct.price}</h5>
                        
                        <div className="additional-info">
                            <h4>Tallas Disponibles</h4>
                            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} required>
                                <option value="">Selecciona una talla</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                            <h4>Colores Disponibles</h4>
                            <div className="color-options">
                                {selectedProduct.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`color-swatch ${selectedColor === color ? 'selected' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <button onClick={handlePurchase}>Comprar</button>
                    </div>
                </div>
            )}

            {/* Modal de compra exitosa */}
            {purchaseSuccessModalVisible && purchaseDetails && (
                <div className="purchase-success-modal">
                    <div className="purchase-success-content">
                        <button onClick={() => setPurchaseSuccessModalVisible(false)}>Cerrar</button>
                        <p>Producto añadido al carrito exitosamente</p>
                        <img src={purchaseDetails.img} alt={purchaseDetails.name} />
                        <h5>{purchaseDetails.name}</h5>
                        <p>Precio: {purchaseDetails.price}</p>
                    </div>
                </div>
            )}

            {/* Carrito de compras */}
            <div className="shopping-cart">
                <h3>Carrito de compras</h3>
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.product_name} - {item.product_price} - {item.selected_color} - {item.selected_size}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProductGallery;
