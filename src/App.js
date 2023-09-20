import './App.css';
import Logo from './components/template/Logo';
import Menu from './components/template/Menu';
import Main from './components/template/Main';
import Header from './components/template/Header';
import Footer from './components/template/Footer';

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <Menu />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
