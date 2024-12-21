import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ filters, setFilters }) => {
  // State untuk dropdown "jenis studio"
  const [isOpenStudio, setIsOpenStudio] = useState(false);
  const [selectedStudio, setSelectedStudio] = useState(filters.jenisStudio || "Pilih jenis studio");
  const studioOptions = ["Photostudio", "Photobooth", "Photobox", "Photographer"];

  // State untuk dropdown "lokasi studio" pertama
  const [isOpenLocation1, setIsOpenLocation1] = useState(false);
  const [selectedLocation1, setSelectedLocation1] = useState(filters.lokasiStudio || "Pilih lokasi studio");
  const locationOptions = ["Jakarta", "Bogor", "Depok", "Tangerang"];

  // State untuk Date Range Picker
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('start'); // 'start' atau 'end'
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  // State untuk kalender dinamis
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // 0 = Jan, 11 = Des

  // Fungsi untuk format tanggal lokal
  const formatDate = (dateObj) => {
    if (!dateObj) return '';
    return dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  // Fungsi untuk menghitung susunan tanggal dalam bulan tertentu
  const generateCalendarDays = (year, month) => {
    // Dapatkan hari pertama bulan ini (Sunday-based index: 0=Min,1=Sen,...)
    const firstDayOfMonth = new Date(year, month, 1);
    const dayOfWeek = firstDayOfMonth.getDay(); // 0=Min,1=Sen,...,6=Sab
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Kita ingin Senin sebagai hari pertama
    // Sunday-based: Min=0, Sen=1, Sel=2, Rab=3, Kam=4, Jum=5, Sab=6
    // Kita mau minggu mulai Sen (index 0), jadi:
    // Index Senin-based = (dayOfWeek - 1 + 7) % 7
    // Jika dayOfWeek=1(Sen), (1-1+7)%7=0 -> Sen=0
    // Jika dayOfWeek=0(Min), (0-1+7)%7=6 -> Min=6, berarti 6 blank sebelum...
    const startIndex = (dayOfWeek - 1 + 7) % 7;

    const weeks = [];
    let currentDay = 1 - startIndex; // start dengan bilangan negatif atau 1

    // Kita buat 6 baris untuk memastikan semua tanggal tertampung
    for (let week = 0; week < 6; week++) {
      const weekDays = [];
      for (let d = 0; d < 7; d++) {
        const dayDate = new Date(year, month, currentDay);
        if (currentDay < 1 || currentDay > daysInMonth) {
          // Hari di luar bulan ini, kita pakai null agar tidak clickable
          weekDays.push(null);
        } else {
          weekDays.push(dayDate);
        }
        currentDay++;
      }
      weeks.push(weekDays);
    }

    return weeks;
  };

  const calendarWeeks = generateCalendarDays(currentYear, currentMonth);

  // Navigasi bulan
  const prevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear = currentYear - 1;
    }
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };

  const nextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear = currentYear + 1;
    }
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };

  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const handleDayClick = (day) => {
    if (!day) return; // Klik di hari null (diluar bulan ini) diabaikan
    if (activeTab === 'start') {
      setSelectedStartDate(day);
      setActiveTab('end'); // otomatis pindah ke tab akhir setelah pilih start
    } else {
      setSelectedEndDate(day);
      setIsDatePickerOpen(false); // Tutup setelah pilih end
    }
  };

  return (
    <div className="filter">
      <div className='filter-container'>
        <h2>Tentukan Kebutuhan mu</h2>
        <p>Jelajahi berbagai macam Studio di setiap daerah.</p>
        <div className="dropdown-container">

          {/* Dropdown Jenis Studio */}
          <div className="filter-dropdown">
            <div
              className="select"
              onClick={() => setIsOpenStudio(!isOpenStudio)}
            >
              <span className="selected">{selectedStudio}</span>
              <div className="caret">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BFBFBF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              </div>
            </div>
            <ul className={`menu ${isOpenStudio ? 'menu-open' : ''}`}>
              {studioOptions.map((option) => (
                <li
                  key={option}
                  className={option === selectedStudio ? 'active' : ''}
                  onClick={() => {
                    setSelectedStudio(option);
                    setFilters({ ...filters, jenisStudio: option });
                    setIsOpenStudio(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdown Lokasi Studio 1 */}
          <div className="filter-dropdown">
            <div
              className="select"
              onClick={() => setIsOpenLocation1(!isOpenLocation1)}
            >
              <span className="selected">{selectedLocation1}</span>
              <div className="caret">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BFBFBF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              </div>
            </div>
            <ul className={`menu ${isOpenLocation1 ? 'menu-open' : ''}`}>
              {locationOptions.map((option) => (
                <li
                  key={option}
                  className={option === selectedLocation1 ? 'active' : ''}
                  onClick={() => {
                    setSelectedLocation1(option);
                    setFilters({ ...filters, lokasiStudio: option });
                    setIsOpenLocation1(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

          {/* Date Range Picker (menggantikan dropdown Lokasi Studio 2) */}
          <div className="filter-dropdown">
            <div
              className="select"
              onClick={() => {
                setIsDatePickerOpen(!isDatePickerOpen);
                if (!isDatePickerOpen) {
                  // Reset tab ke start saat dibuka kembali
                  setActiveTab('start');
                }
              }}
            >
              <span className="selected">
                {selectedStartDate && selectedEndDate
                  ? `Dari: ${formatDate(selectedStartDate)} - Hingga: ${formatDate(selectedEndDate)}`
                  : "Pilih Tanggal"
                }
              </span>
              <div className="caret">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BFBFBF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
              </div>
            </div>

            {isDatePickerOpen && (
              <div className="calendar-container menu menu-open">
                <div className="calendar-tabs">
                  <div
                    className={`calendar-tab ${activeTab === 'start' ? 'active-tab' : ''}`}
                    onClick={() => setActiveTab('start')}
                  >
                    Tanggal Awal
                  </div>
                  <div
                    className={`calendar-tab ${activeTab === 'end' ? 'active-tab' : ''}`}
                    onClick={() => setActiveTab('end')}
                  >
                    Tanggal Akhir
                  </div>
                </div>
                <div className="calendar-header">
                  <button className="calendar-nav" onClick={prevMonth}>&lt;</button>
                  <span className="calendar-month">{monthNames[currentMonth]} {currentYear}</span>
                  <button className="calendar-nav" onClick={nextMonth}>&gt;</button>
                </div>
                <div className="calendar-grid">
                  <div className="calendar-weekdays">
                    <span>Sen</span>
                    <span>Sel</span>
                    <span>Rab</span>
                    <span>Kam</span>
                    <span>Jum</span>
                    <span>Sab</span>
                    <span>Min</span>
                  </div>
                  {calendarWeeks.map((week, i) => (
                    <div className="calendar-week" key={i}>
                      {week.map((day, idx) => (
                        <div
                          className="calendar-day"
                          key={idx}
                          onClick={() => handleDayClick(day)}
                        >
                          {day ? day.getDate() : ''}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
