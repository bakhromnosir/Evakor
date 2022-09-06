import { useState, useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Comments() {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => setComments(result.res.data.comments));
    }, [])

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <div
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
            >
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.45012 7.59L4.89262 11.0325C5.03314 11.1722 5.22323 11.2506 5.42137 11.2506C5.61951 11.2506 5.8096 11.1722 5.95012 11.0325C6.02041 10.9628 6.07621 10.8798 6.11429 10.7884C6.15236 10.697 6.17197 10.599 6.17197 10.5C6.17197 10.401 6.15236 10.303 6.11429 10.2116C6.07621 10.1202 6.02041 10.0372 5.95012 9.9675L2.50012 6.5325C2.42982 6.46278 2.37403 6.37983 2.33595 6.28843C2.29787 6.19704 2.27827 6.09901 2.27827 6C2.27827 5.90099 2.29787 5.80296 2.33595 5.71157C2.37403 5.62017 2.42982 5.53722 2.50012 5.4675L5.95012 2.0325C6.09135 1.89227 6.17108 1.70167 6.17179 1.50265C6.17249 1.30363 6.0941 1.11248 5.95387 0.97125C5.81363 0.830021 5.62304 0.750284 5.42402 0.749581C5.225 0.748878 5.03385 0.827267 4.89262 0.9675L1.45012 4.41C1.02877 4.83188 0.792097 5.40375 0.792097 6C0.792097 6.59625 1.02877 7.16812 1.45012 7.59Z" fill="white"/>
     </svg>

        </div>
      );
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <div
          {...props}
          className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === slideCount - 1 ? true : false}
          type="button"
        >
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.54988 4.41L2.10738 0.967499C1.96686 0.827811 1.77677 0.749405 1.57863 0.749405C1.38049 0.749405 1.1904 0.827811 1.04988 0.967499C0.979586 1.03722 0.92379 1.12017 0.885714 1.21157C0.847637 1.30296 0.828033 1.40099 0.828033 1.5C0.828033 1.59901 0.847637 1.69704 0.885714 1.78843C0.92379 1.87983 0.979586 1.96278 1.04988 2.0325L4.49988 5.4675C4.57018 5.53722 4.62597 5.62017 4.66405 5.71157C4.70213 5.80296 4.72173 5.90099 4.72173 6C4.72173 6.09901 4.70213 6.19704 4.66405 6.28843C4.62597 6.37983 4.57018 6.46278 4.49988 6.5325L1.04988 9.9675C0.908654 10.1077 0.828918 10.2983 0.828215 10.4973C0.827512 10.6964 0.9059 10.8875 1.04613 11.0288C1.18637 11.17 1.37696 11.2497 1.57598 11.2504C1.775 11.2511 1.96616 11.1727 2.10738 11.0325L5.54988 7.59C5.97123 7.16812 6.2079 6.59625 6.2079 6C6.2079 5.40375 5.97123 4.83188 5.54988 4.41Z" fill="white"/>
          </svg>

        </div>
      );

    const settings = {
        infinite: false,
        speed: 500,
        className: "center",
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        centerPadding: "340px",
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    className: "none",
                    centerPadding: "0px",
                    centerMode: false,
                    initialSlide: 0,
                    
                }
            }
        ]
    };
    const settings2 = {
        infinite: false,
        speed: 500,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        swipe:true,
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1 ,
                    centerPadding: "35px",
                    centerMode: true
                }
            }

        ]
    };

    return (
        <section className="comment__slider">
            <h2 className='pages__title'>Отзывы</h2>
            <Slider  {...settings}>
                {comments.map((item, index) => (
                    <div key={index} className="card" >
                        <div className="card__inner">
                            <div className="card__top">
                                <div className="card__profile_img">
                                    <img src={item.photo} alt={item.name} />
                                </div>

                                <h4 className="card__profile_title">
                                    {item.name}
                                </h4>
                            </div>
                            <div className="card__center">
                                <p>
                                    {item.text}
                                </p>
                            </div>
                            <div className="card__bottom">
                                <Slider {...settings2}>
                                    {item.gallery.map((img, index) => (
                                        <div key={index} className="card__gallery">
                                            <img src={img} alt="" />
                                        </div>
                                    ))}
                                </Slider>

                            </div>
                        </div>

                    </div>
                ))}


            </Slider>
        </section>


    )
}

export default Comments;