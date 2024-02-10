import React, { useEffect, useState } from 'react';
import { PintarNavbarClaro, PintarNavbarOscuro } from  '../componentes/navbar';
import { Hero1, Hero1Boton, Hero2 } from  '../componentes/heroes';
import Footer from  '../componentes/footer';

export default function ErrorPagina(){
  return(
    
    <div>
      <div className='BarraNavegacion'>
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
      </div>
      <Hero1       
      titulo='La página que buscabas no existe'
      animado='no'
      texto='Esta página no existe'
      imagen='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png'
      enlaceBoton='https://www.grocesort.site/paginas/paginas/secciones.php'
      textoBoton='Ir a la aplicación'/>
      <Footer/>
    </div>
    
  );
}