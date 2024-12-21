import React from 'react';
import { useState, useEffect } from 'react';
import './studiocards.css';
import { useNavigate } from 'react-router-dom';
import { auth, database } from '../../firebase';
import { ref, push } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';

const Studiocards = ({ namaStudio, lokasiStudio, ketersediaanStudio, jasaStudio, hargaStudio, thumbnail, dateRange }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleOrderClick = () => {
    if (!dateRange.tanggalMulai || !dateRange.tanggalSelesai) {
      alert('Pilih Rentang Tanggal Terlebih Dahulu');
      return;
    }

    if (!user) {
      navigate('/login');
      return;
    }

    const confirmMessage = `
      Apakah Anda yakin dengan pesanan ini?
      Pemesan: ${user.email}
      Studio: ${namaStudio}
      Harga: Rp${hargaStudio.toLocaleString()}
      Tanggal: ${formatDateForConfirm(dateRange.tanggalMulai)} - ${formatDateForConfirm(dateRange.tanggalSelesai)}
    `;

    if (window.confirm(confirmMessage)) {
      const formattedStartDate = formatDateForDatabase(dateRange.tanggalMulai);
      const formattedEndDate = formatDateForDatabase(dateRange.tanggalSelesai);
    
      push(ref(database, 'bookings'), {
        pemesan: user.email,
        namaStudio,
        hargaStudio,
        tanggalMulai: formattedStartDate,
        tanggalSelesai: formattedEndDate,
      })
        .then(() => alert('Pemesanan Berhasil Dilakukan!'))
        .catch((error) => alert('Terjadi kesalahan: ' + error.message));
    }
  };

  const formatDateForDatabase = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatDateForConfirm = (date) => {
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  

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
        <button onClick={handleOrderClick} className="order-now">
          Pesan Sekarang!
        </button>
      </div>
    </div>
  )
}

export default Studiocards