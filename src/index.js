import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react/cjs/react.production.min';
import { BrowserRouter } from "react-router-dom";

import {Provider} from 'mobx-react';
import store from '../src/store/tasks/tasksStore'

import './index.css';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <Provider tasks={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
