import { createLogger } from 'redux-logger';

export const loggerMiddleware = createLogger({
  collapsed: false,
});
