import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Crear el contexto para el carrito de compras
export const ShoppingCartContext = createContext();

// Proveedor del contexto del carrito de compras
export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0); // Estado para contar los artículos en el carrito

    return (
        <ShoppingCartContext.Provider value={{ count, setCount }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

// Validación de las props usando prop-types
ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;
