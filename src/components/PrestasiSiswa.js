import React from "react";

function PrestasiSiswa(props) {
  const data = [
    {
      namaKegiatan: "Turnamen Balap Kurang",
      tahun: "2022",
      juara: "1",
      tingkat: "Nasional",
      siswa: "Fikri Alfaraby",
    },
    {
      namaKegiatan: "Turnamen Bermain Mobile Legends",
      tahun: "2025",
      juara: "1",
      tingkat: "International",
      siswa: "Alfaraby Fikri",
    },
    {
      namaKegiatan: "Turnamen Makan Krupuk",
      tahun: "2019",
      juara: "1",
      tingkat: "Nasional",
      siswa: "M.Fikri Alfaraby",
    },
  ];
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-[11px]">
            <th scope="col" className="px-6 py-3">
              Nama Kegiatan
            </th>
            <th scope="col" className="px-6 py-3">
              Tahun
            </th>
            <th scope="col" className="px-6 py-3">
              Juara
            </th>
            <th scope="col" className="px-6 py-3">
              Tingkat
            </th>
            <th scope="col" className="px-6 py-3">
              Siswa / Tim
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {e.namaKegiatan}
                </th>
                <td className="px-6 py-4">{e.tahun}</td>
                <td className="px-6 py-4">{e.juara}</td>
                <td className="px-6 py-4">{e.tingkat}</td>
                <td className="px-6 py-4">{e.siswa}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PrestasiSiswa;
