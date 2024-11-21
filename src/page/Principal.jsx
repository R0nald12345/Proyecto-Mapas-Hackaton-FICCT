import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSantaCruz from "../img/LogoSantaCruz.png";

import incendio1 from "../img/Incendios/incendios1.jpg";
import inundacion1 from "../img/Inundaciones/inundacion1.jpg";
import servicioPublic1 from "../img/ServicioPublico/servicioPublico1.jpg";

import "@fontsource/geist-mono";
import videoIncendio from "../video/videoIncendio.mp4";

const Principal = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const closeDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div className="bg-black/90">
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Video de Fondo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50 contrast-125"
          src={videoIncendio}
          autoPlay
          loop
          muted
        />

        {/* Contenido Principal */}
        <nav className="relative z-10 text-2xl bg-black/80">
          <section className="flex w-[80%] mx-auto">
            {/* Foto */}
            <section className="w-1/3 flex gap-10">
              <img
                src={LogoSantaCruz}
                alt="Logo Santa Cruz"
                className="w-16 h-20 p-2"
              />
              <h3 className="mt-6 font-geist font-bold text-white hover:text-yellow-400">
                Santa Cruz
              </h3>
            </section>

            <section className="w-2/3">
              <div className="flex justify-around mt-6">
                <Link className="font-geist font-bold text-white hover:text-yellow-300">
                  Noticias
                </Link>
                <Link className="font-geist font-bold text-white hover:text-yellow-300">
                  Acerca de
                </Link>
                <Link className="font-geist font-bold text-white hover:text-yellow-300">
                  Ciudadano
                </Link>
               

                {/* Administracion con Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropDown(true)} // Mostrar el dropdown al pasar el mouse
                  onMouseLeave={closeDropDown} // Cerrar el dropdown al salir del área
                >
                  <button
                    onClick={closeDropDown} // Mostrar/ocultar al hacer clic
                    className="font-geist font-bold text-white hover:text-yellow-300 focus:outline-none"
                  >
                    Administración
                  </button>

                  {openDropDown && (
                    <ul className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20">
                      <li className="px-4 py-2 hover:bg-gray-500">
                        <Link to="/mapa" className="font-geist">Reforestación</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-500">
                        <Link to="/seguridad-ciudadana" className="font-geist">
                          Seguridad Ciudadana
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </section>
          </section>
        </nav>
      </section>

      {/* Contenido inferior */}
      <main className=" w-[80%] mx-auto flex gap-5 items-stretch mt-10">
        <section className="w-1/3 rounded-md p-2 bg-black/30 text-center flex flex-col">
          <h4 className="text-center font-geist text-2xl font-semibold text-white">
            Inundaciones
          </h4>
          <img src={inundacion1} className="w-full h-auto p-3" />
          <p className="mt-auto text-white font-geist">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quos iusto expedita nisi, tempore optio natus veniam! Minima
            corrupti dolorem pariatur ullam voluptatem aspernatur ipsa at, iure,
            rem ratione blanditiis.
          </p>
        </section>

        <section className="w-1/3 rounded-md p-2 bg-black/30 text-center flex flex-col">
          <h4 className="text-center font-geist text-2xl font-semibold text-white">
            Incendios
          </h4>
          <img src={incendio1} className="w-full h-auto p-3" />
          <p className="mt-auto text-white font-geist">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quos iusto expedita nisi, tempore optio natus veniam! Minima
            corrupti dolorem pariatur ullam voluptatem aspernatur ipsa at, iure,
            rem ratione blanditiis.
          </p>
        </section>

        <section className="w-1/3 rounded-md p-2 bg-black/30 text-center flex flex-col text-white">
          <h4 className="text-center font-geist text-2xl font-semibold">
            Servicios Públicos
          </h4>
          <img src={servicioPublic1} className="w-full h-auto p-3" />
          <p className="mt-auto text-white font-geist">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quos iusto expedita nisi, tempore optio natus veniam! Minima
            corrupti dolorem pariatur ullam voluptatem aspernatur ipsa at, iure,
            rem ratione blanditiis.
          </p>
        </section>
      </main>

      <section className="w-[90%] mx-auto mt-10 grid grid-cols-4">
        {/* Card 1 */}
        <div className="bg-gray-700 h-96 w-full overflow-hidden relative ">
          <img
            src="https://i.pinimg.com/736x/6c/15/27/6c15270d2fe891782dc3e40f5de200da.jpg"
            alt="Radar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-black text-white p-5 flex flex-col items-center justify-center">
          <img
            src="https://cdn.sanity.io/images/7gnb8e5o/production/175d2ce3679e67e1d33c4a2b6b907c4ca809ff54-107x107.png?w=50&h=50&auto=format"
            alt="Temperature"
            className="w-12 h-10 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">TEMPERATURES</h3>
          <p className="text-center text-sm">
            Visualize nationwide temperatures overlaid on top of our radar map.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-700 h-96 w-full overflow-hidden relative">
          <img
            src="https://i.pinimg.com/control2/736x/af/d4/55/afd4556109ac3b44288a4466ccaffc77.jpg"
            alt="Weather Alerts"
            className="w-full h-full mb-4"
          />
        </div>

        {/* Card 4 */}
        <div className="bg-black text-white p-5 flex flex-col items-center justify-center">
          <img
            src="https://cdn.sanity.io/images/7gnb8e5o/production/b82ba676eb13fade4af8e6ceadc376318a02b8ea-107x107.png?w=50&h=50&auto=format"
            alt="Precipitation"
            className="w-12 h-10 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">PRECIPITATION</h3>
          <p className="text-center text-sm">
            Our patented precipitation models inform you hour by hour.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-black text-white p-5 flex flex-col items-center justify-center">
          <img
            src="https://cdn.sanity.io/images/7gnb8e5o/production/6b17bdb941821f9ec5d5395520324088ab50ba55-107x107.png?w=50&h=50&auto=format"
            alt="Hurricane Tracking"
            className="w-12 h-10 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">HURRICANE TRACKING</h3>
          <p className="text-center text-sm">
            Real-time tracking of hurricanes and tropical storms.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-700 h-96 w-full overflow-hidden relative">
          <img
            src="https://i.pinimg.com/736x/f2/81/f5/f281f593e545fa590030c8f46a948941.jpg"
            alt="Weather Forecasts"
            className="w-full h-full mb-4"
          />
        </div>

        {/* Card 7 */}
        <div className="bg-black text-white p-5 flex flex-col items-center justify-center">
          <img
            src="https://cdn.sanity.io/images/7gnb8e5o/production/bd04d01f3b6efb15dd39caa6ed2d9d34793e0c5d-107x107.png?w=50&h=50&auto=format"
            alt="Disaster Warnings"
            className="w-12 h-10 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">DISASTER WARNINGS</h3>
          <p className="text-center text-sm">
            Stay in the know about current global events.
          </p>
        </div>

        {/* Card 8 */}
        <div className="bg-gray-700 h-96 w-full overflow-hidden relative">
          <img
            src="https://i.pinimg.com/736x/64/80/93/6480931bc7b7e9e4d702c6e8e438f047.jpg"
            alt="Aviation Features"
            className="w-full h-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">AVIATION FEATURES</h3>
          <p className="text-center text-sm">
            Track flights using advanced aviation features.
          </p>
        </div>

        {/* Card 9 */}
        <div className="bg-gray-700 h-96 w-full overflow-hidden relative">
          <img
            src="https://i.pinimg.com/736x/57/ee/7e/57ee7e60e444e082e8411b7b941bd7aa.jpg"
            alt="Aviation Features"
            className="w-full h-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">AVIATION FEATURES</h3>
          <p className="text-center text-sm">
            Track flights using advanced aviation features.
          </p>
        </div>

        {/* Card 10 */}
        <div className="bg-black text-white p-5 flex flex-col items-center justify-center">
          <img
            src="https://cdn.sanity.io/images/7gnb8e5o/production/0937446f4107c9edee727fd9ba5f12325a7537c7-107x107.png?w=50&h=50&auto=format"
            alt="Aviation Features"
            className="w-12 h-10 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">AVIATION FEATURES</h3>
          <p className="text-center text-sm">
            Track flights using advanced aviation features.
          </p>
        </div>

        {/* Card 11 */}
        <div className="bg-gray-700 h-96 w-full overflow-hidden relative">
          <img
            src="https://i.pinimg.com/736x/d8/9f/74/d89f744482071351c2f716726627ef74.jpg"
            alt="Aviation Features"
            className="w-full h-full mb-4"
          />
        </div>

        {/* Card 12 */}
        <div className="bg-black text-white p-5 flex flex-col items-center justify-center">
          <img
            src="https://cdn.sanity.io/images/7gnb8e5o/production/782ba917544c297b07bf789a6f9450a1cccdee72-107x107.png?w=50&h=50&auto=format"
            alt="Aviation Features"
            className="w-12 h-10 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">AVIATION FEATURES</h3>
          <p className="text-center text-sm">
            Track flights using advanced aviation features.
          </p>
        </div>

        {/* Card 13 */}
        <div className="bg-black text-white p-5 flex flex-col items-center justify-center">
          <img
            src="https://cdn.sanity.io/images/7gnb8e5o/production/7d69159bb7382f0da9252cb5873c1d8520bed4a6-107x107.png?w=50&h=50&auto=format"
            alt="Aviation Features"
            className="w-12 h-10 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">AVIATION FEATURES</h3>
          <p className="text-center text-sm">
            Track flights using advanced aviation features.
          </p>
        </div>

        {/* Card 14 */}
        <div className="bg-gray-700 h-96 w-full overflow-hidden relative">
          <img
            src="https://www.elblogdetubebe.com/wp-content/uploads/2024/01/esquema-del-cambio-climatico-para-ninos.jpg"
            alt="Aviation Features"
            className="w-full h-full mb-4"
          />
        </div>

        {/* Card 15 */}
        <div className="bg-black text-white p-5 flex flex-col items-center justify-center">
          <img
            src="https://cdn.sanity.io/images/7gnb8e5o/production/8a6e02d169e4884dc325d26476a1d22e9066fa64-107x107.png?w=50&h=50&auto=format"
            alt="Aviation Features"
            className="w-12 h-10 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">AVIATION FEATURES</h3>
          <p className="text-center text-sm">
            Track flights using advanced aviation features.
          </p>
        </div>

        {/* Card 16 */}
        <div className="bg-gray-700 h-96 w-full overflow-hidden relative">
          <img
            src="https://i.pinimg.com/736x/99/4c/a6/994ca6e100b8c9d89fe3992156dbf7b9.jpg"
            alt="Aviation Features"
            className="w-full h-full mb-4"
          />
        </div>
      </section>

      {/* <section className="w-[40%] mx-auto mt-10">
        <div className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          aspernatur iusto omnis. Illo voluptatum, dolorem, molestias quia quam
          alias magnam recusandae animi ad veniam fugit laboriosam excepturi
          earum deleniti deserunt.
        </div>

        <div className="mt-10">
          <button className="bg-red-500">Buton1</button>
          <button className="bg-red-500">Buton2</button>
        </div>
      </section> */}

      <footer className="px-10 bg-black mt-12">
        <h3 className="text-white text-2xl font-semibold font-geist py-3">
          Todos los Derechos Reservados <span>©</span>
        </h3>
      </footer>
    </div>
  );
};

export default Principal;
