import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomePage from "./components/pages/HomePage/HomePage";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";

const App = () => (
  <HelmetProvider>
    <Router basename="/caristudio-id">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </HelmetProvider>
);

export default App;
