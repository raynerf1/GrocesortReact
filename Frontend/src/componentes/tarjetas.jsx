import React, { useState, useEffect } from "react";
import './tarjetas.css';

export default function TarjetasSecciones() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/secciones')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  const secciones = data.map(seccion => (
    <div className="col" key={seccion.id}>
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url('${seccion.imagen}')`}}>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 seccion">
          <h3 className="pt-5 mt-5 mb-2 display-6 lh-1 fw-bold">{seccion.nombreutf != null ? seccion.nombreutf : seccion.nombre}</h3>
          <ul className="d-flex list-unstyled mt-auto">

          </ul>
        </div>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="container px-4 py-5" id="custom-cards">
        <h1 className="pb-2 border-bottom">Secciones</h1>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 justify-content-start g-4 py-5">
          {secciones}
        </div>
      </div>
    </section>
  );
  
}
