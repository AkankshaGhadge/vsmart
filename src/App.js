import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './website/layout/Master';
import Index from './website/maincomponant/Index';
import Category from './website/maincomponant/Category';
import Product from './website/maincomponant/Product';
import Login from './website/maincomponant/Login';
import Rajister from './website/maincomponant/Rajister';
import About from './website/maincomponant/About';
import Brand from './website/maincomponant/Brand';
import SubCatagory from './website/maincomponant/SubCatagory';

function App() {
  return (
    <div>
     
     
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Master Rcf={Index}/>}/>
        <Route path='/index'element={<Index/>}/>
        <Route path='/categories' element={<Category/>}></Route>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/ragister' element={<Rajister/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/brand'element={<Brand/>}/>
        <Route path='/product-shop/:cat_id/:sub_id'element={<SubCatagory/>}/>
      </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
