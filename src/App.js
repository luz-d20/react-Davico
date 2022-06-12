import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    <ItemDetailContainer />
    </>
  );
}

export default App;
