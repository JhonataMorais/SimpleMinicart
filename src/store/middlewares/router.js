import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { default as H } from '../../history';

export const history = H;
export const routerMiddleware = createRouterMiddleware(history);
