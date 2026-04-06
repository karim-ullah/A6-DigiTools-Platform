import './App.css'
import Hero from './components/navbar/homepage/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <>
      <header className=' bg-base-100 shadow-sm sticky top-0 z-10'>
        <Navbar></Navbar>
      </header>

      <main>
        <Hero></Hero>
        <h1>test</h1>
      </main>
    </>
  )
}

export default App
