import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "../page/Principal";
import MapaPage from "../page/MapaPage";

const Ruta = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/mapa" element={<MapaPage/>}/>
      </Routes>
    </Router>
  );
};

export default Ruta;