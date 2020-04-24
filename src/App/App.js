import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import UserListContainer from '../UsersList/UserListContainer';
import UserPageContainer from '../UserPage/UserPageContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserListContainer />
        <UserPageContainer />
      </div>
    </Provider>
  );
}

export default App;
