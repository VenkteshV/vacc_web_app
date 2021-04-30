import { action } from '../helpers/actionCreator';
import * as actions from '../constants/actions';

export const persistData = (payload) => action(actions.SUBMIT_TRIGGER, { payload });
