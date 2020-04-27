import React from 'react';
import './App.css';
import FoodContainer from './components/FoodContainer';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  console.log(store.getState())
  return (
    <div className="App">
      <Provider store={store}>
        <FoodContainer />
      </Provider>
    </div>
  );
}

export default App;
