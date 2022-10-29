import React from 'react';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider as ReduxProvider } from 'react-redux';

// import store, { persistor } from './redux/store';
import App from './App';
import SettingContextProvider from './contexts/SettingContext';
import ThemeProvider from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <SettingContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SettingContextProvider>
    {/* </PersistGate>
    </ReduxProvider> */}
  </React.StrictMode>,
);
