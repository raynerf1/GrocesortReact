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
                <div className="row pt-5">
                    {productosData.map(producto => (
                        <div className="col" key={producto.id}>
                            <div className="card">
                                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.descripcion}</p>
                                    <p className="card-text">{producto.precio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        <Footer/>
        </div>
        
    );
}