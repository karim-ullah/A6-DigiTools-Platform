import React from 'react';

const NoCartCard = () => {
    return (
        <div className='bg-[#F9FAFC] py-12 rounded-2xl text-center space-y-3'>
            <img className='mx-auto' src="/src/assets/products/shopping-cart.png" alt="" />
            <h1 className='font-medium text-xl'>No Product Available</h1>
            <p>Go to products tab and click on buy now</p>
        </div>
    );
};

export default NoCartCard;