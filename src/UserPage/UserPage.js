import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import style from './userPage.module.css';

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

const UserPage = ({ name, shortInfo, id, bio, pic, error, isFetching }) => {
  return (
    <div className={style.userPage}>
      {id ? (
        <>
          <Avatar
            alt='cats'
            src={pic}
            style={{ width: '200px', height: '200px' }}
          />
          <h2>Name: {name}</h2>
          <p>Short info: {shortInfo}</p>
          <p>{bio}</p>
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

UserPage.propTypes = propTypes;
UserPage.defaultProps = defaultProps;
export default UserPage;
