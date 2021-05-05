import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../store/cart-slice';

const CartItem = ({ id, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();
  return (
    <StyledCartItem>
      <div className='info'>
        <h3>{name}</h3>
        <p>za sztukę: {price} zł</p>
      </div>
      <div className='quantity'>
        <button
          className='increase'
          onClick={() =>
            dispatch(
              addItemToCart({
                id,
                name,
                price,
              })
            )
          }
        >
          +
        </button>
        <div className='quantity-info'>
          <p>ilość: {quantity}</p>
          <p>cena: {totalPrice} zł</p>
        </div>
        <button
          className='decrease'
          onClick={() =>
            dispatch(
              removeItemFromCart({
                id: id,
              })
            )
          }
        >
          -
        </button>
      </div>
    </StyledCartItem>
  );
};

const StyledCartItem = styled.div`
  border: solid grey 0.1rem;
  border-radius: 0.5rem;
  display: flex;
  margin: 0.5rem 0rem;
  background: white;
  padding: 0.8rem;

  .info {
    flex: 2;
  }

  .quantity {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
`;

export default CartItem;
