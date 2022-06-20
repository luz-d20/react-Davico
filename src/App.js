import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Footer from './components/Footer';
import MyProvider from './context/CartContext';
import Cart from './components/Cart';


function App() {
  return (
    <>
    <BrowserRouter>
      <MyProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer category_id={"MLA429175"}/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/producto/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        <Footer />
      </MyProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
