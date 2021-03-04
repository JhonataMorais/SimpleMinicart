import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import * as constants from '../constants/modules/productsConstants';

const initialState = {
  success: false,
  fetching: false,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.FETCH_PRODUCTS:
      return { ...state, ...payload, fetching: true };
    case constants.FETCH_PRODUCTS_SUCCESS:
      return { ...state, ...payload };
    case constants.FETCH_PRODUCTS_ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

function* fetchProducts() {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const { data } = yield axios.get(process.env.REACT_APP_API_URL, config);
    yield put({
      type: constants.FETCH_PRODUCTS_SUCCESS,
      payload: { data, fetching: false, success: true },
    });
  } catch (error) {
    yield put({
      type: constants.FETCH_PRODUCTS_ERROR,
      payload: { ...error, fetching: false, error: true },
    });
  }
}

export function* productsSaga() {
  yield takeLatest(constants.FETCH_PRODUCTS, fetchProducts);
}
