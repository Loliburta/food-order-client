import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./components/NavigationBar";
import GlobalStyle from "./GlobalStyle";
import "./_app.css";
function App() {
  return (
    <div>
      <GlobalStyle />
      <NavigationBar />
      <Switch>
        {/* proccess... is for it to work on ghpages or any other hosting, since the homepage there is not localhost/ but oscris/userlogin/ */}
        <Route path={`${process.env.PUBLIC_URL}/`} exact>
          <MainPage />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/zamow`}>
          <OrderPage />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/koszyk`}>
          <CartPage />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/logowanie`}>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
