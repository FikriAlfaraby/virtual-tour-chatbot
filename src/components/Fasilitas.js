import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import "./fasilitas.css";
import rps from "../img/rps.jpg";
import perpustakan from "../img/perpustakan.jpg";

const customSliderStyles = {
  background: "blue", // ganti dengan warna atau gambar background yang diinginkan
};

const cards = [
  {
    image: rps,
    title: "Ruang Produktif Siswa",
    subTitle: "Ini adalah ruangan produtif siswa",
  },
  {
    image: perpustakan,
    title: "Perpustakaan",
    subTitle: "Ini adalah Perpustakan",
  },
  {
    image: "https://picsum.photos/400/200",
    title: "Wikuhub",
    subTitle: "Ini adalah tempat wikuhub",
  },
  {
    image: "https://picsum.photos/400/200",
    title: "Lapangan Manatahan",
    subTitle: "Ini adalah lapangan manatahan",
  },
  {
    image: "https://picsum.photos/400/200",
    title: "Lapangan Basket",
    subTitle: "Ini adalah lapangan Basket",
  },
];

function Fasilitas() {
  return (
    <div className="max-w-5xl mx-auto">
      <AwesomeSlider>
        {cards.map((card) => (
          <div
            class="rounded-2xl shadow-lg mx-4 relative overflow-hidden"
            key={card.title}
          >
            <img
              src={card.image}
              alt="Gambar"
              class="w-full h-48 object-cover object-center transition duration-300 transform hover:scale-110 hover:brightness-90"
            />
            <div class="p-4">
              <h2 class="text-lg font-bold mb-2">{card.title}</h2>
              <p className="text-sm">{card.subTitle}</p>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
}

export default Fasilitas;
