import React, { useEffect, useState } from 'react';
import { PintarNavbarClaro, PintarNavbarOscuro } from  '../componentes/navbar';
import { Hero1, Hero1Boton, Hero2 } from  '../componentes/heroes';
import TarjetasSecciones from  '../componentes/tarjetas';
import Footer from  '../componentes/footer';

export default function Secciones(){
  
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
      <TarjetasSecciones />

      <Footer/>
    </div>
    
  );
}