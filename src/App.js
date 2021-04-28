import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderPage from './pages/OrderPage';
import CartPage from './pages/CartPage';
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/zamow'>
          <OrderPage />
        </Route>
        <Route path='/koszyk'>
          <CartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
