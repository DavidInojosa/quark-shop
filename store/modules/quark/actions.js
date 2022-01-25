export function getCategories() {
  return {
    type: '@quark/GET_CATEGORIES',
  };
}

export function setCategories(categories) {
  return {
    type: '@quark/SET_CATEGORIES',
    payload: { categories },
  };
}

export function getProducts() {
  return {
    type: '@quark/GET_PRODUCTS',
  };
}

export function setProducts(products) {
  return {
    type: '@quark/SET_PRODUCTS',
    payload: { products },
  };
}

export function getFruits() {
  return {
    type: '@quark/GET_FRUITS',
  };
}

export function setFruits(fruits) {
  return {
    type: '@quark/SET_FRUITS',
    payload: { fruits },
  };
}
