import React from "react";
import ReactTyped from "react-typed";

const TypedReact = () => {
  return (
    <div className="text-red-500 text-2xl">
      <ReactTyped
        loop
        typeSpeed={50}
        backSpeed={30}
        strings={["Selamat Datang di Virtual Tour SMK Telkom Malang"]}
        smartBackspace
        shuffle={false}
        startDelay={1000} // delay 2 detik sebelum animasi dimulai
        backDelay={1000} // delay 1 detik sebelum animasi kembali
        fadeOut={false}
        fadeOutDelay={100}
        loopCount={0}
        showCursor
        cursorChar="|"
      />
    </div>
  );
};

export default TypedReact;
