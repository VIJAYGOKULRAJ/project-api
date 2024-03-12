import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/Redux/Store/Store.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
    <App />
    </Provider>
);


