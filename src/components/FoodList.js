import axios from 'axios';
import { useState, useEffect } from 'react';

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
      {foodList ? foodList.map((x) => <p>{x.name}</p>) : ''}
    </div>
  );
};

export default FoodList;
