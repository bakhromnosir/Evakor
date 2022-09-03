
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import logosad from "../img/stats/sad__smile.png"

function Stock() {
    const [stock, setStock] = useState([]);
	useEffect(() => {
		fetch("https://mproweb.uz/YTless/evacore/api/?page=promos")
			.then(result => result.json())
			.then(result => {
				setStock(result.res.data.promos)
			})
	}, [])
    return(
            <section className="stock">
                <div className="container">
                    <div className="stock__inner">
                        <div className="where">
                            <Link className="where__main" to="/">Главная </Link>
                            <i className="where__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3998 9.88006L10.8098 5.29006C10.6224 5.10381 10.369 4.99927 10.1048 4.99927C9.84062 4.99927 9.58716 5.10381 9.3998 5.29006C9.30607 5.38302 9.23168 5.49362 9.18091 5.61548C9.13014 5.73734 9.104 5.86805 9.104 6.00006C9.104 6.13207 9.13014 6.26278 9.18091 6.38464C9.23168 6.5065 9.30607 6.6171 9.3998 6.71006L13.9998 11.2901C14.0935 11.383 14.1679 11.4936 14.2187 11.6155C14.2695 11.7373 14.2956 11.868 14.2956 12.0001C14.2956 12.1321 14.2695 12.2628 14.2187 12.3846C14.1679 12.5065 14.0935 12.6171 13.9998 12.7101L9.3998 17.2901C9.2115 17.477 9.10518 17.7312 9.10425 17.9965C9.10331 18.2619 9.20783 18.5168 9.3948 18.7051C9.58178 18.8934 9.8359 18.9997 10.1013 19.0006C10.3666 19.0016 10.6215 18.897 10.8098 18.7101L15.3998 14.1201C15.9616 13.5576 16.2772 12.7951 16.2772 12.0001C16.2772 11.2051 15.9616 10.4426 15.3998 9.88006Z" fill="#333333" /></svg></i>
                            <h4 className="where__now">Акции</h4>
                        </div>
                        <h2 className='pages__title'>Акции</h2>
                        
                        <div className="stock__block">
                            { stock.length ? 
                                stock.map(item => (
                                    <div className="stock__items">
                                        <h3> {item.title}</h3>
                                        <div className="stock__img">
                                            <img src={item.image} alt="png" />
                                        </div>
                                        <p> {item.text} </p>
                                    </div>
                                ))
                             : 
                                <div className="empty__block">
                                        <p>К сожалению в данный момент акции не проводятся</p>
                                    <div className="empty__block__img">
                                        <img src= {logosad} alt="" />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Stock;