import React, { useEffect, useState } from 'react';
import { PintarNavbarClaro, PintarNavbarOscuro } from  '../componentes/navbar';
import { Hero1, Hero1Boton, Hero2 } from  '../componentes/heroes';
import Footer from  '../componentes/footer';
export default function Productos() {
    const [productosData, setProductosData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('productosData');
        if (storedData) {
            setProductosData(JSON.parse(storedData));
        }
      }, []);

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

            <div className="container">
                <div className="row">
                    {productosData.map(producto => (
                        <div className="card m-3 " style={{ width: '18rem' }}>
                        <img src={producto.imagen} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <b><h5 className="card-title">{producto.producto}</h5></b>
                          <b><h5 className="card-title">{producto.precio} €</h5></b>
                          <p className="card-text">{producto.descripcion}</p>
                          <a href={producto.enlace} target='_blank' rel="noreferrer" className="btn btn-primary">Ver en la tienda</a>
                        </div>
                      </div>
                    ))}
                </div>
            </div>

        <Footer/>
        </div>
        
    );
}
