import { Pen } from 'lucide-react';
import React from 'react';

const CartCard = ({product, selectedProduct, setSelectedProduct}) => {

    const handleRemove = (product) =>{
        const updated = selectedProduct.filter(item => item.id !== product.id) 
        setSelectedProduct(updated)                                                           
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
                <button onClick={() => handleRemove(product)}>Remove</button>
            </div>
        </div>
    );
};

export default CartCard;