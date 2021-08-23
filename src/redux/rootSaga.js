import { all } from 'redux-saga/effects';
import authenticateSaga from 'components/features/OnBoarding/authenticateAPI';
import organizationSaga from './organization/saga';

export default function* rootSaga(){
  yield all([
    authenticateSaga(),
    organizationSaga(),
  ]);
}
