import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderPage from './pages/OrderPage';
import CartPage from './pages/CartPage';
import NavigationBar from './components/NavigationBar';
function App() {
  return (
    <div>
      <NavigationBar />
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
