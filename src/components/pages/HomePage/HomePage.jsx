import React, { useState } from 'react';
import Header from "../../Header/Header";
import "./HomePage.css";
import { Helmet } from "react-helmet-async";
import HomeCarousel from '../../HomeCarousel/HomeCarousel';
import Filter from '../../Filter/Filter';
import Studio from '../../Studio/Studio';
import Faq from '../../Faq/Faq';
import Footer from '../../Footer/Footer';

const HomePage = () => {
  const [filters, setFilters] = useState({
    jenisStudio: null,
    lokasiStudio: null,
  });

  const [dateRange, setDateRange] = useState({ tanggalMulai: null, tanggalSelesai: null });

  return (
    <>
      <Helmet>
        <title>Situs Cari Studio Terpercaya | CARISTUDIO.ID</title>
      </Helmet>
      <Header />
      <HomeCarousel />
      {/* Kirim state filter ke Filter dan Studio */}
      <Filter filters={filters} setFilters={setFilters} setDateRange={setDateRange} />
      <Studio filters={filters} dateRange={dateRange} />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
