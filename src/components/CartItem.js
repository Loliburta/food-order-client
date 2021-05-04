const CartItem = ({ name, price, quantity, totalPrice }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>cena/szt: {price} zł</p>
      <p>ilość: {quantity}</p>
      <p>Cena całkowita: {totalPrice}</p>
      <hr />
    </div>
  );
};

export default CartItem;
