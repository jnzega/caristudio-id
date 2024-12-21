import React from 'react';
import './studio.css';
import Studiocards from '../Studiocards/Studiocards';
import dummyData from '../DummyData';
import Filter from "../Filter/Filter";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Studio = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="studio">
        <div className="studio-container">
          <Slider {...settings}>
            {dummyData.map((data) => (
              <Studiocards
                key={data.idStudio}
                namaStudio={data.namaStudio}
                lokasiStudio={data.lokasiStudio}
                ketersediaanStudio={data.ketersediaanStudio}
                jasaStudio={data.jasaStudio}
                hargaStudio={data.hargaStudio}
                thumbnail={data.thumbnail}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Studio;
