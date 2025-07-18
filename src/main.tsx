import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/hoang-quangnam-portfolio-glow">
      <ThemeProvider defaultTheme="dark">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
