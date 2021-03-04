import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main>
        <Routes />
      </main>
    </BrowserRouter>
  </Provider>
);

export default App;
