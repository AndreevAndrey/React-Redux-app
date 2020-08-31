import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import fetchUsers from './userListAction';
import UserList from './UserList';
import style from './userList.module.css';
import {
  deleteUser,
  recoverUser,
  setInputValue,
  setUserParams
} from './userListReducer';
import Search from '../Search/Search';
import {
  getDeletedUsers,
  getError,
  getInputValue,
  getIsFetching,
  getUsers
} from '../redux/selectors';

const propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  setUserParams: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.any.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  deletedUsers: PropTypes.any.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  recoverUser: PropTypes.func.isRequired
};

const UserListContainer = ({
  fetchUsers,
  setUserParams,
  setInputValue,
  deleteUser,
  recoverUser,
  users,
  inputValue,
  isFetching,
  error,
  deletedUsers
}) => {
  const [isActive, setToggle] = useState(false);
  const [activeId, setId] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetchUsers();
    }

    fetchData();
  }, [fetchUsers]);

  const showUser = (id, newQueryParams, shortInfo, name) => {
    setUserParams(id, newQueryParams, shortInfo, name);
    setToggle(true);
    setId(id);
  };

  const deleteItem = id => {
    window.confirm('Delete user?') &&
      deleteUser(id, { removalTime: new Date().toString() });
  };

  const changeInputValue = e => {
    const targetValue = e.target.value;
    setInputValue(targetValue);
  };

  const recover = id => {
    recoverUser(id);
  };
  const userList =
    !!users &&
    users.map(val => (
      <UserList
        name={val.name}
        id={val.id}
        key={val.id}
        shortInfo={val.shortInfo}
        more={val.more}
        showUser={showUser}
        deleteItem={deleteItem}
        isActive={isActive}
        activeId={activeId}
      />
    ));

  const delUsers = deletedUsers.map(val => (
    <UserList
      deletedId={val.id}
      name={val.name}
      shortInfo={val.shortInfo}
      key={val.id}
      removalTime={val.removalTime}
      recover={recover}
    />
  ));
  return (
    <div className={style.userListContainer}>
      <Search inputValue={inputValue} changeInputValue={changeInputValue} />
      {userList}
      {!!deletedUsers.length && <h2>Deleted Users:</h2>}
      {delUsers}
      <div>{isFetching && <CircularProgress />}</div>
      <div>
        <p>{error}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: getUsers(state),
  isFetching: getIsFetching(state),
  error: getError(state),
  inputValue: getInputValue(state),
  deletedUsers: getDeletedUsers(state)
});

UserListContainer.propTypes = propTypes;
export default connect(mapStateToProps, {
  fetchUsers,
  setUserParams,
  deleteUser,
  setInputValue,
  recoverUser
})(UserListContainer);
