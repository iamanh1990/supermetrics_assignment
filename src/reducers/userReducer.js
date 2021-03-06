import { LOGGED_IN_USER } from '../actions/types';

const userReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGGED_IN_USER:
      return payload;

    default:
      return state;
  }
};

export default userReducer;
