import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Servicios from './pages/Servicios';
import Footer from './components/Footer/Footer';


export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <SideMenu/>
        <Routes>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/galeria' element={<Galeria/>}/>  
            <Route path='/servicios' element={<Servicios/>}/>
            <Route path='*' element={<h1>Error 404: Page not found</h1>}/>

        </Routes>
        <Footer/>
      
      </BrowserRouter>
    </div>
  );
}


