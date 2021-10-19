import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import IntroContextProvider from './lib/hooks/useIntroContext';
import App from './App';
import './styles/index.css';
import 'react-device-frameset/lib/css/marvel-devices.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntroContextProvider>
        <App />
      </IntroContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
