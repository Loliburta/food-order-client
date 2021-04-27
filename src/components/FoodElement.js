const FoodElement = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Cena: {price} zł</p>
      <hr />
    </div>
  );
};
export default FoodElement;
