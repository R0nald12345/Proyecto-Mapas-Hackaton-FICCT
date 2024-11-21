
// import { useMapBox } from "../hooks/useMapBox";

// const puntoInicial = {
//   lng:-63.1829,
//   lat:-17.7891,
//   zoom:13.5
// }

// const MapaPage = () => {

//   const {setRef, coords, zoomIn, zoomOut} = useMapBox(puntoInicial);

//   return (
//     <>
//     <div className="info">
//       Lng: {coords.lng} | Lat: {coords.lat} | Zoom: {coords.zoom}
//     </div>

//     <div ref={setRef} className="mapContainer" />
//     </>
//   );
// };
// export default MapaPage;


// Componente para usar el mapa
import { useMapBox } from "../hooks/useMapBox";

const puntoInicial = {
  lng: -63.1829,
  lat: -17.7891,
  zoom: 13.5,
};


const MapaPage = () => {
  const { setRef, coords } = useMapBox(puntoInicial);

  return (
    <>
      <div className="info p-4 bg-gray-800 text-white fixed top-4 left-4 rounded-lg shadow-lg z-10">
        Lng: {coords.lng} | Lat: {coords.lat} | Zoom: {coords.zoom}
      </div>
      <div className="mapContainer h-screen" ref={setRef} />
    </>
  );
};

export default MapaPage;