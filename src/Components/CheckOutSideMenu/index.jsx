import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import OrderCard from '../OrderCard';
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const { isCheckoutSideMenuOpen, closeCheckOutSideMenu } = context;

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredProducts);
        // Reducir el contador
        context.setCount(context.count - 1);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.01.2024', // Agregar coma aquí
            products: context.cartProducts,
            totalProducts: context.cartProducts.length, // Corregir "length"
            totalPrice: totalPrice(context.cartProducts)
        };
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]); // Limpiar el carrito después del checkout
        closeCheckOutSideMenu(); // Cerrar el menú de checkout después del checkout
    }

    return (
        <aside 
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Mi Orden</h2>
                <button onClick={closeCheckOutSideMenu}>x</button> {/* Corregir el nombre de la función */}
            </div>
            <div className="overflow-y-auto">
                {context.cartProducts.length > 0 ? (
                    <ul>
                        {context.cartProducts.map(product => (
                            <li key={product.id}>
                                <OrderCard
                                    id={product.id}
                                    title={product.title}
                                    imageUrl={product.imageUrl}
                                    price={product.price}
                                    quantity={product.quantity}
                                    handleDelete={handleDelete}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay productos en el carrito.</p>
                )}
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total</span>
                    <span className='font-light'>${totalPrice(context.cartProducts)}</span>
                </p>
                <link to='/my-orders/last'>                
                <button onClick={handleCheckout}> {/* Cambiar el manejador de eventos */}
                    Checkout
                </button></link>
            </div>
        </aside>
    );
};

export default CheckoutSideMenu;