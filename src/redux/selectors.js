export const getId = ({ usersList: { id } }) => id;
export const getNewQueryParams = ({ usersList: { newQueryParams } }) =>
  newQueryParams;
export const getName = ({ usersList: { name } }) => name;
export const getShortInfo = ({ usersList: { shortInfo } }) => shortInfo;
export const getUser = ({ user: { user } }) => user;
export const getIsFetching = ({ user: { isFetching } }) => isFetching;
export const getError = ({ user: { error } }) => error;
export const getInputValue = ({ usersList: { inputValue } }) => inputValue;
export const getDeletedUsers = ({ usersList: { deletedUsers } }) =>
  deletedUsers;
export const getUsers = ({ usersList: { users, inputValue } }) => {
  return (() => {
    if (inputValue)
      return users.filter(user =>
        user.name.toLowerCase().startsWith(inputValue.toLowerCase())
      );
    return users;
  })();
};
