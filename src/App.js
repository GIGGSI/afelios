import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="home-wrapper">
      <Header />
      <Products />
      <Contacts />
    </div>
  );
}

export default App;
