import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App/>,document.getElementById('root'));
//.hydrate is for Server side rendering
//.render is for client side rendering

//webpack --watch is normal watch run