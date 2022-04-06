import './global.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import PageNotFound from './pages/404page';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element = {<Landing />}  ></Route>
          <Route path='/shop' element = {<Shop />} ></Route>
          <Route path='/contact' element = {<Contact />} ></Route>
          <Route path='/product-detail/:id' element = {<ProductDetails />} ></Route>
          <Route path='/cart' element = {<Cart />}></Route>
          <Route path='/about' element = {<About />}></Route>
          <Route path='*' element = {<PageNotFound />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
