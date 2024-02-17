import React, { useEffect, useState } from 'react';
import { PintarNavbarClaro, PintarNavbarOscuro } from  '../componentes/navbar';
import { Hero1, Hero1Boton, Hero2 } from  '../componentes/heroes';
import Footer from  '../componentes/footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../componentes/tarjetas.css';

export default function Subsecciones() {
  const [subseccionData, setSubseccionData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('subseccionData');
    if (storedData) {
      setSubseccionData(JSON.parse(storedData));
    }
  }, []);

  if (subseccionData.length === 0) {
    return <div>No se encuentran datos</div>;
  }

  function handleClickSubseccion(event) {
    const valorTexto = event.currentTarget.querySelector('h3.nombreSubseccion').getAttribute('nombre');
    //const valorTexto = h3Element.textContent.trim();
    //console.log(valorTexto)
    
    axios.post('http://localhost:8081/productosSQL', { subseccionNombre: valorTexto })
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
        localStorage.setItem('productosData', JSON.stringify(response.data));
        navigate('/productos');
      })
      .catch(error => {
        console.error('Error al enviar el valor al servidor:', error);
      });
  }

  const subsecciones = subseccionData.map(subseccion => (
    <div className="col" key={subseccion.id}>
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${subseccion.imagen}')` }} onClick={handleClickSubseccion}>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 seccion">
          <h3 className="pt-5 mt-5 mb-2 display-6 lh-1 fw-bold nombreSubseccion" nombre={subseccion.subseccion}>
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
        boton2=''
        enlace2=''
        boton3=''
        enlace3=''
        boton4=''
        enlace4=''
        boton5=''
        enlace5=''/>
      
      <section>
        <div className="container px-4 py-5" id="custom-cards">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item navbar-item"><a href="/secciones">Secciones</a></li>
                  <li className="breadcrumb-item item pt-2 ps-2" aria-current="page">Subsección</li>
                </ol>
              </nav>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 justify-content-center g-4 py-5">
            {subsecciones}
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}
