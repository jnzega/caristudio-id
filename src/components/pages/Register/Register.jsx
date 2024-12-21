import React from 'react';
import { useState } from 'react';
import './register.css';
import { auth, database } from '../../../firebase';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Simpan data pengguna di Realtime Database
      await set(ref(database, `users/${user.uid}`), {
        fullName,
        email: user.email,
      });

      // Logout otomatis setelah registrasi
      await signOut(auth);

      alert("Registrasi berhasil!");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Daftar Sebagai Anggota | CARISTUDIO.ID</title>
      </Helmet>
      <div className="register-container">
        <div className="register-card">
          <div className="register-card-header">
            <h1 className="logo-register"><a href="/">CARISTUDIO.ID</a></h1>
            <p className="description-register">Daftarkan diri Anda dan bergabung dengan kami.</p>
          </div>
          <div className="form-register">
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="name">Nama lengkap</label>
                <input
                  type="text"
                  id="name"
                  value={fullName}
                  placeholder="Masukan nama lengkap Anda..."
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
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
              <button type="submit" className="register-submit">Daftar</button>
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