import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import UserListContainer from '../UsersList/UserListContainer';
import UserInfoViewContainer from '../UserInfoView/UserInfoViewContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserListContainer />
        <UserInfoViewContainer />
      </div>
    </Provider>
  );
}

export default App;
