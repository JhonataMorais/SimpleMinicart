import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, rootSaga } from './ducks';
import middlewares, { history, sagaMiddleware } from './middlewares';

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
