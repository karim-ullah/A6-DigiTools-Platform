import { useState } from "react";
import "./App.css";
import Hero from "./components/navbar/homepage/Hero";
import Products from "./components/navbar/homepage/products/Products";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/navbar/homepage/footer/Footer";
import GetStarted from "./components/navbar/homepage/getstartedsection/GetStarted";
import Stats from "./components/navbar/homepage/stats/Stats";
import PricingCard from "./components/navbar/homepage/pricingCard/PricingCard";



function App() {
  
  const [selectedProduct, setSelectedProduct] = useState([])
  return (
    <>
      <header className=" bg-base-100 shadow-sm sticky top-0 z-10 bg-transparent backdrop-blur-md">
        <Navbar selectedProduct = {selectedProduct}></Navbar>
      </header>

      <main>

        <Hero></Hero>

        <section className="bg-[#9514FA] py-15">
          <Stats></Stats>
        </section>
        
        <Products selectedProduct = {selectedProduct} setSelectedProduct = {setSelectedProduct}></Products>
        
        
        <section className="bg-[#F9FAFC]">
        <GetStarted></GetStarted>
        </section>

        <section className="w-11/12 mx-auto py-15">
          <PricingCard></PricingCard>
        </section>
        
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
