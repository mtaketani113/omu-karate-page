import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AdsDisplay } from './components/parts/AdsDisplay';
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const drawerWidth = 240;
root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      ></Box>
      <Box
        component="main"
        style={{zIndex: 2}}
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <AdsDisplay />
      </Box>
    </Box>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
