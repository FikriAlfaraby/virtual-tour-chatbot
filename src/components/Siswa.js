import React from "react";
import { useState } from "react";
import Select from "react-select";
import CountUp from "react-countup";

function AnimatedNumber() {
  const [selectedClass, setSelectedClass] = useState(null);
  const classData = {
    "X RPL": 319,
    "X TKJ": 192,
    "XI RPL": 300,
    "XI TKJ": 210,
    "XII RPL": 314,
    "XII TKJ": 201,
  };

  const handleClassChange = (selectedOption) => {
    setSelectedClass(selectedOption);
  };

  const getClassOptions = () => {
    return Object.keys(classData).map((kelas) => ({
      value: kelas,
      label: `${kelas}`,
    }));
  };

  const getSiswaCount = () => {
    if (selectedClass) {
      return classData[selectedClass.value];
    }
    return null;
  };
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <label htmlFor="class-select" className="mr-4 w-2/12">
          Pilih kelas:
        </label>
        <Select
          id="class-select"
          className="w-10/12"
          options={getClassOptions()}
          onChange={handleClassChange}
          value={selectedClass}
          isClearable={true}
          placeholder="-- Pilih kelas --"
        />
      </div>
      {selectedClass && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2">
            Jumlah siswa di Kelas {selectedClass.label}:
          </p>
          <p className="font-bold text-2xl">
            <CountUp end={getSiswaCount()} />
          </p>
        </div>
      )}
    </div>
  );
}

export default AnimatedNumber;
