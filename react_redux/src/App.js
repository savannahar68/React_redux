import React from 'react';
import './App.css';
import FoodContainer from './components/FoodContainer';
import HooksFoodContainer from './components/HooksFoodContainer';
import FoodWaterContainer from './components/FoodWaterContainer';
import UserContainer from './components/UserContainer';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  console.log(store.getState())
  return (
    <div className="App">
      <Provider store={store}>
        <FoodContainer />
        <HooksFoodContainer />
        <FoodWaterContainer />
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;
