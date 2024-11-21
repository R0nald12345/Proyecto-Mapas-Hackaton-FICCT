
import { FiAlignJustify } from "react-icons/fi";
import React, { useState } from "react";
import { useMapBox } from "../hooks/useMapBox";
import ModalMapas from "../Modal/ModalMapas";

const puntoInicial = {
  lng: -63.1829,
  lat: -17.7891,
  zoom: 13.5,
};

const MapaPage = () => {
  const { setRef, coords, area, centro } = useMapBox(puntoInicial);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ModalMapas open={openModal} onClose={() => setOpenModal(false)} />

      <div className="info p-4 bg-gray-800 text-white fixed top-4 left-4 rounded-lg shadow-lg z-10">
        Lng: {coords.lng} | Lat: {coords.lat} | Zoom: {coords.zoom} <br />
        Área: {area} km² <br />
        Centro: {centro ? `${centro[1].toFixed(4)}, ${centro[0].toFixed(4)}` : "N/A"}
      </div>

      {
        openModal ? null: (
        <div className="fixed top-4 right-4 z-10">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 flex items-center justify-center"
            onClick={() => setOpenModal(true)}
          >
            <FiAlignJustify size={24} /> {/* Ajusta el tamaño aquí */}
          </button>
        </div>
        )
      }

      <div className="mapContainer h-screen" ref={setRef} />
    </>
  );
};

export default MapaPage;
