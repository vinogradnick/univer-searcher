import React from 'react';
import ReactDOM from 'react-dom';
import HomePage  from './containers/HomePage';
import registerServiceWorker from './middleware/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
