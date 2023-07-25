
import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import calculateCart from './utilities/calculate';
import Router from './routes/Router';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import { prefix } from '@fortawesome/free-solid-svg-icons';

export const ShopContext = createContext();

function App() {

  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [isOpenCartSection, setOpenCartSection] = useState(false);

  productsAndCartLoader()
  .then((result)=> {
    const {previousCart} = result;
    const { totalProduct } = calculateCart(previousCart);
    setTotal(totalProduct);
  });

  return (
    <div>
      <ShopContext.Provider value={{ total, cartState: [isOpenCartSection, setOpenCartSection], navState: [isOpen, setOpen], storedCart: [cart, setCart] }}>
        <Router />
      </ShopContext.Provider>
    </div>
  );
}

export default App;

