import axios from 'axios';
import { useState, useEffect } from 'react';

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
    <div>
      <h1>Menu: </h1>
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
    </div>
  );
};

export default FoodList;
