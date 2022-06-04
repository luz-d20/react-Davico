import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer'
import ItemCount from './components/ItemCount';

/* Import temporal hasta que vuele la function onAdd */
import swal from 'sweetalert';


function App() {
  
  const onAdd = (count) => {
    if (count === 1) {
      swal("Se agregó 1 producto");
    } else {	
    swal(`Se agregaron ${count} productos.`);
  }
}

  return (
    <>
    <NavBar />
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    <ItemListContainer greeting={'Placeholder'}/>
    </>
  );
}

export default App;
