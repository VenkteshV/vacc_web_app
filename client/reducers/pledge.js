import * as actions from '../constants/actions';

const pledge = (state = {}, action) => {
    console.log("action",action);
  switch (action.type) {
  case actions.RENDER_BADGE:
    return Object.assign({}, state, {
        renderBadge: action.renderBadge,
        latestUser:action.latestUser
    });
  default:
    return state;
    case actions.RENDER_NEG_BADGE:
    return Object.assign({}, state, {
        renderNegBadge: action.renderNegBadge,
    });
  }
};

export default pledge;
