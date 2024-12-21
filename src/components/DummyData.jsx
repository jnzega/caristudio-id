import Thumbnail1 from "../assets/img/thumbnail/studio-1.png";
import Thumbnail2 from "../assets/img/thumbnail/studio-2.png";
import Thumbnail3 from "../assets/img/thumbnail/studio-3.png";
import Thumbnail4 from "../assets/img/thumbnail/studio-4.png";
import Thumbnail5 from "../assets/img/thumbnail/studio-5.png";
import Thumbnail6 from "../assets/img/thumbnail/studio-6.png";
import Thumbnail7 from "../assets/img/thumbnail/studio-7.png";
import Thumbnail8 from "../assets/img/thumbnail/studio-8.png";
import Thumbnail9 from "../assets/img/thumbnail/studio-9.png";
import Thumbnail10 from "../assets/img/thumbnail/studio-10.png";
import Thumbnail11 from "../assets/img/thumbnail/studio-11.png";
import Thumbnail12 from "../assets/img/thumbnail/studio-12.png";
import Thumbnail13 from "../assets/img/thumbnail/studio-13.png";
import Thumbnail14 from "../assets/img/thumbnail/studio-14.png";
import Thumbnail15 from "../assets/img/thumbnail/studio-15.png";
import Thumbnail16 from "../assets/img/thumbnail/studio-16.png";
import Thumbnail17 from "../assets/img/thumbnail/studio-17.png";
import Thumbnail18 from "../assets/img/thumbnail/studio-18.png";
import Thumbnail19 from "../assets/img/thumbnail/studio-19.png";
import Thumbnail20 from "../assets/img/thumbnail/studio-20.png";

