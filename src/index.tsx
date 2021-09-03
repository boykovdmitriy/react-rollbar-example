import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: process.env.REACT_APP_DSN,
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
const queryClient = new QueryClient();

ReactDOM.render(
  <Sentry.ErrorBoundary
    fallback={({ error, componentStack, resetError }) => (
      <>
        <div>You have encountered an error</div>
        <div>{error.toString()}</div>
        <div>{componentStack}</div>
        <button
          type="button"
          onClick={() => {
            resetError();
          }}
        >
          Click here to reset!
        </button>
      </>
    )}
  >
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Sentry.ErrorBoundary>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
