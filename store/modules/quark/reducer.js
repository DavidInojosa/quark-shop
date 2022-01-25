import produce from 'immer';

const INITIAL_STATE = {
    categories: [],
    products: [],
    favorites: [],
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

      default:
    }
  });
}
