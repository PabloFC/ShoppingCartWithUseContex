const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      //Añadir un nuevo producto al store
      return [...state, action.product];
    case "Remove":
    case "Increase":
    case "Decrease":

    default:
      state;
  }
};

export default CartReducer;
