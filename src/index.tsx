import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles'
import store from './store'

import './index.css'

import App from './App'

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </Provider>
);
