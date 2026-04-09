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
import CallToAction from "./components/navbar/homepage/footer/call to action/CallToAction";



function App() {
  
  const [selectedProduct, setSelectedProduct] = useState([])
  return (
    <>
      <header className=" bg-base-100 shadow-sm sticky top-0 z-10 bg-transparent backdrop-blur-md">
        <Navbar selectedProduct = {selectedProduct}></Navbar>
      </header>

      <main>

        <section>
          <Hero></Hero>
        </section>

        <section className="bg-[#9514FA] py-30">
          <Stats></Stats>
        </section>
        
        <section className="">
          <Products selectedProduct = {selectedProduct} setSelectedProduct = {setSelectedProduct}></Products>
        </section>
        
        
        <section className="bg-[#F9FAFC]">
        <GetStarted></GetStarted>
        </section>

        <section className="w-11/12 mx-auto py-30">
          <PricingCard></PricingCard>
        </section>

        <section className="bg-[#9514FA] py-30">
          <CallToAction></CallToAction>
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
