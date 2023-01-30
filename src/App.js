import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="home-wrapper">
      <Header />
      <Products />
    </div>
  );
}

export default App;
