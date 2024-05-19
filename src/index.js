import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = createRoot(document.getElementById('root')) // createRoot(container!) if you use TypeScript
root.render(<App />)