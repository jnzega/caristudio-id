import React from 'react';
import Header from "../../Header/Header";
import "./HomePage.css";
import { Helmet } from "react-helmet-async";
import HomeCarousel from '../../HomeCarousel/HomeCarousel';
import Filter from '../../Filter/Filter';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Situs Cari Studio Terpercaya | CARISTUDIO.ID</title>
      </Helmet>
      <Header />
      <HomeCarousel />
      <Filter />
      <div className="body-web">test</div>
    </>
  )
};

export default HomePage;