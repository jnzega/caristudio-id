import React from 'react';
import './studio.css';
import Studiocards from '../Studiocards/Studiocards';
import dummyData from '../DummyData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Studio = ({ filters, dateRange }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const filteredData = dummyData.filter((studio) => {
    const matchJenisStudio = filters.jenisStudio
      ? studio.jasaStudio.includes(filters.jenisStudio)
      : true;
    const matchLokasiStudio = filters.lokasiStudio
      ? studio.lokasiStudio === filters.lokasiStudio
      : true;
    return matchJenisStudio && matchLokasiStudio;
  });

  return (
    <div className="studio">
      <div className="studio-container">
        <Slider {...settings}>
          {filteredData.map((data) => (
            <Studiocards
              key={data.idStudio}
              namaStudio={data.namaStudio}
              lokasiStudio={data.lokasiStudio}
              ketersediaanStudio={data.ketersediaanStudio}
              jasaStudio={data.jasaStudio}
              hargaStudio={data.hargaStudio}
              thumbnail={data.thumbnail}
              dateRange={dateRange}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Studio;