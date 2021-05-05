import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import styled from 'styled-components';

const CartBox = () => {
  const cartData = useSelector((state) => state.cart);
  const items = cartData.items;
  return (
    <StyledCartBox>
      <h1>Koszyk: </h1>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          totalPrice={item.totalPrice}
          id={item.id}
        />
      ))}
      <hr />
      <p>Do zapłaty: {cartData.totalPrice} zł</p>
      <p>Przedmioty w koszyku: {cartData.totalQuantity}</p>
    </StyledCartBox>
  );
};

const StyledCartBox = styled.div`
  background: #f4f4f4;
  padding: 2rem;
`;

export default CartBox;
