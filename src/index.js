import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { storyblokInit, apiPlugin } from '@storyblok/react'
// import Page from './components/Page'
// import Grid from './components/Grid'
// import Feature from './components/Feature'
// import Teaser from './components/Teaser'
 
storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    // page: Page,
    // teaser: Teaser,
    // feature: Feature,
    // grid: Grid,
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
