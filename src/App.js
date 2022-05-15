import logo from './logo.svg';
import './App.css';
import './index.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomeScreen from './components/screens/HomeScreen';
import { BrowserRouter , Route , Link , Switch, Routes } from 'react-router-dom';
import CartScreen from './components/screens/CartScreen';


function App() {
  return (
   <>
   <Navbar />
   <BrowserRouter>
     <Routes>
     <Route path='/' exact element={<HomeScreen />} />
     <Route path='/cart' exact element={<CartScreen />} />
     </Routes>
     
   </BrowserRouter>
   </>
  );
}

export default App;
