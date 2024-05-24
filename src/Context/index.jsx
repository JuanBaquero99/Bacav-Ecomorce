import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const openCheckOutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckOutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    const addToCart = (product) => {
        const existingProductIndex = cartProducts.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCartProducts = [...cartProducts];
            updatedCartProducts[existingProductIndex].quantity += 1;
            setCartProducts(updatedCartProducts);
        } else {
            setCartProducts(prevCartProducts => [...prevCartProducts, { ...product, quantity: 1 }]);
        }

        setCount(prevCount => prevCount + 1);
    };

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu,
            addToCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;