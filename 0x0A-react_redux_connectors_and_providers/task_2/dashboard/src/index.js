import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedApp as App } from './App/App';
import { createStore, applyMiddleware } from 'redux';
import { uiReducer } from './reducers/uiReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
