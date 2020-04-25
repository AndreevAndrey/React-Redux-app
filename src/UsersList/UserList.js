import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import PropTypes from 'prop-types';
import style from './userList.module.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  shortInfo: PropTypes.string.isRequired,
  more: PropTypes.string,
  showUser: PropTypes.func,
  deleteItem: PropTypes.func,
  isActive: PropTypes.bool,
  activeId: PropTypes.number,
  deletedId: PropTypes.number
};

const defaultProps = {
  activeId: null,
  id: null,
  showUser: null,
  deleteItem: null,
  isActive: false,
  more: null,
  deletedId: null
};

const UserList = ({
  name,
  id,
  shortInfo,
  more,
  showUser,
  deleteItem,
  isActive,
  activeId,
  deletedId
}) => {
  return (
    <div className={style.userList}>
      <div
        className={
          isActive && activeId === id
            ? style.active
            : deletedId
            ? style.deletedUser
            : ''
        }
        onClick={() => (deletedId ? '' : showUser(id, more, shortInfo, name))}
      >
        <p>Name: {name}</p>
        <p>Short info: {shortInfo}</p>
      </div>
      {deletedId ? (
        <ThreeSixtyIcon />
      ) : (
        <IconButton aria-label='delete' onClick={() => deleteItem(id)}>
          <DeleteIcon />
        </IconButton>
      )}
    </div>
  );
};

UserList.propTypes = propTypes;
UserList.defaultProps = defaultProps;
export default UserList;
