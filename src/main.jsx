// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
// import { store } from './redux/store.js';
import App from './App.jsx';
import './index.css';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </HelmetProvider>
);

// createRoot(document.getElementById('root')).render(
//   <HelmetProvider>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </HelmetProvider>
// );
