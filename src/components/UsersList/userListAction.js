import * as axios from 'axios';
import {
  fetchUsers as fetchDataUsers,
  fetchUsersFailure,
  fetchUsersSuccess
} from './userListReducer';
import RequestApi from '../../api/requestApi';

export default () => async dispatch => {
  dispatch(fetchDataUsers());
  try {
    const response = await axios.get(RequestApi.USERS);
    const { basepath, data } = response.data;
    if (response.status === 200) {
      dispatch(fetchUsersSuccess(basepath, data));
    }
  } catch (e) {
    dispatch(fetchUsersFailure(e.message));
  }
};
