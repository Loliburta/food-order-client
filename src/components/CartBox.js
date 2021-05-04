import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartBox = () => {
  const cartData = useSelector((state) => state.cart);
  const items = cartData.items;
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          totalPrice={item.totalPrice}
        />
      ))}
      <hr />
      <p>Do zapłaty: {cartData.totalPrice} zł</p>
      <p>Przedmioty w koszyku: {cartData.totalQuantity}</p>
    </div>
  );
};

export default CartBox;
