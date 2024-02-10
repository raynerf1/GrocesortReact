import React, { useEffect, useState } from 'react';
import { PintarNavbarClaro, PintarNavbarOscuro } from  '../componentes/navbar';
import { Hero1, Hero1Boton, Hero2 } from  '../componentes/heroes';
import Footer from  '../componentes/footer';

export default function Index(){
  return(
    
    <div>

      <PintarNavbarClaro
        boton1=''
        enlace1=''
        boton2=''
        enlace2=''
        boton3=''
        enlace3=''
        boton4=''
        enlace4=''
        boton5=''
        enlace5=''/>
      <Hero1Boton       
      titulo='Reduce tu gasto en la cesta de la compra'
      animado='si'
      texto='¡Ahorra tiempo, ahorra dinero! Compara al instante los precios de tus productos favoritos en los principales 
      supermercados más importantes de España. Maximiza tu ahorro en la cesta de la compra. ¡Experimenta la libertad de elegir el mejor precio para cada producto en cada compra!'
      imagen='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png'
      enlaceBoton='/secciones'
      textoBoton='Ir a la aplicación'/>
      <br className="divider"/>
      <Hero2        
      titulo='Reduce tu gasto en la cesta de la compra'
      animado='no'
      texto='¡Ahorra tiempo, ahorra dinero! Compara al instante los precios de tus productos favoritos en los principales 
      supermercados más importantes de España. Maximiza tu ahorro en la cesta de la compra. ¡Experimenta la libertad de elegir el mejor precio para cada producto en cada compra!'
      imagen='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png'/>
      <Footer/>
    </div>
    
  );
}