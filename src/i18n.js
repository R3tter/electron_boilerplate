import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'languages/en.json';
import ru from 'languages/ru.json';

import { LOCAL_STORAGE_NAME } from 'constants/index';
import { loadState } from './store/localStorage';

i18n.use(initReactI18next).init({
  resources: {
    en,
    ru
  },
  lng: loadState(LOCAL_STORAGE_NAME)?.Cached.lang.id ?? 'en'
});

export default i18n;
