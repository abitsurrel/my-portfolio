import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './components/dashboard/index.jsx';
import Login from './Login';
import { StrictMode } from 'react';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
 <StrictMode>
    <App />
  </StrictMode>
)
