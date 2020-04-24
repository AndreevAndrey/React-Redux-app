import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import UserPage from './UserPage';
import fetchUser from './userPageAction';

const UserPageContainer = ({
  fetchUser,
  newQueryParams,
  user:{id,bio,pic},
  name,
  shortInfo,
  isFetching,
  error
}) => {
  useEffect(() => {
    async function fetchDataUser() {
      await fetchUser(newQueryParams);
    }

    fetchDataUser();
  }, [newQueryParams]);

  return (
    <UserPage
      id={id}
      name={name}
      shortInfo={shortInfo}
      bio={bio}
      error={error}
      isFetching={isFetching}
      pic={pic}
    />
  );
};
const mapStateToProps = ({
  usersList: { newQueryParams, name, shortInfo },
  user: { user, isFetching, error }
}) => ({
  newQueryParams,
  name,
  shortInfo,
  user,
  isFetching,
  error
});

export default connect(mapStateToProps, { fetchUser })(UserPageContainer);
