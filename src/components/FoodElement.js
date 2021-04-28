const FoodElement = ({ name, price, description, calories }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>kcal: {calories}</p>
      <p>Cena: {price} zł</p>
      <hr />
    </div>
  );
};
export default FoodElement;
