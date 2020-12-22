import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens/App';
import reportWebVitals from './reportWebVitals';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware,compose} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
