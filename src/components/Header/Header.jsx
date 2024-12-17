import React from 'react';
import "./Header.css";

const Header = () => {
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
            <a href='/login' className="login">Masuk</a>
            <a href='/register' className="register">Daftar</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;