import React from 'react';
import "bootstrap";


function Section(props) {
    return (
        <section>
            <h2 className='pages__title'>Видео</h2>
            <div className="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-xxl-6">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/lpOCbF2dlG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div>
                                        <h5>Выставка BMW!</h5>
                                        <p>Описание</p>
                                    </div>
                                </div>
                                <div className="col-xxl-6">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/lpOCbF2dlG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div>
                                        <h5>Апгрейд Nexia 3!</h5>
                                        <p>Описание</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-xxl-6">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/lpOCbF2dlG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div>
                                        <h5>Выставка BMW!</h5>
                                        <p>Описание</p>
                                    </div>
                                </div>
                                <div className="col-xxl-6">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/lpOCbF2dlG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div>
                                        <h5>Апгрейд Nexia 3!</h5>
                                        <p>Описание</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-xxl-6">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/lpOCbF2dlG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div>
                                        <h5>Выставка BMW!</h5>
                                        <p>Описание</p>
                                    </div>
                                </div>
                                <div className="col-xxl-6">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/lpOCbF2dlG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div>
                                        <h5>Апгрейд Nexia 3!</h5>
                                        <p>Описание</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <div className="icon_left">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.6002 9.11994L6.1902 13.7099C6.37756 13.8962 6.63101 14.0007 6.8952 14.0007C7.15938 14.0007 7.41284 13.8962 7.6002 13.7099C7.69393 13.617 7.76832 13.5064 7.81909 13.3845C7.86986 13.2627 7.896 13.132 7.896 12.9999C7.896 12.8679 7.86986 12.7372 7.81909 12.6154C7.76832 12.4935 7.69393 12.3829 7.6002 12.2899L3.0002 7.70994C2.90647 7.61698 2.83207 7.50637 2.78131 7.38452C2.73054 7.26266 2.7044 7.13195 2.7044 6.99994C2.7044 6.86793 2.73054 6.73722 2.78131 6.61536C2.83207 6.4935 2.90647 6.3829 3.0002 6.28994L7.6002 1.70994C7.7885 1.52296 7.89482 1.26884 7.89575 1.00347C7.89669 0.738111 7.79218 0.483242 7.6052 0.294938C7.41822 0.106635 7.1641 0.000318463 6.89873 -0.000619022C6.63337 -0.00155651 6.3785 0.102961 6.1902 0.289939L1.6002 4.87994C1.0384 5.44244 0.722836 6.20494 0.722836 6.99994C0.722836 7.79494 1.0384 8.55744 1.6002 9.11994Z" fill="white" />
                            </svg>
                        </div>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <div className="icon_right">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.3998 4.88006L1.8098 0.29006C1.62244 0.103809 1.36899 -0.000732422 1.1048 -0.000732422C0.840616 -0.000732422 0.587165 0.103809 0.399802 0.29006C0.306074 0.383023 0.23168 0.493624 0.180911 0.615483C0.130142 0.737343 0.104004 0.868048 0.104004 1.00006C0.104004 1.13207 0.130142 1.26278 0.180911 1.38464C0.23168 1.5065 0.306074 1.6171 0.399802 1.71006L4.9998 6.29006C5.09353 6.38302 5.16793 6.49362 5.21869 6.61548C5.26946 6.73734 5.2956 6.86805 5.2956 7.00006C5.2956 7.13207 5.26946 7.26278 5.21869 7.38464C5.16793 7.5065 5.09353 7.6171 4.9998 7.71006L0.399802 12.2901C0.211499 12.477 0.105184 12.7312 0.104246 12.9965C0.103308 13.2619 0.207825 13.5168 0.394803 13.7051C0.581781 13.8934 0.835903 13.9997 1.10127 14.0006C1.36663 14.0016 1.6215 13.897 1.8098 13.7101L6.3998 9.12006C6.96161 8.55756 7.27716 7.79506 7.27716 7.00006C7.27716 6.20506 6.96161 5.44256 6.3998 4.88006Z" fill="white" />
                            </svg>
                        </div>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}



export default Section;