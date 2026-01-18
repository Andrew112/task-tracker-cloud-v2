import { Amplify } from 'aws-amplify';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import config from '../amplify_outputs.json';

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
