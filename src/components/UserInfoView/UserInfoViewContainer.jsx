import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserInfoView from './UserInfoView';
import fetchUser from './userInfoViewAction';
import {
  getError,
  getId,
  getIsFetching,
  getName,
  getNewQueryParams,
  getShortInfo,
  getUser
} from '../../redux/selectors';

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

const UserInfoViewContainer = ({
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
    function fetchDataUser() {
      fetchUser(newQueryParams);
    }

    fetchDataUser();
  }, [fetchUser, newQueryParams]);

  return (
    <UserInfoView
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
const mapStateToProps = state => ({
  id: getId(state),
  newQueryParams: getNewQueryParams(state),
  name: getName(state),
  shortInfo: getShortInfo(state),
  user: getUser(state),
  isFetching: getIsFetching(state),
  error: getError(state)
});

UserInfoViewContainer.propTypes = propTypes;
UserInfoViewContainer.defaultProps = defaultProps;
export default connect(mapStateToProps, { fetchUser })(UserInfoViewContainer);
