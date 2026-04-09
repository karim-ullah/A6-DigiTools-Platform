import { Pen } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CartCard = ({product, selectedProduct, setSelectedProduct, setItems}) => {

    

    const handleRemove = (product) =>{
        const updated = selectedProduct.filter(item => item.id !== product.id) 
        setSelectedProduct(updated)
        setItems(updated)
        toast.success('Product removed')
        
                                                                 
    }
    return (
        <div className='bg-[#F9FAFC] p-5 rounded-2xl flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <Pen></Pen>
                <div>
                    <h3 className='font-medium text-xl'>{product.name}</h3>
                    <p>$ {product.price}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemove(product)} className='btn'>Remove</button>
            </div>
        </div>
    );
};

export default CartCard;