import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import home from "@iconify-icons/ant-design/home-outlined";
import cart from "@iconify-icons/bi/cart";
import order from "@iconify-icons/ion/fast-food-outline";

const NavigationBar = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <div className="logo__svg">
            <Icon icon={home} />
          </div>
        </Link>
        <div className="logo__text">
          <Link to={`${process.env.PUBLIC_URL}/`}>Strona Główna</Link>
        </div>
      </div>

      <div className="links">
        <Link to={`${process.env.PUBLIC_URL}/zamow`}>
          <div className="links__link">
            <div className="links__link__svg">
              <Icon icon={order} />
            </div>
            <div className="links__link__text">Zamów jedzenie</div>
          </div>
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/koszyk`}>
          <div className="links__link2">
            <div className="links__link__svg">
              <Icon icon={cart} />
            </div>
            <div className="links__link__textCart">Koszyk</div>
          </div>
        </Link>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: white;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 3;
    &__svg {
      margin: 5px 10px 0px 0px;
      font-size: 30px;
    }
    &__text {
      font-size: 22px;
      font-weight: 500;
    }
  }
  .links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &__link,
    &__link2 {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-left: 10px;
      &__svg {
        margin: 5px 10px 0px 0px;
        font-size: 27px;
      }
      &__text,
      &__textCart {
        font-size: 18px;
        font-weight: 400;
      }
    }
    &__link2 {
      margin-left: 50px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 600px) {
    .logo__text {
      display: none;
    }
  }
  @media (max-width: 450px) {
    padding: 0.4rem;
  }
  @media (max-width: 400px) {
    .links__link__textCart {
      display: none;
    }
    .links__link2 {
      margin-left: 10px;
    }
  }
`;

export default NavigationBar;
