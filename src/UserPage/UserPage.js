import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import style from './userPage.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const UserPage = ({ name, shortInfo,id, bio, pic, error,isFetching }) => {
  return(

    <div className={style.userPage}>
      {id ? (
        <>
          <Avatar
            alt='cats'
            src={pic}
            style={{ width: '200px', height: '200px' }}
          />
          <p>Name: {name}</p>
          <p>Short info: {shortInfo}</p>
          <p>{bio}</p>
          <p>{error}</p>
        </>
      ) : (
        <p>Information about the selected user will be displayed here.</p>
      )}
      <div>{isFetching && <CircularProgress />}</div>
      <p>{error}</p>
    </div>
  );
};

export default UserPage;
