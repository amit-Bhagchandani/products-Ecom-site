import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import productReducer from './features/productSlice'

const store = configureStore(
  {
    reducer: {
      cart: cartReducer,
      product: productReducer
    }
  }
);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store = { store }>
        <App/>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

