import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './module/configureStore';
import TestComponent from './components/TestComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TestComponent />
      </Provider>
    );
  }
}

export default App;
