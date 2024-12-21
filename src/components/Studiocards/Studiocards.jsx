import React from 'react';
import './studiocards.css';
import Thumbnail1 from "../../assets/img/thumbnail/studio-1.png";

const Studiocards = ({ namaStudio, lokasiStudio, ketersediaanStudio, jasaStudio, hargaStudio, thumbnail }) => {
  return (
    <div className="studio-card">
      <div className="image-card">
        <img src={thumbnail} alt={namaStudio} />
      </div>
      <div className="description-card">
        <h1>{namaStudio}</h1>
        <p className="location-availability">
          {lokasiStudio} · {ketersediaanStudio}
        </p>
        <p className="information">
          Jasa tersedia:
        </p>
        <ul>
          {jasaStudio.map((jasa, index) => (
            <li key={index}>✓ {jasa}</li>
          ))}
        </ul>
      </div>
      <div className="price-order">
        <h1>Rp{hargaStudio.toLocaleString()}</h1>
        <button className="order-now">
          Pesan Sekarang!
        </button>
      </div>
    </div>
  )
}

export default Studiocards