import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../services/api';
import { setCategories, setProducts } from './actions';


export function* getCategoriesSagas() {
  try {
    const response = yield call(api.get, '/categories');
    console.tron.log('categories', response.data);
    yield put(setCategories(response));
  } catch (error) {
    console.tron.log('err', error);
  }
}

export function* getProductsSagas({ payload }) {
  try {
    const response = yield call(api.get, '/products');
    console.tron.log('products', response.data);
    yield put(setProducts(response));
  } catch (error) {
    console.tron.log('err', error);
  }
}

export function* getFavoritesSagas({ payload }) {

}

export default all([
  takeLatest('@quark/GET_CATEGORIES', getCategoriesSagas),
  takeLatest('@quark/GET_PRODUCTS', getProductsSagas),
  takeLatest('@quark/GET_FAVORITES', getFavoritesSagas),
]);
