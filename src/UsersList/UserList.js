import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import style from './userList.module.css';

const UserList = ({ name, id, shortInfo, more, showUser, deleteItem}) => {
  return (
    <div className={style.userList}>
      <div onClick={() => showUser(id, more, shortInfo, name)}>
        <p>Name: {name}</p>
        <p>Short info: {shortInfo}</p>
      </div>
      <IconButton aria-label='delete' onClick={() => deleteItem(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default UserList;
