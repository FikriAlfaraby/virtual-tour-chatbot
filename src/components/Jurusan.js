import React, { useState, useEffect } from "react";
import Rpl from "../img/rpl.png";
import Tkj from "../img/TKJ.jpg";
import { PropagateLoader } from "react-spinners";

function Jurusan(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // simulasi waktu loading
  }, []);

  return (
    <div className="relative">
      <PropagateLoader
        size={20}
        color={"#ee2b47"}
        loading={loading}
        className="pt-10 w-10/12"
        css={"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"}
      />
      <div className={`flex flex-row space-x-2 ${loading ? "opacity-0" : "opacity-100"}`}>
        <div className="w-6/12">
          <img className="rounded-lg" src={Rpl}></img>
          <button onClick={props.actionProvider.handleRPL} className=" text-sm hover:text-red-500 cursor-pointer">Rekayasa Perangkat Lunak</button>
        </div>
        <div className="w-6/12">
          <img className="rounded-lg" src={Tkj}></img>
          <button onClick={props.actionProvider.handleTKJ} className="text-sm hover:text-red-500 cursor-pointer ">Teknik Komputer Jaringan</button>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Jurusan;
