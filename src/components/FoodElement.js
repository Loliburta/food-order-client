import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cart-slice';

const FoodElement = ({ element }) => {
  const dispatch = useDispatch();

  return (
    <StyledFoodBox>
      <h3>{element.name}</h3>
      <hr />
      <p>{element.description}</p>
      <p>kcal: {element.calories}</p>
      <p>Cena: {element.price} zł</p>
      <button
        onClick={() =>
          dispatch(
            addItemToCart({
              id: element.id,
              name: element.name,
              price: element.price,
            })
          )
        }
      >
        Dodaj do koszyka
      </button>
    </StyledFoodBox>
  );
};

const StyledFoodBox = styled.div`
  //flex-basis: 15rem;
  min-height: 15rem;
  width: 15rem;
  margin: 2rem;
  padding: 2rem;
  border: solid black 0.1rem;
  background: white;
`;
export default FoodElement;
