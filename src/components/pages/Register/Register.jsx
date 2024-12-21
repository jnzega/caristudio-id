import React from 'react';
import './register.css'

const Register = () => {
  return (
    <>
      <div className="register-container">
        <div className="register-card">
          <div className="register-card-header">
            <h1 className="logo-register"><a href="/">CARISTUDIO.ID</a></h1>
            <p className="description-register">Daftarkan diri Anda dan bergabung dengan kami.</p>
          </div>
          <div className="form-register">
            <form>
              <div className="form-group">
                <label htmlFor="name">Nama lengkap</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Masukan nama lengkap Anda..."
                />
              </div>
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
              <button type="submit" className="register-submit">Masuk</button>
            </form>
          </div>

          <div className="login-link">
            <p>
              Sudah punya akun? <a href="/login">Masuk!</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Register;