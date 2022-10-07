import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Navbar from'./components/Navbar'
import Detail from './routes/Detail';
import Home from './routes/Home'
import Televisores from './routes/Televisores';
import Celulares from './routes/Celulares';
import CartWidget from './components/CartWidget';
import DetailId from './routes/DetailId';

function App() {
  return (
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Celulares' element={<Celulares/>}/>
    <Route exact path='/Televisores' element={<Televisores/>}/>
    <Route exact path='/Cart' element={<CartWidget/>}/>
    <Route exact path='/detail' element={<Detail/>}/>
    <Route exact path='/detail/:id' element={<DetailId/>}/>
   </Routes>
  </BrowserRouter>
     
    
      
        
    

      

    
    
  );
}

export default App;
