const Footer = (props) => {
    return (
        <>
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="widget">
                                <h3>Contacto</h3>
                                <address>Av. San Martín 1234, Potrero de los Funes, San Luis 5701.</address>
                                <ul className="list-unstyled links">
                                    <li><a href="tel:+54 266 4456789">+54 266 4456789</a></li>
                                    <li><a href="tel:+54 266 5123456">+54 266 5123456</a></li>
                                    <li>
                                        <a href="mailto:contacto@inmobiliaria.com">contacto@inmobiliaria.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget">
                                <h3>Sources</h3>
                                <ul className="list-unstyled float-start links">
                                    <li><a href="sobre-nosotros.html">Sobre nosotros</a></li>
                                    <li><a href="servicios.html">Servicios</a></li>
                                    <li><a href="/contacto">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget">
                                <h3>Links</h3>
                                <ul className="list-unstyled links">
                                    <li><a href="/">Propiedades</a></li>
                                    <li><a href="/">Polítcias de privacidad</a></li>
                                    <li><a href="/">Términos y codinciones</a></li>
                                </ul>

                                <ul className="list-unstyled social">
                                    <li>
                                        <a href="https://www.instagram.com/baraccomateo/"><span className="icon-instagram" target="_blank"></span></a>
                                    </li>
                                    <li>
                                        <a href="/" target="_blank"><span className="icon-facebook"></span></a>
                                    </li>
                                    <li>
                                        <a href="/" target="_blank"><span className="icon-linkedin"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <p>
                                Copyright &copy;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                . Todos los derechos reservados. &mdash; Designed por
                                <a href="/" target="_blank">Juan Mateo Baracco</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div id="overlayer"></div> */}
            {/* <div className="loader">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div> */}
        </>

    )
}

export default Footer;