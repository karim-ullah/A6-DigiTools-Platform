import { useState } from "react";
import "./App.css";
import Hero from "./components/navbar/homepage/Hero";
import Products from "./components/navbar/homepage/products/Products";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/navbar/homepage/footer/Footer";



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

      
        
      <footer>
        <Footer></Footer>
      </footer>


      {/* ToastContainer */}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
