import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Importa Routes, Route y Navigate
import { TranscriptionApp } from './TranscriptionApp.jsx';
import { Navbar } from './components/Navbar.jsx';
import { AboutPage } from './pages/AboutPage.jsx'; // Asegúrate de importar AboutPage
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TranscriptionApp />
            </>
          }
        />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);