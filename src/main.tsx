import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { rootStore } from "./redux/store";
import Routers from "./routers";
import '@/assets/base/global.scss';

const container = document.getElementById('root');
if(container?.hasChildNodes()){
  ReactDOM.hydrate(
    <React.StrictMode>
        <Provider store={rootStore}>
            <Routers />
        </Provider>
    </React.StrictMode>, 
    container
  );
}else{
  ReactDOM.render(
    <React.StrictMode>
        <Provider store={rootStore}>
            <Routers />
        </Provider>
    </React.StrictMode>,
    container,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
