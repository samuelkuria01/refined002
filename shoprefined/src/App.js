import './App.css';
import NavBar from './Component/NavBar';
import{Routes, Route} from 'react-router-dom'
import Shop from './Component/Shop';
import Home from './Component/Home';
import ClothDetail from './Component/ClothDetail';
import Cart from './Component/Cart';
import About from './Component/About';
import Checkout from './Component/Checkout';


function App() {
  return (
    <div className="App">
     <NavBar />


     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:clothId' element={<ClothDetail />}/>
        <Route path='/about' element={<About />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>


    </div>
  );
}

export default App;
