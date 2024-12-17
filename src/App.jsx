import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomePage from "./components/pages/HomePage/HomePage";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import useWindowWidth from './components/hook/useWindowWidth/useWindowWidth';

const App = () => {
  const width = useWindowWidth();
  const isMobileView = width < 1024;

  return (

    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {isMobileView ? (
            <p>Tolong buka di tampilan desktop atau buka di situs ini di komputer Anda</p>
          ) : (
            <p>Tampilan normal untuk desktop (≥ 1024px)</p>
          )}
        </Routes>
      </Router>
    </HelmetProvider>
  );
};
export default App;
