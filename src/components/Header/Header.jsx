import React from 'react';
import "./Header.css";
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';

const Header = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Pantai perubahan status login
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        
      }
      setUser(currentUser);
    });

    return () => unsubscribe(); // Bersihkan listener saat komponen dihapus
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Berhasil logout!");
    } catch (err) {
      console.error("Error saat logout:", err);
    }
  }

  return (
    <>
      <div className="underconstruction">
        <p>Under development. Please contact your developer to: <b>joshuazega@outlook.com</b></p>
      </div>
      <div className="header">
        <div className="container">
          <div className="logo"><a href="#">CARISTUDIO.ID</a></div>
          <form>
            <input className="search-bar" type="search" placeholder='Cari Studio...' />
            <span class="material-symbols-outlined">
              search
            </span>
          </form>
          <div className="btn-container">
            {user ? (
              <a onClick={handleLogout} href='/' className="register">Logout</a>
            ) : (
              <>
                <a href='/login' className="login">Masuk</a>
                <a href='/register' className="register">Daftar</a>
              </>
            )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;