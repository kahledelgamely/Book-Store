import './App.css';
import Header from './header/Header';
import { Routes, Route } from 'react-router-dom';
import ShoppingCart from './payment/ShoppingCart';
import Footer from './Footer';
import Checkout from './payment/Checkout';
import ProductView from './productView/ProductView';
import Carousel from './Carousel';
import Books from './books/Books';
import {books} from "./data"


const App = () => {
  return (
    <div className="App ">
      <Header />
      <div className="container " style={{ marginTop: "65px" }}>
        <Routes>
          <Route path="/" element={<><Carousel /> <Books books = {books}/></>} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productView/:id" element={<ProductView />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
