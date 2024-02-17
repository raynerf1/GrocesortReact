import React, { useEffect, useState } from 'react';
import { PintarNavbarClaro, PintarNavbarOscuro } from  '../componentes/navbar';
import { Hero1, Hero1Boton, Hero2 } from  '../componentes/heroes';
//import TarjetasSecciones from  '../componentes/tarjetas';
import Footer from  '../componentes/footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../componentes/tarjetas.css';

export default function Secciones(){
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  console.log(busqueda)
  useEffect(() => {
    fetch('http://localhost:8081/secciones')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  function handleClick(event) {
    const h3Element = event.currentTarget.querySelector('h3.nombreSeccion');
    const valorTexto = h3Element.textContent.trim();
    
    axios.post('http://localhost:8081/subseccionSQL', { seccionNombre: valorTexto })
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
        localStorage.setItem('subseccionData', JSON.stringify(response.data));
        navigate('/subsecciones');
      })
      .catch(error => {
        console.error('Error al enviar el valor al servidor:', error);
      });
  }

  const secciones = data.filter((seccion) => {
    return busqueda.toLowerCase() === '' ? seccion : seccion.nombre.toLowerCase().includes(busqueda)
  }).map(seccion => (
    <div className="col" key={seccion.id}>
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${seccion.imagen}')` }} onClick={handleClick}>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 seccion">
          <h3 className="pt-5 mt-5 mb-2 display-6 lh-1 fw-bold nombreSeccion" >
            {seccion.nombreutf != null ? seccion.nombreutf : seccion.nombre}
          </h3>
          <ul className="d-flex list-unstyled mt-auto"></ul>
        </div>
      </div>
    </div>
  ));
  return(
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
        <input className="input-ghost-primary input mb-2" placeholder="Buscar..." onChange={(e) => setBusqueda(e.target.value)}/>
          <h1 className="pb-2 border-bottom">Secciones</h1>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 justify-content-start g-4 py-5">
            {secciones}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
    
  );
}
