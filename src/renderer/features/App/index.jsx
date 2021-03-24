import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'aphrodite/no-important';
import { Modal, addModal } from '@jmind.systems/react-modal';
import { addNotification, Notifications } from 'react-notify-library';

import * as styles from './style';

export const App = () => {
  const { t } = useTranslation(['common']);
  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: cornflowerblue; font-size: 13px;');
  }, []);
  const setModal = useCallback(() => addModal('test'), []);
  return (
    <>
      <Notifications />
      <div className={css(styles.regular.app)}>
        <div className={css(styles.regular.wrapper)} onClick={setModal}>
          {t('click')}
        </div>
        <Modal
          name="test"
          type="submit"
          onSubmit={() => setTimeout(() => addNotification(t('test'), { type: 'success' }), 200)}
        >
          {t('test')}
        </Modal>
      </div>
    </>
  );
};
