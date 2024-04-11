import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

import { useDispatch, useSelector } from 'react-redux';

import { removeAuthError } from '../../redux/slices/auth.actions';
import { getAuthError } from '../../redux/selectors';

defaultModules.set(PNotifyMobile, {});

export default function Pnotify() {
  const authError = useSelector(getAuthError);
  const dispatch = useDispatch();

  function openPnotify() {
    showAlert();
    dispatch(removeAuthError());
  }

  function showAlert() {
    alert({
      title: 'Bad request',
      text: `${authError}`,
      delay: 3000,
      hide: true,
      mouseReset: true,
      destroy: true,
      remove: false,
      // defaultStack: new Stack({
      // dir1: 'up',
      // dir2: 'left',
      // maxOpen: 1,
      // maxStrategy: 'close',
      // maxClosureCausesWait: false,
      // firstpos1: 25,
      // firstpos2: 25,
      // spacing1: 36,
      // spacing2: 36,
      // push: 'bottom',
      // context: document.body,
      // }),
    });
  }

  return <>{authError && openPnotify()}</>;
}
