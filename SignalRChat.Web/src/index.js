import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';

library.add(faFacebookF, faGoogle);

ReactDOM.render(<Router store={store} />, document.getElementById('root'));
registerServiceWorker();
