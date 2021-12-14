import './App.css';
import ItemListContainer from './components/Hero/ItemListContainer';
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCount from './components/Counter/ItemCount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='category/:categoryId' element={<ItemListContainer />} />
        <Route path='detail/:paramId' element={<ItemDetailContainer />} />
        <Route path='count' element={<ItemCount />} />
        {/* <ItemListContainer greeting='Hola Coder'/>
        <ItemDetailContainer /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
