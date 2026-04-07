import React, { use } from 'react';
import ProductCard from './ProductCard';

const Product = ({productsPromise, selectedProduct, setSelectedProduct}) => {
    const productsData = use(productsPromise)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-1 border-[#F2F2F2] p-6'>
            {
                productsData.map(productData => <ProductCard key={productData.id} productData = {productData} selectedProduct = {selectedProduct} setSelectedProduct = {setSelectedProduct}></ProductCard>)
            }
        </div>
    );
};

export default Product;