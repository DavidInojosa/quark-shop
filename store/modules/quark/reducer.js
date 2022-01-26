import produce from 'immer';

const INITIAL_STATE = {
    categories: [],
    products: [],
    favorites: [],
    cart: [],
};

export default function quark(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@quark/SET_CATEGORIES': {
        draft.categories = action.payload.categories;
        break;
      }

      case '@quark/SET_PRODUCTS': {
        draft.products = action.payload.products;
        break;
      }

      case '@quark/SET_FAVORITES': {
        draft.favorites = action.payload.favorites;
        break;
      }

      case '@quark/SET_CART': {
        draft.cart = action.payload.cart;
        break;
      }

      default:
    }
  });
}
