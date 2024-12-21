import React from 'react';
import './login.css'
import { useState } from 'react';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Helmet } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login berhasil!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <Helmet>
        <title>Masuk Sebagai Anggota | CARISTUDIO.ID</title>
      </Helmet>
      <div className="login-container">
        <div className="login-card">
          <div className="login-card-header">
            <h1 className="logo-register"><a href="/">CARISTUDIO.ID</a></h1>
            <p className="description-login">Masukan email dan password Anda untuk masuk.</p>
          </div>
          <div className="form-login">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Alamat email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Masukan email Anda..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Masukan email Anda..."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="login-submit">Masuk</button>
            </form>
          </div>

          <div className="signup-link">
            <p>
              Belum punya akun? <a href="/#/register">Daftar di sini!</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;