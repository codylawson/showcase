import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import ShowcaseTheme from './theme/ShowcaseTheme';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={ShowcaseTheme}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
