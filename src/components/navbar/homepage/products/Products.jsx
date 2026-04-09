import React, { Suspense, use, useState } from "react";
import Product from "./Product";
import CartedProduct from "./CartedProduct";


const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const Products = ({ selectedProduct, setSelectedProduct}) => {
  const productsPromise = fetchProducts();
    
    // console.log(productsData);
    
    const [selected, setSelected] = useState('products')
  return (
    <div className="w-11/12 mx-auto space-y-3 py-30">
      <div className="text-center space-y-3">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#001931]">Premium Digital Tools</h1>
        <p className="text-sm">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="mx-auto border-1 border-[#f6f6f6] rounded-full w-fit py-2 px-2 bg-white space-x-2">
        <button type="button" onClick={() => setSelected('products')} className={`font-medium rounded-full ${selected === 'products' ? 'btn btn-primary' : 'bg-white'}`}>Products</button>
        <button type="button" onClick={() => setSelected('cart')} className={`font-medium rounded-full ${selected === 'cart' ? 'btn btn-primary' : 'bg-white'}`}>Cart ({selectedProduct.length})</button>
      </div>

      {
        selected === 'products' ? <Suspense
          fallback={
            <div className="text-center py-10">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >

         <Product productsPromise={productsPromise} selectedProduct = {selectedProduct} setSelectedProduct = {setSelectedProduct}></Product> </Suspense>
         : <CartedProduct selectedProduct = {selectedProduct} setSelectedProduct = {setSelectedProduct}></CartedProduct>
      }
    </div>
  );
};

export default Products;
