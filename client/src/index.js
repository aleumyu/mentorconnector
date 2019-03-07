import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './components/landing';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Landing />, document.getElementById('root'));

serviceWorker.unregister();
