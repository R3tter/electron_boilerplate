import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'src/renderer/languages/en.json';
import ru from 'src/renderer/languages/ru.json';

import { LOCAL_STORAGE_NAME } from 'constants';
import { loadState } from './store/localStorage';

i18n.use(initReactI18next).init({
  resources: {
    en,
    ru
  },
  lng: loadState(LOCAL_STORAGE_NAME)?.Cached.lang.id ?? 'en'
});

export default i18n;
