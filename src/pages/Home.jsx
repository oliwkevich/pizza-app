import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, Sort, PizzaBlock, LoadingBlock } from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

export const Home = () => {
  const { pizzas, isLoaded, sortBy, category } = useSelector(
    ({ pizzas, filters }) => ({
      pizzas: pizzas.items,
      isLoaded: pizzas.isLoaded,
      sortBy: filters.sortBy,
      category: filters.category,
    })
  );
  const dispatch = useDispatch();
  const categoriesNames = [
    "Мясные",
    "Вегетерианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const sortItems = [
    { name: "популярности", type: "popular", order: "desk" },
    { name: "цене", type: "price", order: "ask" },
    { name: "алфавиту", type: "name", order: "ask" },
  ];

  React.useEffect(() => {
    fetchPizzas(sortBy, category)(dispatch);
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj))
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoriesNames}
          activeCategory={category}
        />
        <Sort
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((obj) => (
              <PizzaBlock
                key={obj.id}
                pizzas={obj}
                onClickAddPizza={handleAddPizza}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
};
