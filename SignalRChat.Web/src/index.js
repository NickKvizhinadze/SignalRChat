import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import store from './store';

ReactDOM.render(<Router store={store} />, document.getElementById('root'));
registerServiceWorker();
