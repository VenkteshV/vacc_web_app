import { all } from 'redux-saga/effects';
import watchStartApplication from './startApplication';
import watchSearchConditionRequest from './pledge';
import  {watchExcuseRequest} from './pledge';
export default function* rootSaga() {
  yield all([
    watchStartApplication(),
    watchSearchConditionRequest(),
    watchExcuseRequest(),
  ]);
}
