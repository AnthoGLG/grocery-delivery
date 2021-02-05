/*
 * actions types
 */
export const actions = {
  GET_ITEMS: "GET_ITEMS",
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_CART: "UPDATE_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SAVE_CART: "SAVE_CART",
};

/*
 * actions creators
 *definir les fonctions qui vont servir a dispatcher le type d'action accompagner du payload
 */
const uid = () => Math.random().toString(34).slice(2);
export const addToCart = (item, quantity) => {
  return {
    type: actions.ADD_TO_CART,
    payload: { id: uid(), quantity: quantity, details: item },
  };
};
export const updateCart = (item, quantity) => {
  return {
    type: actions.UPDATE_CART,
    payload: { item: item, quantity: quantity },
  };
};
export const removeFromCart = (item) => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: item,
  };
};
export const saveCart = (items) => {
  return {
    type: actions.SAVE_CART,
    payload: { items: items },
  };
};
