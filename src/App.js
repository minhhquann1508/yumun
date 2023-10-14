import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Product />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
