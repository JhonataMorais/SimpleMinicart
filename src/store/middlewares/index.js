import { routerMiddleware } from './router';
import { sagaMiddleware } from './saga';

const middlewares = [sagaMiddleware, routerMiddleware];

export * from './router';
export * from './saga';
export * from './logger';

export default middlewares;
