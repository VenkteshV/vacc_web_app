import { call, put, fork, take,select } from 'redux-saga/effects';
import { callPost, callGet } from '../services/api';
import * as actions from '../constants/actions';
import {config, selectedValues} from './selectors';
import _ from 'lodash';
import { delay } from 'redux-saga';
export default function* watchSearchConditionRequest() {
  let pledgeAction;
  while ((pledgeAction = yield take(actions.SUBMIT_TRIGGER)) !== null) {
    yield fork(submitPledge, pledgeAction);
  }
}

export function* watchExcuseRequest() {
  let pledgeAction;
  while ((pledgeAction = yield take(actions.EXCUSE_TRIGGER)) !== null) {
    yield fork(submitExcuse, pledgeAction);
  }
}

export function* submitPledge(pledgeAction) {
  console.log("pledgeAction",pledgeAction.payload.payload);
  const response = yield call(callPost, "/submitpledge",pledgeAction.payload.payload);
  console.log("response",response);
  if (response.response.success===true) {
    yield put({
      type: actions.RENDER_BADGE,
      renderBadge: response.response.success,
      latestUser: pledgeAction.payload.payload.name
    });
  }
}


export function* submitExcuse(pledgeAction) {
  console.log("pledgeAction",pledgeAction.payload.payload);
  const response = yield call(callPost, "/submitexcuse",pledgeAction.payload.payload);
  console.log("response",response);
  if (response.response.success===true) {
    yield put({
      type: actions.RENDER_NEG_BADGE,
      renderNegBadge: response.response.success
    });
  }
}


