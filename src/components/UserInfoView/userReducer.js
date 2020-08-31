const FETCH_USER = 'FETCH_USER';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const initialState = {
  user: '',
  isFetching: false,
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isFetching: false
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const fetchDataUser = () => ({ type: FETCH_USER });
export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user
});
export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  error
});

export default userReducer;
