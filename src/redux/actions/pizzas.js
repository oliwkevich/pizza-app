export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  fetch(
    `/pizzas?${
      category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(setPizzas(data));
    });
};

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
