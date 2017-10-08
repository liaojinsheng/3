import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './store'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// function render() {
//     ReactDOM.render(
//         <App />, 
//         document.getElementById('root')
//     );
// }

// // 数据如果发生变化，再调用一次
// store.subscribe(render)

// // 默认调用一次
// render();

registerServiceWorker();

