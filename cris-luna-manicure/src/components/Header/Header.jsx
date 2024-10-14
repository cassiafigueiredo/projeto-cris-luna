import styles from './Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'



function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid d-flex justify-content-between align-items-center">

                    <div>
                        <img src="/android-chrome-192x192.png" alt="Logo" width="80" height="60" className=" ps-4" />
                    </div>


                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`offcanvas offcanvas-end w-75 ${styles.offcanvasLetras}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Serviços</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className={`${styles.offcanvasLetras} navbar-nav justify-content-end flex-grow-1 pe-4`}>
                                <li className="nav-item">
                                    <a className={`${styles.navLetras} nav-link text-reset`} aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-reset" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pés
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Spa dos Pés</a></li>
                                        <li><a className="dropdown-item" href="#">Plástica dos Pés</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Pedicure</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-reset" href="#">Manicure</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-reset" href="#">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header