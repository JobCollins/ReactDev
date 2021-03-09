import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'

//create store
const store = createStore(
  reducer,
  //invoking redux devtools if it exists on the browser. For debugging
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  )

// console.log(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/*avoid prop threading by being the sole provider to all components within App component*/}
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
