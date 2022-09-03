import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Gallery() {

    const [galleryimg, setGallery] = useState([])

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=gallery")
            .then(result => result.json())
            .then(result => setGallery(result.res.data.gallery.slides));
    }, [])


    const gallery = {
        infinite: false,
        speed: 500,
        nextArrow: <div className="comments__next_slider"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.55 7.40998L8.10747 3.96748C7.96695 3.8278 7.77686 3.74939 7.57872 3.74939C7.38058 3.74939 7.1905 3.8278 7.04997 3.96748C6.97968 4.03721 6.92388 4.12016 6.88581 4.21155C6.84773 4.30295 6.82812 4.40098 6.82812 4.49998C6.82812 4.59899 6.84773 4.69702 6.88581 4.78842C6.92388 4.87981 6.97968 4.96276 7.04997 5.03248L10.5 8.46748C10.5703 8.53721 10.6261 8.62016 10.6641 8.71155C10.7022 8.80295 10.7218 8.90098 10.7218 8.99998C10.7218 9.09899 10.7022 9.19702 10.6641 9.28842C10.6261 9.37981 10.5703 9.46276 10.5 9.53249L7.04997 12.9675C6.90875 13.1077 6.82901 13.2983 6.82831 13.4973C6.8276 13.6964 6.90599 13.8875 7.04622 14.0287C7.18646 14.17 7.37705 14.2497 7.57607 14.2504C7.7751 14.2511 7.96625 14.1727 8.10747 14.0325L11.55 10.59C11.9713 10.1681 12.208 9.59624 12.208 8.99998C12.208 8.40373 11.9713 7.83186 11.55 7.40998Z" fill="#333333"/>
        </svg>
        </div>,
        prevArrow: <div className="comments__next_slider"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.45003 10.59L9.89253 14.0325C10.033 14.1722 10.2231 14.2506 10.4213 14.2506C10.6194 14.2506 10.8095 14.1722 10.95 14.0325C11.0203 13.9628 11.0761 13.8798 11.1142 13.7884C11.1523 13.6971 11.1719 13.599 11.1719 13.5C11.1719 13.401 11.1523 13.303 11.1142 13.2116C11.0761 13.1202 11.0203 13.0372 10.95 12.9675L7.50003 9.53251C7.42973 9.46279 7.37393 9.37984 7.33586 9.28845C7.29778 9.19705 7.27818 9.09902 7.27818 9.00001C7.27818 8.90101 7.29778 8.80298 7.33586 8.71158C7.37393 8.62019 7.42973 8.53724 7.50003 8.46751L10.95 5.03251C11.0913 4.89228 11.171 4.70169 11.1717 4.50267C11.1724 4.30364 11.094 4.11249 10.9538 3.97126C10.8135 3.83004 10.623 3.7503 10.4239 3.7496C10.2249 3.74889 10.0338 3.82728 9.89253 3.96751L6.45003 7.41001C6.02867 7.83189 5.79201 8.40376 5.79201 9.00001C5.792 9.59627 6.02867 10.1681 6.45003 10.59Z" fill="#333333"/>
        </svg>
        </div>,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        dots:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: false,
                    centerMode: false,
                }
            }
        ]
    };
  
      

    return(
    <section className="gallery">
        <div className="container">
            <div className="gallery__inner">

                <div className="where">
                    <Link className="where__main" to="/">Главная </Link>
                    <i className="where__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3998 9.88006L10.8098 5.29006C10.6224 5.10381 10.369 4.99927 10.1048 4.99927C9.84062 4.99927 9.58716 5.10381 9.3998 5.29006C9.30607 5.38302 9.23168 5.49362 9.18091 5.61548C9.13014 5.73734 9.104 5.86805 9.104 6.00006C9.104 6.13207 9.13014 6.26278 9.18091 6.38464C9.23168 6.5065 9.30607 6.6171 9.3998 6.71006L13.9998 11.2901C14.0935 11.383 14.1679 11.4936 14.2187 11.6155C14.2695 11.7373 14.2956 11.868 14.2956 12.0001C14.2956 12.1321 14.2695 12.2628 14.2187 12.3846C14.1679 12.5065 14.0935 12.6171 13.9998 12.7101L9.3998 17.2901C9.2115 17.477 9.10518 17.7312 9.10425 17.9965C9.10331 18.2619 9.20783 18.5168 9.3948 18.7051C9.58178 18.8934 9.8359 18.9997 10.1013 19.0006C10.3666 19.0016 10.6215 18.897 10.8098 18.7101L15.3998 14.1201C15.9616 13.5576 16.2772 12.7951 16.2772 12.0001C16.2772 11.2051 15.9616 10.4426 15.3998 9.88006Z" fill="#333333"/></svg></i>
                    <h4 className="where__now">О продукции</h4>
                </div>

                <div className="gallery__content">
                     <h2 className='pages__title'>Галерея</h2>
                    
                     <Slider  {...gallery}> 
                     {galleryimg.map(slide => (
                             <div className="gird">
                                {slide.map(item => (
                                <div className="grid-item">
                                    <img src={item}/>  
                                </div>
                                ))}
                            </div>
                        ))}
                    </Slider>
                     

                </div>
                

            </div>
        </div>
    </section>
    )
    

}

export default Gallery