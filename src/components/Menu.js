import React, { useState, useEffect } from 'react';

function Menu(props) {

    const [home, setHome] = useState([]);

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => setHome(result.res.data.our_projects))
    }, []);

    return (
        <menu>
            <h2 className='pages__title'>Наши работы</h2>
            <div className="container">
                <div className="row home__gallery">
                    <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <img className="img1" src={home[0]} alt="png" />
                    </div>
                    <div className=" col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <img className="img2" src={home[1]} alt="png" />
                        <img className="img" src={home[2]} alt="png" />
                    </div>
                    <div className="col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <img className="img2" src={home[3]} alt="png" />
                        <img className="img" src={home[4]} alt="png" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <a className="menu_link" href="#!">Подробнее <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </menu>
    );
}

export default Menu;