const dummyData = [
  {
    idStudio: 1,
    namaStudio: "DSRD Studio",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Photobooth"],
    hargaStudio: 700000,
    thumbnail: Thumbnail1, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 2,
    namaStudio: "Dua Transisi Brigth Studio",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Costume Rent"],
    hargaStudio: 300000,
    thumbnail: Thumbnail2, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 3,
    namaStudio: "Studio Jakarta Kramat",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Tools & Gear Rent", "Make Up Artist"],
    hargaStudio: 1000000,
    thumbnail: Thumbnail3, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 4,
    namaStudio: "Mint Studio",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Small Studio", "Medium Studio"],
    hargaStudio: 300000,
    thumbnail: Thumbnail4, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 5,
    namaStudio: "Cemerlang Studio Foto Margonda",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer"],
    hargaStudio: 1500000,
    thumbnail: Thumbnail5, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 6,
    namaStudio: "Home Photoworks Depok",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Photoprint"],
    hargaStudio: 1500000,
    thumbnail: Thumbnail6, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 7,
    namaStudio: "Semutputihstudio",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Photobooth"],
    hargaStudio: 350000,
    thumbnail: Thumbnail7, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 8,
    namaStudio: "Rinjani Studio Ciputat",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Photobook"],
    hargaStudio: 500000,
    thumbnail: Thumbnail8, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 9,
    namaStudio: "Wefio - Photobooth 180 & 360 Degree Jakarta",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobooth", "Matrix 180 & 360"],
    hargaStudio: 2000000,
    thumbnail: Thumbnail9, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 10,
    namaStudio: "SelfieTime.id Margo City Depok",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobooth", "Photostudio"],
    hargaStudio: 120000,
    thumbnail: Thumbnail10, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 11,
    namaStudio: "Loyalphotobooth",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobooth", "Videobooth", "Framebox"],
    hargaStudio: 250000,
    thumbnail: Thumbnail11, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 12,
    namaStudio: "Photoplace et al Coffee Pusat",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobox", "Photostrip"],
    hargaStudio: 25000,
    thumbnail: Thumbnail12, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 13,
    namaStudio: "Gomez Photo Box",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobox", "Photostrip", "Dll."],
    hargaStudio: 10000,
    thumbnail: Thumbnail13, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 14,
    namaStudio: "Papyrus Photo Margocity",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobooth", "Photostrip", "Dll."],
    hargaStudio: 50000,
    thumbnail: Thumbnail14, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 15,
    namaStudio: "Difotoin Yourself | Self Photo & Photo Box",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photobox"],
    hargaStudio: 150000,
    thumbnail: Thumbnail15, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 16,
    namaStudio: "Frameless Photobox",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photobox", "Photobooth"],
    hargaStudio: 150000,
    thumbnail: Thumbnail16, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 17,
    namaStudio: "THE PHOTOMOTO",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Wedding Photograph", "Photographer"],
    hargaStudio: 13000000,
    thumbnail: Thumbnail17, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 18,
    namaStudio: "SEDJIWAIMAJI",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Wedding Photograph", "Photographer"],
    hargaStudio: 2500000,
    thumbnail: Thumbnail18, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 19,
    namaStudio: "Frame Depth Photography",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Wedding Photograph", "Photographer"],
    hargaStudio: 2500000,
    thumbnail: Thumbnail19, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 20,
    namaStudio: "11m_photography",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Wedding Photograph", "Photographer"],
    hargaStudio: 2500000,
    thumbnail: Thumbnail20, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 21,
    namaStudio: "DSRD Studio",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Photobooth"],
    hargaStudio: 700000,
    thumbnail: Thumbnail1, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 22,
    namaStudio: "Dua Transisi Brigth Studio",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Costume Rent"],
    hargaStudio: 300000,
    thumbnail: Thumbnail2, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 23,
    namaStudio: "Studio Jakarta Kramat",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Tools & Gear Rent", "Make Up Artist"],
    hargaStudio: 1000000,
    thumbnail: Thumbnail3, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 24,
    namaStudio: "Mint Studio",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Small Studio", "Medium Studio"],
    hargaStudio: 300000,
    thumbnail: Thumbnail4, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 25,
    namaStudio: "Cemerlang Studio Foto Margonda",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer"],
    hargaStudio: 1500000,
    thumbnail: Thumbnail5, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 26,
    namaStudio: "Home Photoworks Depok",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Photoprint"],
    hargaStudio: 1500000,
    thumbnail: Thumbnail6, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 27,
    namaStudio: "Semutputihstudio",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Photobooth"],
    hargaStudio: 350000,
    thumbnail: Thumbnail7, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 28,
    namaStudio: "Rinjani Studio Ciputat",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photographer", "Photobook"],
    hargaStudio: 500000,
    thumbnail: Thumbnail8, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 29,
    namaStudio: "Wefio - Photobooth 180 & 360 Degree Jakarta",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobooth", "Matrix 180 & 360"],
    hargaStudio: 2000000,
    thumbnail: Thumbnail9, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 30,
    namaStudio: "SelfieTime.id Margo City Depok",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobooth", "Photostudio"],
    hargaStudio: 120000,
    thumbnail: Thumbnail10, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 31,
    namaStudio: "Loyalphotobooth",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobooth", "Videobooth", "Framebox"],
    hargaStudio: 250000,
    thumbnail: Thumbnail11, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 32,
    namaStudio: "Photoplace et al Coffee Pusat",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobox", "Photostrip"],
    hargaStudio: 25000,
    thumbnail: Thumbnail12, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 33,
    namaStudio: "Gomez Photo Box",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobox", "Photostrip", "Dll."],
    hargaStudio: 10000,
    thumbnail: Thumbnail13, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 34,
    namaStudio: "Papyrus Photo Margocity",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photobooth", "Photostrip", "Dll."],
    hargaStudio: 50000,
    thumbnail: Thumbnail14, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 35,
    namaStudio: "Difotoin Yourself | Self Photo & Photo Box",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photobox"],
    hargaStudio: 150000,
    thumbnail: Thumbnail15, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 36,
    namaStudio: "Frameless Photobox",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Photobox", "Photobooth"],
    hargaStudio: 150000,
    thumbnail: Thumbnail16, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 37,
    namaStudio: "THE PHOTOMOTO",
    lokasiStudio: "Jakarta",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Wedding Photograph", "Photographer"],
    hargaStudio: 13000000,
    thumbnail: Thumbnail17, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 38,
    namaStudio: "SEDJIWAIMAJI",
    lokasiStudio: "Depok",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Wedding Photograph", "Photographer"],
    hargaStudio: 2500000,
    thumbnail: Thumbnail18, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 39,
    namaStudio: "Frame Depth Photography",
    lokasiStudio: "Tangerang",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Wedding Photograph", "Photographer"],
    hargaStudio: 2500000,
    thumbnail: Thumbnail19, // Ganti dengan URL gambar nyata
  },
  {
    idStudio: 30,
    namaStudio: "11m_photography",
    lokasiStudio: "Bogor",
    ketersediaanStudio: "Tersedia",
    jasaStudio: ["Photostudio", "Wedding Photograph", "Photographer"],
    hargaStudio: 2500000,
    thumbnail: Thumbnail20, // Ganti dengan URL gambar nyata
  },
];

export default dummyData;
