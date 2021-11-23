import './App.css';
import ItemListContainer from './components/Hero/ItemListContainer';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Hola Coder'/>
    </div>
  );
}

export default App;
