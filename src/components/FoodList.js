import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import FoodElement from './FoodElement';

const FoodList = () => {
  const [foodList, setFoodList] = useState();

  const getFood = async () => {
    const resp = await axios.get('http://127.0.0.1:8000/api/');
    setFoodList(resp.data);
    //console.log(resp.data);
  };

  useEffect(() => {
    getFood();
  }, []);
  return (
    <StyledFoodContainer>
      <h1>Menu: </h1>
      <StyledFoodList>
        {foodList
          ? foodList.map((element) => (
              <FoodElement
                key={element.id}
                name={element.name}
                price={element.price}
                description={element.description}
                calories={element.calories}
              />
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
