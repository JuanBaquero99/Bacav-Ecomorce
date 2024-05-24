import React, { useContext } from 'react';
import OrderCard from '../OrderCard';
import { ShoppingCartContext } from '../../Context';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const { isCheckoutSideMenuOpen, closeCheckOutMenu } = context;

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredProducts);
        // Reducir el contador
        context.setCount(context.count - 1);
    }

    return (
        <aside 
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Mi Orden</h2>
                <button onClick={closeCheckOutMenu}>x</button>
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
        </aside>
    );
};

export default CheckoutSideMenu;