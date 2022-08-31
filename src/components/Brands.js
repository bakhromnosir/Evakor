import React, { useState, useEffect } from 'react';

function Brands(props) {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => setBrands(result.res.data.home_brands))
    }, [])

    return (
        <div className="brands">
            <h2 className='pages__title'>Выберите марку своего автомобиля</h2>
            <div className="container">
                <div className="row">
                    {brands.map((item, index) => (
                        <div className="col-xxl-2">
                            <div className="block">
                                <img src={item.icon} alt="png" />
                                <p>{item.brand_name}</p>
                            </div>
                        </div>
                    ))}
                    <div className="d-flex justify-content-end">
                        <a className="brands_link" href="#!">Подробнее <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;