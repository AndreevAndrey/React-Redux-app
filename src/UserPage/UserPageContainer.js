import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPage from './UserPage';
import fetchUser from './userPageAction';

const propTypes = {
  fetchUser: PropTypes.func.isRequired,
  newQueryParams: PropTypes.string.isRequired,
  user: PropTypes.any.isRequired,
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  shortInfo: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

const defaultProps = {
  id: null
};

const UserPageContainer = ({
  fetchUser,
  newQueryParams,
  user: { bio, pic },
  id,
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
  }, [fetchUser, newQueryParams]);

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
  usersList: { id, newQueryParams, name, shortInfo },
  user: { user, isFetching, error }
}) => ({
  id,
  newQueryParams,
  name,
  shortInfo,
  user,
  isFetching,
  error
});

UserPageContainer.propTypes = propTypes;
UserPageContainer.defaultProps = defaultProps;
export default connect(mapStateToProps, { fetchUser })(UserPageContainer);
