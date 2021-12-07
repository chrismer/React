import './App.css';
import ItemListContainer from './components/Hero/ItemListContainer';
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Hola Coder'/>
      <ItemDetailContainer />
    </div>
  )
}

export default App;
