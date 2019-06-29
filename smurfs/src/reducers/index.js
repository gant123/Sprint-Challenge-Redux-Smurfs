import {
  GETTING_SMURFS,
  GOT_SMURFS,
  ADDED_SMURF,
  DELETED_SMURF
} from '../actions/index';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case GOT_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      };
    case ADDED_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      };
    case DELETED_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      };
    default:
      return state;
  }
};
