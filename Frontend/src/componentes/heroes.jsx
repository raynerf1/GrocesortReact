export function Hero1Boton({titulo, texto, imagen, animado, enlaceBoton, textoBoton}){
    return(
        <section>
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={imagen} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className={`display-5 fw-bold lh-1 mb-3 ${animado==='si' ? 'animate__animated animate__fadeInDown' : ''}`}>{titulo}</h1>
                <p className="lead">{texto}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-center pt-2">
                  <a href={enlaceBoton}><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">{textoBoton}</button></a>
                </div>
              </div>
            </div>
        </div>
        </section>
    );
}

export function Hero1({titulo, texto, imagen, animado}){
    return(
        <section>
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={imagen} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className={`display-5 fw-bold lh-1 mb-3 ${animado==='si' ? 'animate__animated animate__fadeInDown' : ''}`}>{titulo}</h1>
                <p className="lead">{texto}</p>
              </div>
            </div>
        </div>
        </section>
    );
}
  
export function Hero2({titulo, texto, imagen, animado}){
    return(
        <section>
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-lg-6">
                <h1 className={`display-5 fw-bold lh-1 mb-3 ${animado==='si' ? 'animate__animated animate__fadeInDown' : ''}`}>{titulo}</h1>
                <p className="lead">{texto}</p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={imagen} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
              </div>
            </div>
        </div>
        </section>
    );
}