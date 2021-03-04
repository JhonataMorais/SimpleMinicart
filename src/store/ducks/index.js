import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { productsReducer as products, productsSaga } from './products';
import { minicartReducer as minicart } from './minicart';

export const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    products,
    minicart,
  });

export function* rootSaga() {
  yield all([productsSaga()]);
}
