import { all } from 'redux-saga/effects';

import quark from './quark/sagas';

export default function* rootSaga() {
  return yield all([quark]);
}
