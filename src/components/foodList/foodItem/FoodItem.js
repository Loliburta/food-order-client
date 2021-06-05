import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../store/cart-slice";
import { Icon } from "@iconify/react";
import plus from "@iconify-icons/akar-icons/plus";

const FoodItem = ({ element }) => {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(
      addItemToCart({
        id: element.id,
        name: element.name,
        price: element.price,
      })
    );
  };
  return (
    <StyledFoodItem>
      <div className="top">
        <div className="top__head">
          <div className="top__head__name">{element.name}</div>
          <div className="top__head__kcal">{element.calories} kcal</div>
        </div>
        <div className="top__desc">{element.description}</div>
      </div>
      <div className="bot">
        <div className="bot__price">{element.price.toFixed(2)} zł</div>
        <div className="bot__button" onClick={increase}>
          <Icon className="bot__button__svg" icon={plus} />
        </div>
      </div>
    </StyledFoodItem>
  );
};

const StyledFoodItem = styled.div`
  border: 1px solid hsl(0, 0%, 75%);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  min-height: 120px;
  max-height: 220px;

  .top {
    display: flex;
    flex-direction: column;
    &__head {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      &__name {
        font-weight: 500;
      }
      &__kcal {
        font-size: 12px;
        color: hsl(0, 10%, 21%);
      }
    }
    &__desc {
      font-weight: 300;
      padding: 0.5rem 0px 0.7rem 0px;
      color: hsl(0, 0%, 33%);
    }
  }
  .bot {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    &__price {
      font-size: 16px;
      font-weight: 400;
    }
    &__button {
      cursor: pointer;
      background-color: hsl(0, 0%, 90%);
      padding: 0px 4px;
      border-radius: 100%;
      &__svg {
        margin-top: 3px;
        color: black;
        font-size: 22px;
      }
    }
  }
`;
export default FoodItem;
