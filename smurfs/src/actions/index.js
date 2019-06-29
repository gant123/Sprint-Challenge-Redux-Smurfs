import axios from 'axios';

export const GETTING_SMURFS = 'ADD_SMURF';
export const GOT_SMURFS = 'GOTSMURFS';
export const ADDED_SMURF = 'ADDED_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTING_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: GOT_SMURFS, payload: res.data }))
    .catch(err => console.log(err));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: GETTING_SMURFS });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: ADDED_SMURF, payload: res.data }));
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: GETTING_SMURFS });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETED_SMURF, payload: res.data }))
    .catch(err => console.log(err));
};
