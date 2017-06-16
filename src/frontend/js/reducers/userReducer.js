const defaultState = {
  username: '',
  error: null
};

export default function reducer(state=defaultState, action) {
  switch (action.type) {
    case 'createUser':
      return Object.assign({}, state, {
        username: action.payload.username
      });
    case 'createUserError':
      return Object.assign({}, state, {
        error: action.payload.error
      })
    default:
      return state;
  }
}
