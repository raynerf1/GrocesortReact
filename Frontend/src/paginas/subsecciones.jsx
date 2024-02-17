import React, { useEffect, useState } from 'react';
import { PintarNavbarClaro, PintarNavbarOscuro } from  '../componentes/navbar';
import { Hero1, Hero1Boton, Hero2 } from  '../componentes/heroes';
import TarjetasSecciones from  '../componentes/tarjetas';
import Footer from  '../componentes/footer';

export default function Subsecciones() {
  const [subseccionData, setSubseccionData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('subseccionData');
    if (storedData) {
      setSubseccionData(JSON.parse(storedData));
    }
  }, []);

  if (subseccionData.length === 0) {
    return <div>No se encuentran datos</div>;
  }

  const subsecciones = subseccionData.map(subseccion => (
    <div className="col" key={subseccion.id}>
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${subseccion.imagen}')` }}>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 seccion">
          <h3 className="pt-5 mt-5 mb-2 display-6 lh-1 fw-bold nombreSeccion" >
            {subseccion.subseccionutf != null ? subseccion.subseccionutf : subseccion.subseccion}
          </h3>
          <ul className="d-flex list-unstyled mt-auto"></ul>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <PintarNavbarClaro
        boton1='Inicio'
        enlace1='/index'
        boton2='Secciones'
        enlace2='/secciones'
        boton3=''
        enlace3=''
        boton4=''
        enlace4=''
        boton5=''
        enlace5=''/>
      
      <section>
        <div className="container px-4 py-5" id="custom-cards">
          <h1 className="pb-2 border-bottom">Subsecciones</h1>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 justify-content-start g-4 py-5">
            {subsecciones}
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}
