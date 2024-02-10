import React, { useEffect, useState } from 'react';
import { PintarNavbarClaro, PintarNavbarOscuro } from  '../componentes/navbar';
import { Hero1, Hero1Boton, Hero2 } from  '../componentes/heroes';
import Footer from  '../componentes/footer';

export default function SobreMi(){
  return(
    
    <div>
      <div className='BarraNavegacion'>
      <PintarNavbarClaro
        boton1='Inicio'
        enlace1='https://www.grocesort.site'
        boton2='SobreMi'
        enlace2='https://www.grocesort.site/paginas/paginas/secciones.php'
        boton3=''
        enlace3=''
        boton4=''
        enlace4=''
        boton5=''
        enlace5=''/>
      </div>
      <Hero1Boton       
      titulo='Reduce tu gasto en la cesta de la compra'
      animado='si'
      texto='¡Ahorra tiempo, ahorra dinero! Compara al instante los precios de tus productos favoritos en los principales 
      supermercados más importantes de España. Maximiza tu ahorro en la cesta de la compra. ¡Experimenta la libertad de elegir el mejor precio para cada producto en cada compra!'
      imagen='https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png'
      enlaceBoton='https://www.grocesort.site/paginas/paginas/secciones.php'
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