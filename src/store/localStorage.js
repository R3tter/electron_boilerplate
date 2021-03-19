import { LOCAL_STORAGE_NAME } from 'constants/index.js';

export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return { Cached: JSON.parse(serializedState) };
  } catch (err) {
    return undefined;
  }
};

const saveToStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    // Ignore errors.
  }
};

export const saveState = ({ Cached }) => saveToStorage(LOCAL_STORAGE_NAME, Cached);

export const clearState = () => saveToStorage(LOCAL_STORAGE_NAME, undefined);
