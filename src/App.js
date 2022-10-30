import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Navbar from'./components/Navbar'
import Home from './routes/Home'
import Televisores from './routes/Televisores';
import Celulares from './routes/Celulares';
import Cart from './components/Cart';
import DetailId from './routes/itemDetailConteiner';
import CartProvider from './Context/CartContext';
 

function App() {
  return (
  <BrowserRouter>
   <CartProvider>
   <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Celulares' element={<Celulares/>}/>
    <Route exact path='/Televisores' element={<Televisores/>}/>
    <Route exact path='/Cart' element={<Cart/>}/>
    <Route exact path='/detail/:id' element={<DetailId/>} />
   </Routes>
   </CartProvider>
   
  </BrowserRouter>
     
    
      
        
    

      

    
    
  );
}

export default App;
