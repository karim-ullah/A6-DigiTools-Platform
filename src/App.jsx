import { useState } from "react";
import "./App.css";
import Hero from "./components/navbar/homepage/Hero";
import Products from "./components/navbar/homepage/products/Products";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";



function App() {
  
  const [selectedProduct, setSelectedProduct] = useState([])
  return (
    <>
      <header className=" bg-base-100 shadow-sm sticky top-0 z-10 bg-transparent backdrop-blur-md">
        <Navbar selectedProduct = {selectedProduct}></Navbar>
      </header>

      <main>
        <Hero></Hero>
        
          <Products selectedProduct = {selectedProduct} setSelectedProduct = {setSelectedProduct}></Products>
        
      </main>


      {/* ToastContainer */}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
