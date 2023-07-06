import hero_bg_1 from '../images/hero_bg_1.jpg';
import img_1 from '../images/img_1.jpg';
import img_2 from '../images/img_2.jpg';
import img_3 from '../images/img_3.jpg';
import img_4 from '../images/img_4.jpg';
import img_5 from '../images/img_5.jpg';
import img_6 from '../images/img_6.jpg';
import img_7 from '../images/img_7.jpg';
import img_8 from '../images/img_8.jpg';
const PropiedadesPage = (props) => {
    return (
        <>
            <div className="hero page-inner overlay" style={{ backgroundImage: `url(${hero_bg_1})` }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9 text-center mt-5">
                            <h1 className="heading" data-aos="fade-up">Propiedades</h1>

                            <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                                <ol className="breadcrumb text-center justify-content-center">
                                    <li className="breadcrumb-item"><a href="index.html">Inicio</a></li>
                                    <li className="breadcrumb-item active text-white-50" aria-current="page">
                                        Propiedades
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-6 text-center mx-auto">
                            <h2 className="font-weight-bold text-primary heading">
                                Propiedades Destacadas
                            </h2>
                        </div>


                        <div className="section section-properties">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="property-single.html" className="img">
                                                <img src={img_1} alt="Image" className="img-fluid" />
                                            </a>

                                            <div className="property-content">
                                                <div className="price mb-2"><span>USD 1,291,000</span></div>
                                                <div>
                                                    <span className="d-block mb-2 text-black-50">5700 San Luis, Zona norte</span>
                                                    <span className="city d-block mb-3">San Luis, Argentina</span>

                                                    <div className="specs d-flex mb-4">
                                                        <span className="d-block d-flex align-items-center me-3">
                                                            <span className="icon-bed me-2"></span>
                                                            <span className="caption">2 habitaciones</span>
                                                        </span>
                                                        <span className="d-block d-flex align-items-center">
                                                            <span className="icon-bath me-2"></span>
                                                            <span className="caption">2 baños</span>
                                                        </span>
                                                    </div>

                                                    <a href="property-single.html" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="property-single.html" className="img">
                                                <img src={img_2} alt="Image" className="img-fluid" />
                                            </a>

                                            <div className="property-content">
                                                <div className="price mb-2"><span>USD 1,291,000</span></div>
                                                <div>
                                                    <span className="d-block mb-2 text-black-50">5700 San Luis, Zona norte</span>
                                                    <span className="city d-block mb-3">San Luis, Argentina</span>

                                                    <div className="specs d-flex mb-4">
                                                        <span className="d-block d-flex align-items-center me-3">
                                                            <span className="icon-bed me-2"></span>
                                                            <span className="caption">2 habitaciones</span>
                                                        </span>
                                                        <span className="d-block d-flex align-items-center">
                                                            <span className="icon-bath me-2"></span>
                                                            <span className="caption">2 baños</span>
                                                        </span>
                                                    </div>

                                                    <a href="property-single.html" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="property-single.html" className="img">
                                                <img src={img_3} alt="Image" className="img-fluid" />
                                            </a>

                                            <div className="property-content">
                                                <div className="price mb-2"><span>USD 1,291,000</span></div>
                                                <div>
                                                    <span className="d-block mb-2 text-black-50">5700 San Luis, Zona norte</span>
                                                    <span className="city d-block mb-3">San Luis, Argentina</span>

                                                    <div className="specs d-flex mb-4">
                                                        <span className="d-block d-flex align-items-center me-3">
                                                            <span className="icon-bed me-2"></span>
                                                            <span className="caption">2 habitaciones</span>
                                                        </span>
                                                        <span className="d-block d-flex align-items-center">
                                                            <span className="icon-bath me-2"></span>
                                                            <span className="caption">2 baños</span>
                                                        </span>
                                                    </div>

                                                    <a href="property-single.html" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="property-single.html" className="img">
                                                <img src={img_4} alt="Image" className="img-fluid" />
                                            </a>

                                            <div className="property-content">
                                                <div className="price mb-2"><span>USD 1,291,000</span></div>
                                                <div>
                                                    <span className="d-block mb-2 text-black-50">5700 San Luis, Zona norte</span>
                                                    <span className="city d-block mb-3">San Luis, Argentina</span>

                                                    <div className="specs d-flex mb-4">
                                                        <span className="d-block d-flex align-items-center me-3">
                                                            <span className="icon-bed me-2"></span>
                                                            <span className="caption">2 habitaciones</span>
                                                        </span>
                                                        <span className="d-block d-flex align-items-center">
                                                            <span className="icon-bath me-2"></span>
                                                            <span className="caption">2 baños</span>
                                                        </span>
                                                    </div>

                                                    <a href="property-single.html" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="property-single.html" className="img">
                                                <img src={img_5} alt="Image" className="img-fluid" />
                                            </a>

                                            <div className="property-content">
                                                <div className="price mb-2"><span>USD 1,291,000</span></div>
                                                <div>
                                                    <span className="d-block mb-2 text-black-50">5700 San Luis, Zona norte</span>
                                                    <span className="city d-block mb-3">San Luis, Argentina</span>

                                                    <div className="specs d-flex mb-4">
                                                        <span className="d-block d-flex align-items-center me-3">
                                                            <span className="icon-bed me-2"></span>
                                                            <span className="caption">2 habitaciones</span>
                                                        </span>
                                                        <span className="d-block d-flex align-items-center">
                                                            <span className="icon-bath me-2"></span>
                                                            <span className="caption">2 baños</span>
                                                        </span>
                                                    </div>

                                                    <a href="property-single.html" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="property-single.html" className="img">
                                                <img src={img_6} alt="Image" className="img-fluid" />
                                            </a>

                                            <div className="property-content">
                                                <div className="price mb-2"><span>USD 1,291,000</span></div>
                                                <div>
                                                    <span className="d-block mb-2 text-black-50">5700 San Luis, Zona norte</span>
                                                    <span className="city d-block mb-3">San Luis, Argentina</span>

                                                    <div className="specs d-flex mb-4">
                                                        <span className="d-block d-flex align-items-center me-3">
                                                            <span className="icon-bed me-2"></span>
                                                            <span className="caption">2 habitaciones</span>
                                                        </span>
                                                        <span className="d-block d-flex align-items-center">
                                                            <span className="icon-bath me-2"></span>
                                                            <span className="caption">2 baños</span>
                                                        </span>
                                                    </div>

                                                    <a href="property-single.html" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="property-single.html" className="img">
                                                <img src={img_7} alt="Image" className="img-fluid" />
                                            </a>

                                            <div className="property-content">
                                                <div className="price mb-2"><span>USD 1,291,000</span></div>
                                                <div>
                                                    <span className="d-block mb-2 text-black-50">5700 San Luis, Zona norte</span>
                                                    <span className="city d-block mb-3">San Luis, Argentina</span>

                                                    <div className="specs d-flex mb-4">
                                                        <span className="d-block d-flex align-items-center me-3">
                                                            <span className="icon-bed me-2"></span>
                                                            <span className="caption">2 habitaciones</span>
                                                        </span>
                                                        <span className="d-block d-flex align-items-center">
                                                            <span className="icon-bath me-2"></span>
                                                            <span className="caption">2 baños</span>
                                                        </span>
                                                    </div>

                                                    <a href="property-single.html" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="property-single.html" className="img">
                                                <img src={img_8} alt="Image" className="img-fluid" />
                                            </a>

                                            <div className="property-content">
                                                <div className="price mb-2"><span>USD 1,291,000</span></div>
                                                <div>
                                                    <span className="d-block mb-2 text-black-50">5700 San Luis, Zona norte</span>
                                                    <span className="city d-block mb-3">San Luis, Argentina</span>

                                                    <div className="specs d-flex mb-4">
                                                        <span className="d-block d-flex align-items-center me-3">
                                                            <span className="icon-bed me-2"></span>
                                                            <span className="caption">2 habitaciones</span>
                                                        </span>
                                                        <span className="d-block d-flex align-items-center">
                                                            <span className="icon-bath me-2"></span>
                                                            <span className="caption">2 baños</span>
                                                        </span>
                                                    </div>

                                                    <a href="property-single.html" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="property-single.html" className="img">
                                                <img src={img_1} alt="Image" className="img-fluid" />
                                            </a>

                                            <div className="property-content">
                                                <div className="price mb-2"><span>USD 1,291,000</span></div>
                                                <div>
                                                    <span className="d-block mb-2 text-black-50">5700 San Luis, Zona norte</span>
                                                    <span className="city d-block mb-3">San Luis, Argentina</span>

                                                    <div className="specs d-flex mb-4">
                                                        <span className="d-block d-flex align-items-center me-3">
                                                            <span className="icon-bed me-2"></span>
                                                            <span className="caption">2 habitaciones</span>
                                                        </span>
                                                        <span className="d-block d-flex align-items-center">
                                                            <span className="icon-bath me-2"></span>
                                                            <span className="caption">2 baños</span>
                                                        </span>
                                                    </div>

                                                    <a href="property-single.html" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row align-items-center py-5">
                                    <div className="col-lg-3">Página (1 de 10)</div>
                                    <div className="col-lg-6 text-center">
                                        <div className="custom-pagination">
                                            <a href="/" className='ms-2'>1</a>
                                            <a href="/" className="active" className='ms-2'>2</a>
                                            <a href="/" className='ms-2'>3</a>
                                            <a href="/" className='ms-2'>4</a>
                                            <a href="/" className='ms-2'>5</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             
                </div>
            </div>
        </>
    )
}

export default PropiedadesPage;