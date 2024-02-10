import React, { useState, useEffect } from 'react';
import logo from '../assets/GS_Logo.png'

export function PintarNavbarClaro(props) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setIsSmallScreen(window.innerWidth < 576);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="navbarRUI">
            <div className="navbar-startRUI">
                <img src={logo} alt="Grocesort logo" className="img-fluid" style={{ maxHeight: '30px' }} />
                <h1 style={{ fontSize: '25px' , display: windowWidth < 214 ? 'none' : 'block'}}>Grocesort</h1>
            </div>
            {isSmallScreen ? (
                                <div className="navbar-endRUI">
                                    <div className="dropdown-container" style={{display: windowWidth < 230 ? 'none' : 'block'}}>
                                        <div className="dropdown">
                                            <label className="btn btn-ghost flex cursor-pointer px-0" tabIndex="0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
                                            </label>
                                            <div className="dropdown-menu dropdown-menu-bottom-left">
                                                <a tabIndex="-1" className="dropdown-item text-sm" href={props.enlace1} style={{display: props.boton1 === '' ? 'none' : 'block'}}>{props.boton1}</a>
                                                <a tabIndex="-1" className="dropdown-item text-sm" href={props.enlace2} style={{display: props.boton2 === '' ? 'none' : 'block'}}>{props.boton2}</a>
                                                <a tabIndex="-1" className="dropdown-item text-sm" href={props.enlace3} style={{display: props.boton3 === '' ? 'none' : 'block'}}>{props.boton3}</a>
                                                <a tabIndex="-1" className="dropdown-item text-sm" href={props.enlace4} style={{display: props.boton4 === '' ? 'none' : 'block'}}>{props.boton4}</a>
                                                <a tabIndex="-1" className="dropdown-item text-sm" href={props.enlace5} style={{display: props.boton5 === '' ? 'none' : 'block'}}>{props.boton5}</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </div>
            ) : (
                <div className="navbar-endRUI">
                    <a className="navbar-item" href={props.enlace1} style={{display: props.boton1 === '' ? 'none' : 'block'}}>{props.boton1}</a>
                    <a className="navbar-item" href={props.enlace2} style={{display: props.boton2 === '' ? 'none' : 'block'}}>{props.boton2}</a>
                    <a className="navbar-item" href={props.enlace3} style={{display: props.boton3 === '' ? 'none' : 'block'}}>{props.boton3}</a>
                    <a className="navbar-item" href={props.enlace4} style={{display: props.boton4 === '' ? 'none' : 'block'}}>{props.boton4}</a>
                    <a className="navbar-item" href={props.enlace5} style={{display: props.boton5 === '' ? 'none' : 'block'}}>{props.boton5}</a>
                </div>
            )}
        </header>
    );
}

export function PintarNavbarOscuro(props) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setIsSmallScreen(window.innerWidth < 576);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="navbarRUI bg-dark text-white">
            <div className="navbar-startRUI">
                <img src={logo} alt="Grocesort logo" className="img-fluid" style={{ maxHeight: '30px' }} />
                <h1 style={{ fontSize: '25px' , display: windowWidth < 214 ? 'none' : 'block'}}>Grocesort</h1>
            </div>
            {isSmallScreen ? (
                                <div className="navbar-endRUI">
                                    <div className="dropdown-container" style={{display: windowWidth < 230 ? 'none' : 'block'}}>
                                        <div className="dropdown">
                                            <label className="btn btn-ghost flex cursor-pointer px-0" tabIndex="0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
                                            </label>
                                            <div className="dropdown-menu dropdown-menu-bottom-left bg-dark">
                                                <a tabIndex="-1" className="dropdown-item text-sm text-white" href={props.enlace1} style={{display: props.boton1 === '' ? 'none' : 'block'}}>{props.boton1}</a>
                                                <a tabIndex="-1" className="dropdown-item text-sm text-white" href={props.enlace2} style={{display: props.boton2 === '' ? 'none' : 'block'}}>{props.boton2}</a>
                                                <a tabIndex="-1" className="dropdown-item text-sm text-white" href={props.enlace3} style={{display: props.boton3 === '' ? 'none' : 'block'}}>{props.boton3}</a>
                                                <a tabIndex="-1" className="dropdown-item text-sm text-white" href={props.enlace4} style={{display: props.boton4 === '' ? 'none' : 'block'}}>{props.boton4}</a>
                                                <a tabIndex="-1" className="dropdown-item text-sm text-white" href={props.enlace5} style={{display: props.boton5 === '' ? 'none' : 'block'}}>{props.boton5}</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </div>
            ) : (
                <div className="navbar-endRUI">
                    <a className="navbar-item text-white" href={props.enlace1} style={{display: props.boton1 === '' ? 'none' : 'block'}}>{props.boton1}</a>
                    <a className="navbar-item text-white" href={props.enlace2} style={{display: props.boton2 === '' ? 'none' : 'block'}}>{props.boton2}</a>
                    <a className="navbar-item text-white" href={props.enlace3} style={{display: props.boton3 === '' ? 'none' : 'block'}}>{props.boton3}</a>
                    <a className="navbar-item text-white" href={props.enlace4} style={{display: props.boton4 === '' ? 'none' : 'block'}}>{props.boton4}</a>
                    <a className="navbar-item text-white" href={props.enlace5} style={{display: props.boton5 === '' ? 'none' : 'block'}}>{props.boton5}</a>
                </div>
            )}
        </div>
    );
}

