import hero_bg_3 from '../images/hero_bg_3.jpg';
import img_1 from '../images/img_1.jpg';
import img_2 from '../images/img_2.jpg';
import img_3 from '../images/img_3.jpg';
import img_4 from '../images/img_4.jpg';
import img_5 from '../images/img_5.jpg';
import img_6 from '../images/img_6.jpg';
import img_7 from '../images/img_7.jpg';
import img_8 from '../images/img_8.jpg';
import person_1 from '../images/person_1-min.jpg';
import person_2 from '../images/person_2-min.jpg';
import person_3 from '../images/person_3-min.jpg';
import person_4 from '../images/person_4-min.jpg';
const HomePage = (props) => {
    return (
        <>
            <div className="hero">
                <div className="hero-slide">
                    <div
                        className="img overlay"
                        style={{ backgroundImage: `url(${hero_bg_3})` }}
                    ></div>
                </div>

                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9 text-center">
                            <h1 className="heading" data-aos="fade-up">
                                La forma más fácil de encontrar la casa de sus sueños
                            </h1>
                            <form
                                action="#"
                                className="narrow-w form-search d-flex align-items-stretch mb-3"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <input
                                    type="text"
                                    className="form-control px-4"
                                    placeholder="Tu CP o ciudad, Ej: Buenos Aires"
                                />
                                <button type="submit" className="btn btn-primary">Buscar</button>
                            </form>
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
                                            <a href="/" className="img">
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

                                                    <a href="/" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="/" className="img">
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

                                                    <a href="/" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="/" className="img">
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

                                                    <a href="/" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="/" className="img">
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

                                                    <a href="/" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="/" className="img">
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

                                                    <a href="/" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="/" className="img">
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

                                                    <a href="/" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="/" className="img">
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

                                                    <a href="/" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="/" className="img">
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

                                                    <a href="/" className="btn btn-primary py-2 px-3">Más detalles</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="property-item mb-30">
                                            <a href="/" className="img">
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

                                                    <a href="/" className="btn btn-primary py-2 px-3">Más detalles</a>
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
            <section className="features-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="box-feature">
                                <span className="flaticon-house"></span>
                                <h3 className="mb-3">Nuestras Propiedades</h3>
                                <p>
                                    Ofrecemos una amplia variedad de opciones en diferentes zonas de la ciudad. ¡Encuentra tu hogar perfecto con nosotros!
                                </p>
                                <p><a href="/" className="learn-more">Leer más</a></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
                            <div className="box-feature">
                                <span className="flaticon-building"></span>
                                <h3 className="mb-3">Propiedades en Venta</h3>
                                <p>
                                    Desde apartamentos acogedores hasta lujosas casas con vistas impresionantes, ¡tenemos lo que necesitas para encontrar tu hogar perfecto!
                                </p>
                                <p><a href="/" className="learn-more">Leer más</a></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                            <div className="box-feature">
                                <span className="flaticon-house-3"></span>
                                <h3 className="mb-3">Agentes de bienes raíces</h3>
                                <p>
                                    Con nuestra experiencia y dedicación, podemos ayudarte a encontrar la casa perfecta para ti y tu familia. ¡Contáctanos hoy mismo!
                                </p>
                                <p><a href="/" className="learn-more">Leer más</a></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
                            <div className="box-feature">
                                <span className="flaticon-house-1"></span>
                                <h3 className="mb-3">Propiedades en Alquiler</h3>
                                <p>
                                    Desde apartamentos con vistas espectaculares hasta casas acogedoras en las mejores zonas, ¡nuestro equipo está listo para ayudarte a encontrar tu próximo hogar!
                                </p>
                                <p><a href="/" className="learn-more">Leer más</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section sec-testimonials">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-md-6">
                            <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
                                Lo que dicen nuestros clientes
                            </h2>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div id="testimonial-nav">
                                <span className="prev" data-controls="prev">Anterior</span>

                                <span className="next" data-controls="next">Siguiente</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4"></div>
                    </div>
                    <div className="testimonial-slider-wrap">
                        <div className="testimonial-slider">
                            <div className="item">
                                <div className="testimonial">
                                    <img src={person_1} alt="Image" className="img-fluid rounded-circle w-25 mb-4"
                                    />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-4">Juan García</h3>
                                    <blockquote>
                                        <p>
                                            &ldquo;Estoy muy satisfecho con el servicio que recibí de la inmobiliaria. El equipo fue muy profesional y amable, siempre dispuesto a ayudar en todo lo que necesitaba. Además, encontraron rápidamente la propiedad que se ajustaba a mis necesidades y presupuesto. ¡Los recomiendo altamente!&rdquo;
                                        </p>
                                    </blockquote>
                                    <p className="text-black-50">Arquitecto</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial">
                                    <img
                                        src={person_2}
                                        alt="Image"
                                        className="img-fluid rounded-circle w-25 mb-4"
                                    />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-4">Luis Morales</h3>
                                    <blockquote>
                                        <p>
                                            &ldquo;Fue un placer trabajar con ellos. Me impresionó su conocimiento del mercado y su capacidad para encontrar propiedades que se ajustaran a mis necesidades. Siempre estuvieron disponibles para responder mis preguntas y recomiendo sus servicios a cualquiera que busque comprar o vender una propiedad.&rdquo;
                                        </p>
                                    </blockquote>
                                    <p className="text-black-50">Abogado</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial">
                                    <img
                                        src={person_3}
                                        alt="Image"
                                        className="img-fluid rounded-circle w-25 mb-4"
                                    />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-4">Javier Gómez</h3>
                                    <blockquote>
                                        <p>
                                            &ldquo;La inmobiliaria superó todas mis expectativas. El equipo fue muy amable y servicial en todo momento, y encontraron la propiedad perfecta para mí en poco tiempo. Me impresionó su conocimiento del mercado inmobiliario y su atención al detalle en cada paso del proceso. Definitivamente recomiendo sus servicios a cualquiera que busque comprar o vender una propiedad.&rdquo;
                                        </p>
                                    </blockquote>
                                    <p className="text-black-50">Ingeniero</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial">
                                    <img
                                        src={person_4}
                                        alt="Image"
                                        className="img-fluid rounded-circle w-25 mb-4"
                                    />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-4">Laura Rodríguez</h3>
                                    <blockquote>
                                        <p>
                                            &ldquo;Estoy muy contenta con el servicio que recibí de la inmobiliaria. El equipo fue muy amable y profesional en todo momento, y me ayudaron a encontrar la propiedad perfecta para mí. Me impresionó su habilidad para negociar y su atención al detalle en cada paso del proceso. Definitivamente recomiendo sus servicios a cualquiera que busque comprar o vender una propiedad.&rdquo;
                                        </p>
                                    </blockquote>
                                    <p className="text-black-50">Contadora</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section-4 bg-light">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-5">
                            <h2 className="font-weight-bold heading text-primary mb-4">
                                Encontremos el hogar perfecto para ti
                            </h2>
                            <p className="text-black-50">
                                Sabemos que encontrar el hogar perfecto puede ser abrumador, pero no tienes que hacerlo solo. Con nuestro equipo de expertos, podemos ayudarte a encontrar la propiedad que se ajuste a tus necesidades y presupuesto. Trabajaremos contigo en cada paso del camino para asegurarnos de que te sientas cómodo y confiado en tu decisión.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-between mb-5">
                        <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
                            <div className="img-about dots">
                                <img src={hero_bg_3} alt="Image" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex feature-h">
                                <span className="wrap-icon me-3">
                                    <span className="icon-home2"></span>
                                </span>
                                <div className="feature-text">
                                    <h3 className="heading">200 propiedades</h3>
                                    <p className="text-black-50">
                                        Nuestra amplia selección de 200 propiedades te ofrece la oportunidad de encontrar el hogar de tus sueños.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex feature-h">
                                <span className="wrap-icon me-3">
                                    <span className="icon-person"></span>
                                </span>
                                <div className="feature-text">
                                    <h3 className="heading">Los mejores agentes</h3>
                                    <p className="text-black-50">
                                        Nuestros agentes inmobiliarios son los mejores en su clase y están listos para ayudarte.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex feature-h">
                                <span className="wrap-icon me-3">
                                    <span className="icon-security"></span>
                                </span>
                                <div className="feature-text">
                                    <h3 className="heading">Propiedades legítimas</h3>
                                    <p className="text-black-50">
                                        Todas nuestras propiedades son verificadas para garantizar que sean legítimas y cumplan con los estándares de calidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row section-counter mt-5">
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"
                                ><span className="countup text-primary">3298</span></span
                                >
                                <span className="caption text-black-50">Clientes satisfechos</span>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"
                                ><span className="countup text-primary">225</span></span
                                >
                                <span className="caption text-black-50">Propiedades en venta o alquiler</span>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"
                                ><span className="countup text-primary">60</span></span
                                >
                                <span className="caption text-black-50">Años de experiencia</span>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"
                                ><span className="countup text-primary">150</span></span
                                >
                                <span className="caption text-black-50">Agentes para ayudarte</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="row justify-content-center footer-cta" data-aos="fade-up">
                    <div className="col-lg-7 mx-auto text-center">
                        <h2 className="mb-4">Sea parte de nuestro equipo de agentes</h2>
                        <p>
                            <a
                                href="/"
                                target="_blank"
                                className="btn btn-primary text-white py-3 px-4"
                            >Trabaja con nosotros</a
                            >
                        </p>
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default HomePage;