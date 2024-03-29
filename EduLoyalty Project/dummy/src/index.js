import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SessionProvider } from '../src/components/SessionContext';

ReactDOM.render(
    <React.StrictMode>
        <SessionProvider>
            <App />
        </SessionProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
