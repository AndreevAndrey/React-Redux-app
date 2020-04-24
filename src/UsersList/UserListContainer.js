import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import fetchUsers from './userListAction';
import UserList from './UserList';
import style from './userList.module.css';
import { setUserParams } from './userListReducer';

const UserListContainer = ({fetchUsers,setUserParams,users,isFetching,error}) => {
  useEffect(() => {
    async function fetchData() {
      await fetchUsers();
    }

    fetchData();
  }, [fetchUsers]);

  const showUser = (newQueryParams, shortInfo, name) => {
    setUserParams(newQueryParams, shortInfo, name);
  };

  const deleteItem = (id) =>{
    window.confirm('Delete user?');
    //TODO: add function delete
  };

  const userData = Object.keys(users).map(val => {
    return (
      <UserList
        name={users[val].name}
        id={users[val].id}
        key={users[val].id}
        shortInfo={users[val].shortInfo}
        more={users[val].more}
        showUser={showUser}
        deleteItem={deleteItem}
      />
    );
  });
  return (
    <div className={style.userListContainer}>
      {userData}
      <div>{isFetching && <CircularProgress />}</div>
      <div>
        <p>{error}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ usersList: { users, isFetching, error } }) => ({
  users,
  isFetching,
  error
});

export default connect(mapStateToProps, { fetchUsers, setUserParams })(
  UserListContainer
);
