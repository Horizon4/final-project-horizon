const defaultState = {
  username: '',
  error: null
};

export default function reducer(state=defaultState, action) {
  switch (action.type) {
    case 'createUser':
      return Object.assign({}, state, {
        username: action.payload.user.username
      });
    case 'createUserError':
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state;
  }
}
