import * as axios from 'axios';
import {
  fetchDataUser,
  fetchUserFailure,
  fetchUserSuccess
} from './userReducer';

export default newQuery => async dispatch => {
  try {
    if (!!newQuery) {
      dispatch(fetchDataUser());
      const response = await axios.get(newQuery);
      if (response.status === 200) {
        dispatch(fetchUserSuccess(response.data));
      }
    }
  } catch (e) {
    dispatch(fetchUserFailure(e.message));
  }
};
