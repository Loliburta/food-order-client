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
      <h1>Jestem listą jedzenia</h1>
      {foodList
        ? foodList.map((x) => (
            <FoodElement key={x.id} name={x.name} price={x.price} />
          ))
        : ''}
    </div>
  );
};

export default FoodList;
