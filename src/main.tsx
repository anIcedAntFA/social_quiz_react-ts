import React from 'react';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import SettingContextProvider from './contexts/SettingContext';
import './main.css';
import store from './redux/store';
import ThemeProvider from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <SettingContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SettingContextProvider>
      {/* </PersistGate> */}
    </ReduxProvider>
  </React.StrictMode>,
);
