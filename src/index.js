import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './App';
import registerServiceWorker from './registerServiceWorker';
import Application from './Application'

ReactDOM.render(<Counter />, document.getElementById('root'));
ReactDOM.render(<Application />, document.getElementById('root-child'));
registerServiceWorker();
