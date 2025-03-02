import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

import App from './App/index';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import config from './config';
import 'antd/dist/antd.css';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
            {/* basename="/datta-able" */}
            <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
