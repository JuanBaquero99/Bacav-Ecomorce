import React, { useContext } from 'react';
import ProductCard from '../ProductCard';
import { ShoppingCartContext } from '../../Context';

const Card = () => {
    const context = useContext(ShoppingCartContext);

    const products = [
        {
            imageSrc: '/assets/img/2.jpeg',
            description: 'Ropa Interior Masculina',
            price: '20COP',
            productDetail: {
                id: 1,
                images: ['/assets/img/2.jpeg'],
                title: 'Ropa Interior Masculina',
                price: '20COP',
                description: 'Descripción del producto por unidad.'
            }
        },
        {
            imageSrc: '/assets/img/3.jpeg',
            description: 'Ropa Interior Masculina',
            price: '80COP',
            productDetail: {
                id: 2,
                images: ['/assets/img/3.jpeg'],
                title: 'Ropa Interior Masculina',
                price: '80COP',
                description: 'Descripción del producto por docena.'
            }
        }
    ];

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg text-black text-sm">
            {products.map((product) => (
                <div key={product.productDetail.id} onClick={() => context.openProductDetail()}>
                    <ProductCard 
                        imageSrc={product.imageSrc} 
                        description={product.description} 
                        productDetail={product.productDetail}
                        onProductClick={() => context.setProductToShow(product.productDetail)}
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