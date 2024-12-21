import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../firebase';

const ProtectedRoute = ({ children, redirectIfLoggedIn = false }) => {

  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading</p>;

  if (user && redirectIfLoggedIn) {
    // Jika user sudah login dan akses ke halaman login register, arahkan ke home
    return <Navigate to="/" />;
  }

  if (!user && !redirectIfLoggedIn) {
    // Jika user belum login dan mencoba akses halaman yang butuh login
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;