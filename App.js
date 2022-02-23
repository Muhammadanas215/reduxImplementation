import React from 'react';
import {createStore} from 'redux';
import CounterApp from './src/component/CounterApp';
import {Provider} from 'react-redux';
import {ActionSheetIOS} from 'react-native';
import CounterDuplicate from './src/component/CounterDuplicate';

const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {
        counter: state.counter - 1,
      };
  }
  return state;
};
const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />

      </Provider>
    );
  }
}

export default App;
