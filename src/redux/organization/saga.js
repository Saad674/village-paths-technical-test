import { all, put, call, takeEvery } from 'redux-saga/effects';
import {organizationActions} from './index';
import {getOrganizationDetails} from 'api/organizationDetailsApi';

function* fetchData() {
  const json = yield call(getOrganizationDetails);
  yield put(organizationActions.setOrganization(json.data));
}

export default function* organizationSaga() {
  yield all([takeEvery(organizationActions.getOrganization, fetchData)]);
}