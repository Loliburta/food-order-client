import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderPage from './pages/OrderPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import NavigationBar from './components/NavigationBar';
import GlobalStyle from './GlobalStyle';
function App() {
  return (
    <div>
      <GlobalStyle />
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
        <Route path='/logowanie'>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
