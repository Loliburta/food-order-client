const CartItem = ({ name, price, quantity, totalPrice }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>za sztukę: {price} zł</p>
      <p>ilość: {quantity}</p>
      <p>cena: {totalPrice} zł</p>
      <hr />
    </div>
  );
};

export default CartItem;
