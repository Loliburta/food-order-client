import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Strona Główna</Link>
          </li>
          <li>
            <Link to='/zamow'>Zamow jedzenie</Link>
          </li>
          <li>
            <Link to='/koszyk'>Koszyk</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
