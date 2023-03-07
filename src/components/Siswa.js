import React from "react";
import { useState } from "react";
import CountUp from "react-countup";

function AnimatedNumber() {
  const [selectedClass, setSelectedClass] = useState(null);
  const classData = {
    XR1: 25,
    XR2: 30,
    XR3: 40,
    XR4: 60,
    XR5: 80,
    XR6: 90,
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const getClassList = () => {
    return Object.keys(classData);
  };

  const getSiswaCount = () => {
    if (selectedClass) {
      return classData[selectedClass];
    }
    return null;
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <label htmlFor="class-select" className="mr-4 w-2/12">
          Pilih kelas:
        </label>
        <select
          id="class-select"
          className="border border-gray-400 rounded py-2 px-4 w-10/12"
          onChange={handleClassChange}
        >
          <option value="">-- Pilih kelas --</option>
          {getClassList().map((kelas) => (
            <option key={kelas} value={kelas}>
              Kelas {kelas}
            </option>
          ))}
        </select>
      </div>
      {selectedClass && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2">
            Jumlah siswa di Kelas {selectedClass}:
          </p>
          <p className="text-3xl font-bold">{getSiswaCount()}</p>
        </div>
      )}
    </div>
  );
}

export default AnimatedNumber;
