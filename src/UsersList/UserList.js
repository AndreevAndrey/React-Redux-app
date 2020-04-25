import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import style from './userList.module.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  shortInfo: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
  showUser: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  activeId: PropTypes.number
};

const defaultProps = {
  activeId: null
};

const UserList = ({
  name,
  id,
  shortInfo,
  more,
  showUser,
  deleteItem,
  isActive,
  activeId
}) => {
  return (
    <div className={style.userList}>
      <div
        className={isActive && activeId === id ? style.active : ''}
        onClick={() => showUser(id, more, shortInfo, name)}
      >
        <p>Name: {name}</p>
        <p>Short info: {shortInfo}</p>
      </div>
      <IconButton aria-label='delete' onClick={() => deleteItem(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

UserList.propTypes = propTypes;
UserList.defaultProps = defaultProps;
export default UserList;
