import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import style from './userInfoView.module.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  shortInfo: PropTypes.string.isRequired,
  id: PropTypes.number,
  bio: PropTypes.string,
  pic: PropTypes.string,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired
};

const defaultProps = {
  bio: '',
  pic: '',
  id: null
};

const UserInfoView = ({ name, shortInfo, id, bio, pic, error, isFetching }) => {
  return (
    <div className={style.userInfo}>
      {id ? (
        <>
          <Avatar
            alt='cats'
            src={pic}
            style={{ width: '200px', height: '200px' }}
          />
          <h2>Name: {name}</h2>
          <h3>Short info: {shortInfo}</h3>
          <p>Bio: {bio}</p>
          <p>{error}</p>
        </>
      ) : (
        <h2>Information about the selected user will be displayed here.</h2>
      )}
      <div>{isFetching && <CircularProgress />}</div>
      <p>{error}</p>
    </div>
  );
};

UserInfoView.propTypes = propTypes;
UserInfoView.defaultProps = defaultProps;
export default UserInfoView;
