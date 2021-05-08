import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cart-slice';

const FoodElement = ({ element }) => {
  const dispatch = useDispatch();

  return (
    <StyledFoodBox>
      <div className='top'>
        <h3>{element.name}</h3>
        <hr />
        <p>{element.description}</p>
        <p>kcal: {element.calories}</p>
      </div>
      <div className='bottom-box'>
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
      </div>
    </StyledFoodBox>
  );
};

const StyledFoodBox = styled.div`
  //flex-basis: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 15rem;
  width: 15rem;
  margin: 2rem;
  border: solid black 0.1rem;
  background: white;
  .top {
    padding: 2rem;
  }
  .bottom-box {
    display: flex;
    justify-content: space-around;
    background: #fff0f5;
    padding: 1rem;
  }
`;
export default FoodElement;
