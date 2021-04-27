import React from 'react';
import 'react-native-gesture-handler';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import authReducer from './store/reducers/auth';
import HomeNavigator from './navigation/HomeNavigator';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <HomeNavigator />
    </Provider>
  );
};

export default App;
