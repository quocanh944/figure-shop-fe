import Header from './components/comon/Header'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/comon/Footer';
import Body1 from './pages/Body1';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Review from './pages/Review'
import ShopMain from './pages/ShopMain';
import Register from './pages/Register';

function App() {
  return (
    <div className='max-w-[1440px] tracking-[-0.6px] bg-backgroundprimary flex-shrink-0'>
      <Header/>
      <Routes>
        <Route path='/' element={<Body1/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/review' element={<Review/>} />
        <Route path='/shop' element={<ShopMain/>} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
