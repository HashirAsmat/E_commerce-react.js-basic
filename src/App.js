
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home/>}></Route> 
    <Route exact path='/products' element={<Products/>}></Route> 
    <Route exact path='/cart' element={<Cart/>}></Route> 
    <Route exact path='/products/:id' element={<Product/>}></Route> 
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
