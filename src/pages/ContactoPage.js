import '../fonts/icomoon/style.css';
import hero_bg_1 from '../images/hero_bg_1.jpg';

const ContactoPage = (props) => {
    return (
        <>
            <div
                className="hero page-inner overlay"
                style={{ backgroundImage: `url(${hero_bg_1})` }}
            >
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9 text-center mt-5">
                            <h1 className="heading" data-aos="fade-up">Contacto</h1>

                            <nav
                                aria-label="breadcrumb"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <ol className="breadcrumb text-center justify-content-center">
                                    <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                    <li
                                        className="breadcrumb-item active text-white-50"
                                        aria-current="page"
                                    >
                                        Contacto
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-4 mb-5 mb-lg-0"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="contact-info">
                                <div className="address mt-2">
                                    <i className="icon-room"></i>
                                    <h4 className="mb-2">Ubicación:</h4>
                                    <p>
                                        Av. San Martín 1234, Potrero de los Funes<br />
                                        San Luis 5701
                                    </p>
                                </div>

                                <div className="open-hours mt-4">
                                    <i className="icon-clock-o"></i>
                                    <h4 className="mb-2">Horarios de atención:</h4>
                                    <p>
                                        Lunes a Viernes:<br />
                                        11:00 AM - 23::00 PM
                                    </p>
                                </div>

                                <div className="email mt-4">
                                    <i className="icon-envelope"></i>
                                    <h4 className="mb-2">Email:</h4>
                                    <p>contacto@inmobiliaria.com</p>
                                </div>

                                <div className="phone mt-4">
                                    <i className="icon-phone"></i>
                                    <h4 className="mb-2">Teléfono:</h4>
                                    <p>+54 266 4456789</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <form action="#">
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Tu Nombre"
                                        />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Tu Email"
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Asunto"
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="7"
                                            className="form-control"
                                            placeholder="Mensaje"
                                        ></textarea>
                                    </div>

                                    <div className="col-12">
                                        <input
                                            type="submit"
                                            value="Enviar Mensaje"
                                            className="btn btn-primary"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactoPage;