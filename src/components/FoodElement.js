import styled from 'styled-components';

const FoodElement = ({ name, price, description, calories }) => {
  return (
    <StyledFoodBox>
      <h3>{name}</h3>
      <hr />
      <p>{description}</p>
      <p>kcal: {calories}</p>
      <p>Cena: {price} zł</p>
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
