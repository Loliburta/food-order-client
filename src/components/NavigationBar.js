import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = () => {
  return (
    <StyledHeader>
      <div className='logo'>
        <Link to='/'>Strona Główna</Link>
      </div>

      <div className='links'>
        <Link to='/zamow'>Zamow jedzenie</Link>
        <Link to='/koszyk'>Koszyk</Link>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: #deb887;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  .logo {
    flex: 3;
  }
  .links {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default NavigationBar;
