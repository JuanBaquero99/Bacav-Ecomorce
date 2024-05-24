import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductCard = ({ imageSrc, description, productDetail, onProductClick }) => {
    const context = useContext(ShoppingCartContext);

    const handleClick = (e) => {
        e.stopPropagation(); // Evitar la propagación del evento de clic
        context.setCount(context.count + 1);
        context.openProductDetail();
        context.setProductToShow(productDetail);
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

const Card = () => {
    const context = useContext(ShoppingCartContext);

    const products = [
        {
            imageSrc: '/assets/img/2.jpeg',
            description: 'Ropa Interior Masculina',
            price: '$20COP',
            productDetail: {
                images: ['/assets/img/2.jpeg'],
                title: 'Ropa Interior Masculina',
                price: '20COP',
                description: 'Descripción del producto por unidad.'
            }
        },
        {
            imageSrc: '/assets/img/3.jpeg',
            description: 'Ropa Interior Masculina',
            price: '$80COP',
            productDetail: {
                images: ['/assets/img/3.jpeg'],
                title: 'Ropa Interior Masculina',
                price: '80COP',
                description: 'Descripción del producto por docena.'
            }
        }
    ];

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg text-black text-sm">
            {products.map((product, index) => (
                <div key={index} onClick={() => context.openProductDetail()}>
                    <ProductCard 
                        imageSrc={product.imageSrc} 
                        description={product.description} 
                        productDetail={product.productDetail}
                        onProductClick={() => {}}
                    />
                    <p className="flex justify-between mb-2">
                        <span className="text-sm font-light">{product.price.includes('20') ? 'Por Unidad' : 'Por Docena'}</span>
                        <span className="text-lg font-medium">{product.price}</span>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Card;