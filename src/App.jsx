import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomePage from "./components/pages/HomePage/HomePage";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    // Fungsi untuk mengupdate state sesuai dengan kondisi media query
    const handleChange = (e) => {
      setIsDesktop(e.matches);
    };

    // Cek pertama kali saat mount
    handleChange(mediaQuery);

    // Daftarkan listener
    if ('addEventListener' in mediaQuery) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback untuk browser lama
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if ('removeEventListener' in mediaQuery) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  if (!isDesktop) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <p>Mohon buka situs web menggunakan desktop atau komputer Anda</p>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
