import React from "react";
import "./Header.css";
import { auth, database } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref, onValue, remove } from "firebase/database";
import { useState, useEffect } from "react";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [bookings, setBookings] = useState([]); // State untuk menyimpan daftar pesanan

  useEffect(() => {
    // Pantau perubahan status login
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    if (!isPopupOpen && user) {
      fetchBookings(user.email); // Ambil data pesanan saat popup dibuka
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const fetchBookings = (email) => {
    const bookingsRef = ref(database, "bookings");
    onValue(bookingsRef, (snapshot) => {
      const data = snapshot.val();
      const userBookings = Object.entries(data || {})
        .filter(([key, value]) => value.pemesan === email)
        .map(([key, value]) => ({ id: key, ...value }));
      setBookings(userBookings); // Simpan data pesanan pengguna ke state
    });
  };

  const deleteBooking = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pesanan ini?")) {
      const bookingRef = ref(database, `bookings/${id}`);
      remove(bookingRef)
        .then(() => {
          alert("Pesanan berhasil dihapus!");
          setBookings((prev) => prev.filter((booking) => booking.id !== id));
        })
        .catch((error) => {
          console.error("Error saat menghapus pesanan:", error);
        });
    }
  };

  return (
    <>
      <div className="underconstruction">
        <p>
          Under development. Please contact your developer to:{" "}
          <b>joshuazega@outlook.com</b>
        </p>
      </div>
      <div className="header">
        <div className="container">
          <div className="logo">
            <a href="#">CARISTUDIO.ID</a>
          </div>
          <form>
            <input
              className="search-bar"
              type="search"
              placeholder="Cari Studio..."
            />
            <span className="material-symbols-outlined">search</span>
          </form>
          <div className="btn-container">
            {user ? (
              <>
                <a onClick={handleLogout} href="/" className="register">
                  Logout
                </a>
                <a onClick={togglePopup} href="#" className="register">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFF"
                  >
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                  </svg>
                </a>
              </>
            ) : (
              <>
                <a href="/#/login" className="login">
                  Masuk
                </a>
                <a href="/#/register" className="register">
                  Daftar
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Pesanan {user?.email}</h2>
            {bookings.length > 0 ? (
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Nama Studio</th>
                    <th>Harga Studio</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Selesai</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.namaStudio}</td>
                      <td>Rp{booking.hargaStudio.toLocaleString()}</td>
                      <td>{booking.tanggalMulai}</td>
                      <td>{booking.tanggalSelesai}</td>
                      <td>
                        <button className="button-delete" onClick={() => deleteBooking(booking.id)}>
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Anda belum memiliki pesanan.</p>
            )}
            <button onClick={closePopup}>Tutup</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
