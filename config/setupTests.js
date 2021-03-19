import { cleanup } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite/no-important';

global.beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

global.afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  cleanup();
});
