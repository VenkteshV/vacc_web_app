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

export function* submitPledge(pledgeAction) {
  console.log("pledgeAction",pledgeAction.payload.payload);

}


