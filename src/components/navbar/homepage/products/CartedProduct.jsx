import React, { useState } from 'react';
import Product from './Product';
import CartCard from './CartCard';
import NoCartCard from './NoCartCard';
import { toast } from 'react-toastify';

const CartedProduct = ({selectedProduct, setSelectedProduct}) => {

    const [items, setItems] = useState(selectedProduct)
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0).toFixed(2)

    const handleCheckOut = () => {
        selectedProduct.length === 0 ? toast.error('No Product Available') : toast.success('Removed all Products')
        selectedProduct = []
        
        setSelectedProduct(selectedProduct)
        
        setItems(selectedProduct)

         
    }
    return (
        <div className='w-full lg:w-[60%] mx-auto border-1 rounded-sm p-10 space-y-3'>
            <h1 className='font-bold text-2xl'>Your Cart</h1>
            {
                selectedProduct.length === 0 ? <NoCartCard></NoCartCard> : selectedProduct.map(product => <CartCard key={product.id} product = {product} ></CartCard>)
            }

            <div className='flex justify-between items-center'>
                <span>Total</span>
                <p className='font-bold'>${totalPrice}</p>
            </div>
            <button type='button' onClick={handleCheckOut} className='btn btn-primary w-full rounded-full'>Proceed to checkout</button>
        </div>
    );
};

export default CartedProduct;