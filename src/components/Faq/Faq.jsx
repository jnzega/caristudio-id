import React, { useState } from 'react';
import './faq.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // State untuk melacak div mana yang terbuka

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Tutup jika index sama, buka jika berbeda
  };

  const contents = [
    {
      title: 'Apa itu CARISTUDIO.ID?',
      content:
        'CARISTUDIO.ID adalah sebuah solusi untuk permasalahan seorang client yang hendak mencari kebutuhan studio foto. Kami menyediakan informasi lengkap dan terpusat tentang studio foto di berbagai lokasi, termasuk detail fasilitas, harga paket, ulasan, pelanggan, dan foto studio. Memungkinkan konsumen untuk mencari studio berdasarkan lokasi terdekat, layanan, dan ketersediaan jadwal, serta melakukan pemesanan langsung melalui platform',
    },
    {
      title: 'Layanan apa saja yang disediakan CARISTUDIO.ID?',
      content:
        'Terdapat berbagai macam layanan yang dapat Anda temukan di tempat kami. Mulai dari Photostudio, Photobooth, Photobox, hingga Photographer. Anda dapat memesan 4 layanan tersebut dari semua mitra kami yang tersebar di beberapa kota. Kami memastikan bahwa mitra yang kami sediakan adalah mitra yang profesional dan bertanggung jawab.',
    },
    {
      title: 'Daerah mana saja yang dicakup CARISTUDIO.ID?',
      content:
        'Mitra kami tersebar di 4 kota besar yaitu Jakarta, Bogor, Depok, hingga Tangerang. Anda dapat memilih studio foto mana yang Anda perlukan sesuai dengan kota Anda tinggal atau berada. Kami memastikan mitra yang kami sediakan dapat dengan mudah dihubungi oleh semua calon klien atau pengguna jasa.',
    },
    {
      title: 'Bagaimana cara memesan studio di CARISTUDIO.ID?',
      content:
        'Pastikan kamu sudah mendaftar sebagai pengguna di situs web resmi kami. Setelah mendaftar, kamu dapat memilih kriteria studio yang kamu butuhkan. Mulai dari jenis jasa yang kamu perlukan, lokasi, hingga tanggal kamu memerlukan studio tersebut. Semua dapat diakses dengan mudah hanya dengan satu kali klik.',
    },
  ];

  return (
    <>
      <div className="faq">
        <div className="faq-container">
          <h2 className="faq-title">FAQ <span className='faq-title-logo'>CARISTUDIO.ID</span></h2>
          <h2 className="faq-headline">Pertanyaan umum tentang
            <br /><span className='faq-headline-logo'>CARISTUDIO.ID</span></h2>
          <div className="faq-dropdown-container">
            <div>
              {contents.map((item, index) => (
                <div className='faq-dropdown-item' key={index}>
                  {/* Div Utama */}
                  <div
                    className='faq-dropdown-button'
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{item.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#BFBFBF"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                  </div>

                  {/* Dropdown Konten */}
                  <div
                    style={{
                      maxHeight: openIndex === index ? '1000px' : '0',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className={`faq-content ${openIndex === index ? 'open' : ''}`}
                    >
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Faq;