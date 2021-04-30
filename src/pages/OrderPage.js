import { useSelector } from 'react-redux';
import FoodList from '../components/FoodList';

const OrderPage = () => {
  const menuSelector = useSelector((state) => state.menu);
  return (
    <div>
      <p>{menuSelector.data}</p>
      <FoodList />
    </div>
  );
};

export default OrderPage;
