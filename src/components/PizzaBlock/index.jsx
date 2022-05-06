import React from "react";
import classNames from "classnames";
import { Button } from "../Button";

export const PizzaBlock = ({ pizzas, onClickAddPizza }) => {
  const [activeType, setActiveType] = React.useState(pizzas.types[0]);
  const [activeSize, setActiveSize] = React.useState(0);
  const aviableTypes = ["тонкое", "традиционное"];
  const aviableSizes = [26, 30, 40];

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id: pizzas.id,
      name: pizzas.name,
      price: pizzas.price,
      imageUrl: pizzas.imageUrl,
      size: aviableSizes[activeSize],
      type: aviableTypes[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={pizzas.imageUrl}
        //src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{pizzas.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {aviableTypes.map((type, index) => (
            <li
              onClick={() => onSelectType(index)}
              key={`${type}_${index}`}
              className={classNames({
                active: activeType === index,
                disabled: !pizzas.types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {aviableSizes.map((size, index) => (
            <li
              onClick={() => onSelectSize(index)}
              key={`${size}_${index}`}
              className={classNames({
                active: activeSize === index,
                disabled: !pizzas.sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {pizzas.price} ft</div>
        <Button className="button--add" outline onClick={onAddPizza}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </Button>
      </div>
    </div>
  );
};

// PizzaBlock.defaultProps = {
//   isLoaded: false,
// };
