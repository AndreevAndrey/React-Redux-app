import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import style from './userPage.module.css';

const UserPage = ({ name, shortInfo,id, bio, pic, error,isFetching }) => {
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

export default UserPage;
