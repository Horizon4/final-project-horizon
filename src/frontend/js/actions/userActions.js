import axios from 'axios';

export function createUser(name, pass) {
  return function(dispatch) {
    axios.put('/api/user', {
      username: name,
      password: pass
    })
    .then((response) => {
      dispatch({type: 'createUser', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'createUserError', payload: err});
    })
  }
}
