import logo from './logo.svg';
import './App.css';
import Navbar from '../src/component/Navbar';
import { Carousel } from 'bootstrap';
import MyCarousel from './component/Home';
import Home from './component/Home';
import { Route } from 'react-router-dom';
import Switch from "react-switch";
import Product from './component/Product';


function App() {
  return (
    <div>
        <Navbar>
         <Switch>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/products" Component={Product}></Route>
         </Switch>
        </Navbar>
      <Home></Home>

     
    </div>
  );
}

export default App;
