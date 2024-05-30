import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../OrderCard';
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const { isCheckoutSideMenuOpen, closeCheckOutSideMenu, cartProducts } = context;

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    };

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.01.2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        };
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        closeCheckOutSideMenu();
    };

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Mi Orden</h2>
                <button onClick={closeCheckOutSideMenu}>x</button>
            </div>
            <div className="overflow-y-auto">
                {cartProducts.length > 0 ? (
                    <ul>
                        {cartProducts.map(product => (
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
                    <span className='font-light'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button onClick={handleCheckout}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    );
};

export default CheckoutSideMenu;