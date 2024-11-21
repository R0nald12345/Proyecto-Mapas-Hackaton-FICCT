

import mapboxgl from "mapbox-gl";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

// TODO: Cambiar API KEY
mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9uYWxkdWFncm0iLCJhIjoiY20yYWx3OHJiMDByYzJrcHZoeTVvNnp0aCJ9.N_Fx7zp5gnPQQ2YU8qriFw";

export const useMapBox = (puntoInicial) => {
  // Referencia al Div del mapa
  const mapaDiv = useRef();
  const setRef = useCallback((node) => {
    mapaDiv.current = node;
  });

  // Referencia a los marcadores
  const marcadores = useRef({});
  const [coords, setCoords] = useState(puntoInicial);

  // Guardar las coordenadas de los puntos para dibujar el polígono
  const puntos = useRef([]);

  const mapa = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapaDiv.current, // container ID
      center: [puntoInicial.lng, puntoInicial.lat], // starting position [lng, lat]
      zoom: puntoInicial.zoom, // starting zoom
    });

    mapa.current = map;
  }, [puntoInicial]);

  // Cuando se mueve el Mapa
  useEffect(() => {
    mapa.current?.on("move", () => {
      const { lng, lat } = mapa.current.getCenter();
      setCoords({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: mapa.current.getZoom().toFixed(2),
      });
    });
  }, []);

  // Dibujar el polígono cerrado
  const dibujarPoligono = useCallback(() => {
    if (puntos.current.length < 3) return; // No se puede cerrar un polígono con menos de 3 puntos

    // Añadir el punto inicial al final para cerrar el polígono
    const coordenadasCerradas = [...puntos.current, puntos.current[0]];

    // Si ya hay un polígono dibujado, lo removemos antes de dibujar el nuevo
    if (mapa.current.getSource("poligono-puntos")) {
      mapa.current.removeLayer("poligono-puntos");
      mapa.current.removeSource("poligono-puntos");
    }

    mapa.current.addSource("poligono-puntos", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [coordenadasCerradas], // Mapbox espera un array de arrays para polígonos
        },
      },
    });

    mapa.current.addLayer({
      id: "poligono-puntos",
      type: "fill",
      source: "poligono-puntos",
      layout: {},
      paint: {
        "fill-color": "#888",
        "fill-opacity": 0.5,
      },
    });

    // También agregar un borde al polígono si se desea
    mapa.current.addLayer({
      id: "borde-poligono",
      type: "line",
      source: "poligono-puntos",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#000",
        "line-width": 2,
        "line-dasharray": [4, 2], // Aquí se define el patrón segmentado: [longitud, espacio]
      },
    });
  }, []);

  // Agregar Marcadores cuando hago click
  useEffect(() => {
    mapa.current?.on("click", (ev) => {
      const { lng, lat } = ev.lngLat;

      // Verificar si el clic es cercano al primer punto para cerrar el polígono
      if (puntos.current.length > 0) {
        const [lngInicial, latInicial] = puntos.current[0];
        const distancia = Math.sqrt(
          Math.pow(lng - lngInicial, 2) + Math.pow(lat - latInicial, 2)
        );

        if (distancia < 0.001) {
          dibujarPoligono();
          return;
        }
      }

      const marker = new mapboxgl.Marker();
      marker.id = v4(); // Generar un ID único para el marcador

      marker.setLngLat([lng, lat]).addTo(mapa.current).setDraggable(true);

      marcadores.current[marker.id] = marker;

      // Agregar el punto al array de puntos
      puntos.current.push([lng, lat]);
    });
  }, [dibujarPoligono]);

  return {
    coords,
    setRef,
    marcadores,
  };
};

// import mapboxgl from "mapbox-gl";
// import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
// import {v4} from 'uuid'

// //TODO: Cambiar API KEY
// mapboxgl.accessToken = "pk.eyJ1Ijoicm9uYWxkdWFncm0iLCJhIjoiY20yYWx3OHJiMDByYzJrcHZoeTVvNnp0aCJ9.N_Fx7zp5gnPQQ2YU8qriFw";
// export const useMapBox = (puntoInicial) => {
//   const mapaDiv = useRef();
//   const setRef = useCallback((node) => {
//     mapaDiv.current = node;
//   });

//   const [coords, setCoords] = useState(puntoInicial);
//   const mapa = useRef();

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapaDiv.current,
//       center: [puntoInicial.lng, puntoInicial.lat],
//       zoom: puntoInicial.zoom,
//     });

//     mapa.current = map;
//   }, [puntoInicial]);

//   // Actualizar coordenadas cuando se mueve el mapa
//   useEffect(() => {
//     mapa.current?.on("move", () => {
//       const { lng, lat } = mapa.current.getCenter();
//       setCoords({
//         lng: lng.toFixed(4),
//         lat: lat.toFixed(4),
//         zoom: mapa.current.getZoom().toFixed(2),
//       });
//     });
//   }, []);

//   // Función para acercar el mapa
//   const zoomIn = useCallback(() => {
//     const currentZoom = mapa.current.getZoom();
//     mapa.current.setZoom(currentZoom + 1); // Incrementa el zoom
//   }, []);

//   // Función para alejar el mapa
//   const zoomOut = useCallback(() => {
//     const currentZoom = mapa.current.getZoom();
//     mapa.current.setZoom(currentZoom - 1); // Reduce el zoom
//   }, []);

//   return {
//     coords,
//     setRef,
//     zoomIn,
//     zoomOut,
//   };
// };