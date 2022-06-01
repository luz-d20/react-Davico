import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={'Bienvenidx a mi futuro e-commerce!'}/>
    </>
  );
}

export default App;
