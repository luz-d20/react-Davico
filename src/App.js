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
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyARqyjefhTlACUQM2KARBft_goUk0QBs9Q",
  authDomain: "react-davico.firebaseapp.com",
  projectId: "react-davico",
  storageBucket: "react-davico.appspot.com",
  messagingSenderId: "1069044923785",
  appId: "1:1069044923785:web:e8e27bb791a7a9cd6c7558",
  measurementId: "G-1L3MDGK65J"
});


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
