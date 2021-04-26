import { call, put, fork, take,select } from 'redux-saga/effects';
import { callPost, callGet } from '../services/api';
import * as actions from '../constants/actions';
import {config, selectedValues} from './selectors';
import _ from 'lodash';
import { delay } from 'redux-saga';
export default function* watchSearchConditionRequest() {
  let searchAction;
  while ((searchAction = yield take(actions.SEARCH_CONDITION_TRIGGER)) !== null) {
    yield fork(searchConditions, searchAction);
  }
}



export  function* watchRunExperimentsRequest() {

}
