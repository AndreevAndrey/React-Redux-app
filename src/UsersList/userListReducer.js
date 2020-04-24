const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
const SET_USER_PARAMS = 'SET_USER_PARAMS';
const DELETE_USER = 'DELETE_USER';

const initialState = {
  users: '',
  isFetching: false,
  basePath: '',
  newQueryParams: '',
  error: '',
  id: '',
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
        id: action.id,
        newQueryParams: action.newQueryParams,
        name: action.name,
        shortInfo: action.shortInfo
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
        id: ''
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

export const setUserParams = (id, newQueryParams, shortInfo, name) => ({
  type: SET_USER_PARAMS,
  id,
  newQueryParams,
  name,
  shortInfo
});

export const deleteUser = id => ({ type: DELETE_USER, id });

export default userListReducer;
