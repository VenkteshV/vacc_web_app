import { action } from '../helpers/actionCreator';
import * as actions from '../constants/actions';

export const searchConditions = (searchValue) => action(actions.SEARCH_CONDITION_TRIGGER, { searchValue });
