import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="right-footer">
            <h1 className='footer-logo'>CARISTUDIO</h1>
            <div className="contacts">
              <div className="contact-email">
                <p className='title'>Email</p>
                <p>contact@caristudio.id</p>
              </div>
              <div className="contact-telephone">
                <p className='title'>Telephone</p>
                <p>+62 812 3456 7890</p>
              </div>
            </div>
          </div>
          <div className="left-footer">
            <p className="footer-information">Cari studio hanya <br />di sini.</p>
            <div className="footer-btns">
              <div className="btn-info">
                <a href="#">Pusat Informasi</a>
              </div>
              <div className="btn-corp">
                <a href="#">Informasi Perusahaan</a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-footer">
          <p>Copyright CARISTUDIO.ID. All rights reserved.</p>
        </div>
      </div>
    </>
  )
};

export default Footer;