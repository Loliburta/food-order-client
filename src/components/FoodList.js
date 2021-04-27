import { useState } from 'react';

const FoodList = () => {
  const [food, setFood] = useState('Kanapka');
  return (
    <div>
      <h1>Jestem listą jedzenia: {food}</h1>
    </div>
  );
};

export default FoodList;
