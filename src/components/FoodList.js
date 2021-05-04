import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import FoodElement from './FoodElement';
import { getMenu } from '../store/menu-slice';

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
      <h1>Menu: </h1>
      <StyledFoodList>
        {menu
          ? menu.map((element) => (
              <FoodElement key={element.id} element={element} />
            ))
          : ''}
      </StyledFoodList>
    </StyledFoodContainer>
  );
};

const StyledFoodContainer = styled.div`
  background: #f4f4f4;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFoodList = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

export default FoodList;
