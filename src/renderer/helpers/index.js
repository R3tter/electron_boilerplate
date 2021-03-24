// !!! store тут нужен, без него не работает кеширование
// eslint-disable-next-line
import store from 'store/index';

export const generateEventObj = (name, value) => ({
  target: {
    name,
    value
  }
});
