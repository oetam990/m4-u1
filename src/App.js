import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';


import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PropiedadesPage from './pages/PropiedadesPage';
import ServiciosPage from './pages/ServiciosPage';
import SobreNosotrosPage from './pages/SobreNosotrosPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/propiedades" element={<PropiedadesPage />}></Route>
          <Route path="/servicios" element={<ServiciosPage />}></Route>
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />}></Route>
          <Route path="/contacto" element={<ContactoPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
