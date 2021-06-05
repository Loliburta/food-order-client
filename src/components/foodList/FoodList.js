import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import FoodElement from "./foodItem/FoodItem";
import { getMenu } from "../../store/menu-slice";

const FoodList = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.list);

  //const getFood = async () => {

  //const resp = await axios.get('http://127.0.0.1:8000/api/');
  //setFoodList(resp.data);
  //console.log(resp.data);
  //console.log(resp.data);
  //};

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  return (
    <StyledFoodContainer>
      <div className="menu">Menu</div>
      <StyledFoodList>
        {menu
          ? menu.map((element) => (
              <FoodElement key={element.id} element={element} />
            ))
          : ""}
      </StyledFoodList>
    </StyledFoodContainer>
  );
};

const StyledFoodContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .menu {
    padding-bottom: 30px;
    font-size: 50px;
    font-weight 500;
  }
`;

const StyledFoodList = styled.div`
  padding: 0px 30px;
  display: grid;
  width: clamp(280px, 100vw, 1500px);
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 28px;
  @media (max-width: 650px) {
    padding: 0px 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export default FoodList;
