import React from 'react';
import './login.css'

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-card-header">
            <h1 className="logo-register"><a href="/">CARISTUDIO.ID</a></h1>
            <p className="description-login">Masukan email dan password Anda untuk masuk.</p>
          </div>
          <div className="form-login">
            <form>
              <div className="form-group">
                <label htmlFor="email">Alamat email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Masukan email Anda..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Masukan email Anda..."
                />
              </div>
              <button type="submit" className="login-submit">Masuk</button>
            </form>
          </div>

          <div className="signup-link">
            <p>
              Belum punya akun? <a href="/register">Daftar di sini!</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;