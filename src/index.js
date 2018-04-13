import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Graphic from './graphic';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Graphic />, document.getElementById('root'));
registerServiceWorker();
