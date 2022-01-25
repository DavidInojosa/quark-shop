import { createStore, compose, applyMiddleware } from 'redux';
import Reactotron from '../config/ReactotronConfig';

export default (reducers, middlewares) => {
  const enhancer = __DEV__
    ? compose(Reactotron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
