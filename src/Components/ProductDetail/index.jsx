import React, { useContext } from 'react';
import './styles.css';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    const { productToShow, isProductDetailOpen, closeProductDetail } = context;

    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <button onClick={closeProductDetail}>x</button>
            </div>
            {productToShow && (
                <>
                    <figure className='px-6'>
                        <img 
                            className='w-full h-full rounded-lg' 
                            src={productToShow.images && productToShow.images.length > 0 ? productToShow.images[0] : '/default-image.jpg'} 
                            alt={productToShow.title || 'Producto sin título'}
                        />
                    </figure>
                    <div className='flex flex-col p-6'>
                        <span className='font-medium text-2xl'>
                            {productToShow.price ? `$${productToShow.price}` : 'Precio no disponible'}
                        </span> 
                        <span className='font-medium text-md'>
                            {productToShow.title || 'Título no disponible'}
                        </span>
                        <span className='font-medium text-sm'>
                            {productToShow.description || 'Descripción no disponible'}
                        </span>
                    </div>
                </>
            )}
        </aside>
    );
};

export default ProductDetail;