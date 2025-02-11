import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './components/ui/theme-provider.jsx';
import { inject } from '@vercel/analytics';
import App from './App.jsx';
import './index.css';

inject();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <App />
    </ThemeProvider>
  </StrictMode>
);
