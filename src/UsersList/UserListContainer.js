import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import fetchUsers from './userListAction';
import UserList from './UserList';
import style from './userList.module.css';
import { deleteUser, setInputValue, setUserParams } from './userListReducer';
import Search from '../Search/Search';

const propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  setUserParams: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.any.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired
};

const UserListContainer = ({
  fetchUsers,
  setUserParams,
  setInputValue,
  deleteUser,
  users,
  inputValue,
  isFetching,
  error
}) => {
  const [isActive, setToggle] = useState(false);
  const [activeId, setId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await fetchUsers();
    }

    fetchData();
  }, [fetchUsers]);

  const showUser = (id, newQueryParams, shortInfo, name) => {
    setUserParams(id, newQueryParams, shortInfo, name);
    setToggle(true);
    setId(id);
  };

  const deleteItem = id => {
    window.confirm('Delete user?') && deleteUser(id);
  };

  const changeInputValue = e => {
    const targetValue = e.target.value;
    setInputValue(targetValue);
  };

  const userData = Object.keys(users).map(val => (
    <UserList
      name={users[val].name}
      id={users[val].id}
      key={users[val].id}
      shortInfo={users[val].shortInfo}
      more={users[val].more}
      showUser={showUser}
      deleteItem={deleteItem}
      isActive={isActive}
      activeId={activeId}
    />
  ));

  return (
    <div className={style.userListContainer}>
      <Search inputValue={inputValue} changeInputValue={changeInputValue} />
      {userData}
      <div>{isFetching && <CircularProgress />}</div>
      <div>
        <p>{error}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  usersList: { users, isFetching, error, inputValue }
}) => ({
  users: (function searchItem() {
    if (inputValue)
      return users.filter(user =>
        user.name.toLowerCase().startsWith(inputValue.toLowerCase())
      );
    return users;
  })(),
  isFetching,
  error,
  inputValue
});

UserListContainer.propTypes = propTypes;
export default connect(mapStateToProps, {
  fetchUsers,
  setUserParams,
  deleteUser,
  setInputValue
})(UserListContainer);
