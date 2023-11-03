import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/redux/store';
import { Provider } from 'react-redux';

const theme = {
  colors: {
    btnColor: 'rgb(255, 165, 0)',
    btnHover: 'rgb(243, 189, 90)',
    backgroundColor: 'rgb(107, 107, 239)',
    containerColor: 'rgb(64, 64, 239)',
    error: 'red',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
