import './App.css';
import NavBar2 from './components/NavBar2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound';
import PokeShopProvider from './context/PokeShopProvider';
import CartContainer from './containers/CartContainer';

function App() {
  return (
    <PokeShopProvider>
      <BrowserRouter>
          <NavBar2></NavBar2>
          <Switch>
            <Route exact path="/" component={ItemListContainer}></Route>
            <Route exact path='/category/:categoryId' component ={ItemListContainer}></Route>
            <Route exact path='/detail/:pokemonName' component = {ItemDetailContainer}></Route>
            <Route exact path='/cart' component = {CartContainer}></Route>
            <Route component = {NotFound}></Route>
          </Switch>
      </BrowserRouter>
    </PokeShopProvider>

  );
}

export default App;
