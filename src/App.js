import './App.css';
import Logo from './components/template/Logo';
import Menu from './components/template/Menu';
import Main from './components/template/Main';
import Footer from './components/template/Footer';
import CrudAluno from './components/CrudAluno/CrudAluno';
import Rotas from './Rotas';
import { BrowserRouter } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Menu />
        <Main/>
        <CrudAluno />
        <Footer />
      </div>
    </BrowserRouter>
  );
}