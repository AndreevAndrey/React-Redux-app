const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
const SET_USER_PARAMS = 'SET_USER_PARAMS';
const DELETE_USER = 'DELETE_USER';
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const RECOVER_USER = 'RECOVER_USER';

const initialState = {
  users: '',
  isFetching: false,
  basePath: '',
  newQueryParams: '',
  error: '',
  id: null,
  name: '',
  shortInfo: '',
  inputValue: '',
  deletedUsers: []
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
        deletedUsers: [
          ...state.deletedUsers,
          {
            ...state.users.find(user => user.id === action.id),
            ...action.date
          }
        ],
        users: state.users.filter(user => user.id !== action.id),
        id: null
      };

    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue
      };

    case RECOVER_USER:
      return {
        ...state,
        users: [
          ...state.users,
          state.deletedUsers.find(user => user.id === action.recoverId)
        ],
        deletedUsers: state.deletedUsers.filter(
          user => user.id !== action.recoverId
        )
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

export const deleteUser = (id, date) => ({ type: DELETE_USER, id, date });
export const setInputValue = inputValue => ({
  type: SET_INPUT_VALUE,
  inputValue
});

export const recoverUser = recoverId => ({ type: RECOVER_USER, recoverId });

export default userListReducer;
