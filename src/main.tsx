import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM, { hydrate } from 'react-dom';  // 18.0
// import { createRoot } from 'react-dom/client';  // 18.0
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


/* const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

if(container?.hasChildNodes()){
  hydrate(
    <React.StrictMode>
        <Provider store={rootStore}>
            <Routers />
        </Provider>
    </React.StrictMode>, 
    container
  );
}else{
  root.render(
    <React.StrictMode>
        <Provider store={rootStore}>
            <Routers />
        </Provider>
    </React.StrictMode>,
  );
  root.unmount();
} */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
