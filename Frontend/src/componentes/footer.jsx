function Footer(){
    var añoActual = new Date().getFullYear();;
    return(
  <div className="container">
    <br />
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="navbar-item px-2 text-body-secondary">Sobre el desarrollador</a></li>
        <li className="nav-item"><a href="#" className="navbar-item px-2 text-body-secondary">Descargar APP</a></li>
        <li className="nav-item"><a href="#" className="navbar-item px-2 text-body-secondary">Pricing</a></li>
        <li className="nav-item"><a href="#" className="navbar-item px-2 text-body-secondary">FAQs</a></li>
        <li className="nav-item"><a href="#" className="navbar-item px-2 text-body-secondary">About</a></li>
      </ul>
      <p className="text-center text-body-secondary">© {añoActual} Rayner Gabu</p>
    </footer>
  </div>
    );
}
export default Footer