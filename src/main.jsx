import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { getMuiTheme } from './theme/muiTheme.jsx';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MicrofrontendLoader from './components/ui/MFloader/MicroFrontendLoader.jsx';
import * as ReactRouterDOM from 'react-router-dom';
import * as MuiIcons from '@mui/icons-material';
import * as MaterialUI from '@mui/material';

// const Wrapper = () => {
//   window.process = { env: {} };
//   window.React = React;
//   window.ReactDOM = ReactDOM;
//   window.ReactRouterDOM = ReactRouterDOM;
//   window.MaterialUI = MaterialUI;
//   window.MuiIcons = MuiIcons;

//   window.MicrofrontendLoader = MicrofrontendLoader

//   return (<>
//     <ThemeProvider theme={getMuiTheme()}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//   </>)
// }




createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <BrowserRouter>
      <Wrapper />
    </BrowserRouter> */}
  </>
)
