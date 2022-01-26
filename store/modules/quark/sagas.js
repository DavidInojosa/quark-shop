import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import { setCategories, setFavorites, setProducts } from './actions';


export function* getCategoriesSagas() {
  try {
    const response = yield call(api.get, '/categories');
    yield put(setCategories(response.data));
  } catch (error) {
  }
}

export function* getProductsSagas() {
  try {
    const response = yield call(api.get, '/products');
    yield put(setProducts(response.data));
  } catch (error) {
  }
}

export function* getFavoritesSagas() {
  try {
    const response = yield call(api.get, '/favorites');
    yield put(setFavorites(response.data));
  } catch (error) {
  }
}

export default all([
  takeLatest('@quark/GET_CATEGORIES', getCategoriesSagas),
  takeLatest('@quark/GET_PRODUCTS', getProductsSagas),
  takeLatest('@quark/GET_FAVORITES', getFavoritesSagas),
]);
