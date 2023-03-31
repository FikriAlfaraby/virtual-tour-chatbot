import React, { useState, useEffect } from "react";
import Rpl from "../img/rpl.png";
import Tkj from "../img/TKJ.jpg";
import { PropagateLoader } from "react-spinners";

function Jurusan(props) {
  const data = [
    {
      id: 1,
      title: "Rekaya Perangkat Lunak",
      dsc: "Program Keahlian Rekayasa Perangkat Lunak (RPL) adalah salah satu kompetensi keahlian dalam bidang Teknologi Komputer dan Informatika yang secara khusus mempelajari tentang pemrograman komputer.",
      image: Rpl,
      refrence: "https://id.wikipedia.org/wiki/Rekayasa_perangkat_lunak",
    },
    {
      id: 2,
      title: "Teknik Computer Jaringan",
      dsc: "Teknik Komputer dan Jaringan atau yang biasa disebut TKJ adalah teknik yang mempelajari tentang cara instalasi PC, instalasi LAN, memperbaiki PC dan mempelajari program-program PC.",
      image: Tkj,
      refrence: "https://id.wikipedia.org/wiki/Teknik_komputer_dan_jaringan",
    },
  ];

  return (
    <div className="relative">
      {/* <div className={`flex flex-row space-x-2 ${loading ? "opacity-0" : "opacity-100"}`}>
        <div className="w-6/12">
          <img className="rounded-lg" src={Rpl}></img>
          <button onClick={props.actionProvider.handleRPL} className=" text-sm hover:text-red-500 cursor-pointer">Rekayasa Perangkat Lunak</button>
        </div>
        <div className="w-6/12">
          <img className="rounded-lg" src={Tkj}></img>
          <button onClick={props.actionProvider.handleTKJ} className="text-sm hover:text-red-500 cursor-pointer ">Teknik Komputer Jaringan</button>
          <p></p>
        </div>
      </div> */}
      <div className="flex space-x-4">
        {data.map((data) => {
          return (
            <div class="w-6/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={data.image} alt="" />
              </a>
              <div class="p-5">
                <a target="blank" href={data.refrence}>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.dsc}
                </p>
                <a
                  target="blank"
                  href={data.refrence}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Jurusan;
