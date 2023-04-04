import React, { useState } from "react";
import data from "../data/dataPrestasiSiswa";

function PrestasiSiswa(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate index of last item on current page
  const indexOfLastItem = currentPage * itemsPerPage;

  // Calculate index of first item on current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get items to show on current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="overflow-x-auto">
      <table className="px-10 w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-[11px]">
            <th scope="col" className="px-6 py-3">
              Bidang Lomba
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
              Nama Siswa
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((e, i) => {
            const isExpanded = i === expandedIndex;
            const judul =
              e.JUDUL.length > 20 ? e.JUDUL.substring(0, 17) + "..." : e.JUDUL;

            return (
              <React.Fragment key={i}>
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : i)}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium cursor-pointer hover:text-blue-500 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {isExpanded ? e.JUDUL : judul}
                  </th>
                  <td className="px-6 py-4">{e.TANGGAL}</td>
                  <td className="px-6 py-4">{e.JUARA}</td>
                  <td className="px-6 py-4">{e.TINGKAT}</td>
                  <td className="px-6 py-4">{e.NAMA}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center my-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            className={`mx-1 px-3 py-1 rounded-md text-sm font-medium ${
              i + 1 === currentPage
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PrestasiSiswa;
