import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductCard = ({ imageSrc, description, productDetail, onProductClick }) => {
    const context = useContext(ShoppingCartContext);

    const handleClick = (e) => {
        e.stopPropagation();
        context.addToCart(productDetail);
        context.openCheckOutSideMenu();
    };

    return (
        <div className="relative mb-2 w-full h-4/5" onClick={() => onProductClick(productDetail)}>
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{description}</span>
            <img className="w-full h-full object-cover rounded-lg" src={imageSrc} alt={description} />
            <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                onClick={handleClick}> 
                + 
            </div>
        </div>
    );
};

export default ProductCard;