import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';

// ARCHITECTURAL HARDENING: Defensive scripting with DOMContentLoaded and error handling
window.addEventListener('DOMContentLoaded', () => {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error("Could not find root element to mount to");
    }

    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to initialize React application:", error);
    // Provide a graceful fallback UI if React fails to render
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `<div style="text-align: center; padding: 40px; font-family: sans-serif; color: #b91c1c; background: #fff;"><h1>Application Error</h1><p>Could not load the application. Please try refreshing the page or contact support.</p></div>`;
    }
  }
});
