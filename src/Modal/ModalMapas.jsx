import React from "react";

const ModalMapas = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Fondo de superposición sin bloquear clics */}
      <div className="fixed inset-0  z-10 pointer-events-none" />

      {/* Contenedor del modal interactivo */}
      <form
        className="fixed top-4 right-4 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 z-20"
      >
        {/* Botón para cerrar */}
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold text-white"
            onClick={onClose}
          >
            X
          </button>
        </div>

        {/* Contenido del modal */}
        <h2 className="text-3xl font-bold text-center">Agregar Entrega</h2>
        <div className="mt-5 space-y-4">
          <div>
            <h3 className="font-semibold">Nombre Entrega</h3>
            <input
              type="text"
              className="border w-full p-2 rounded-lg mt-1"
              placeholder="Escribe el nombre de la entrega"
            />
          </div>
          <div>
            <h3 className="font-semibold">Nombre Desayuno</h3>
            <input
              type="text"
              className="border w-full p-2 rounded-lg mt-1"
              placeholder="Escribe el nombre del desayuno"
            />
          </div>
          <div>
            <h3 className="font-semibold">Cantidad</h3>
            <input
              type="number"
              className="border w-full p-2 rounded-lg mt-1"
              placeholder="Escribe la cantidad"
            />
          </div>
          <div>
            <h3 className="font-semibold">Fecha</h3>
            <input
              type="date"
              className="border w-full p-2 rounded-lg mt-1"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalMapas;
