const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
const SET_USER_PARAMS = 'SET_USER_PARAMS';

const initialState = {
  users: '',
  isFetching: false,
  basePath: '',
  newQueryParams: '',
  error: '',
  name: '',
  shortInfo: ''
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.users],
        basePath: action.basePath,
        isFetching: false
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case SET_USER_PARAMS:
      return {
        ...state,
        newQueryParams: action.newQueryParams,
        name: action.name,
        shortInfo: action.shortInfo
      };
    default:
      return state;
  }
};

export const fetchUsers = () => ({ type: FETCH_USERS });
export const fetchUsersSuccess = (basePath, users) => ({
  type: FETCH_USERS_SUCCESS,
  basePath,
  users
});
export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  error
});

export const setUserParams = (newQueryParams, shortInfo, name) => ({
  type: SET_USER_PARAMS,
  newQueryParams,
  name,
  shortInfo
});

export default userListReducer;
