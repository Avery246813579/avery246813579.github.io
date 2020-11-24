import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppLayout from "./layouts/app-layout";
import {Provider} from "react-redux";
import {setupStore} from "./redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={setupStore()}>
            <AppLayout>

            </AppLayout>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
