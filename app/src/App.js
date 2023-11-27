import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Greeting} />
        {/* Add more routes as needed */}
      </Router>
    </Provider>
  );
};

export default App;
