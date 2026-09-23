import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Portfolio from './pages/Portfolio'
import Products from './pages/Products'
import WhyChooseUs from './pages/WhyChooseUs'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path= "/" element ={<Home/>}/>
        <Route path= "/about" element ={<About/>}/>
        <Route path= "/services" element ={<Services/>}/>
        <Route path= "/services/:serviceId" element ={<ServiceDetail/>}/>
        <Route path= "/portfolio" element ={<Portfolio/>}/>
        <Route path= "/products" element ={<Products/>}/>
        <Route path= "/why-choose-us" element ={<WhyChooseUs/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
