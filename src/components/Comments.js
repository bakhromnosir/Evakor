import { useState, useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Comments(){

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => setComments(result.res.data.comments));
    }, [])

    const settings = {
        infinite: false,
        speed: 500,
        className: "center",
        nextArrow: <div className="comments__next_slider"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5499 7.41L8.10738 3.9675C7.96686 3.82781 7.77677 3.7494 7.57863 3.7494C7.38049 3.7494 7.1904 3.82781 7.04988 3.9675C6.97959 4.03722 6.92379 4.12017 6.88571 4.21157C6.84764 4.30296 6.82803 4.40099 6.82803 4.5C6.82803 4.59901 6.84764 4.69704 6.88571 4.78843C6.92379 4.87983 6.97959 4.96278 7.04988 5.0325L10.4999 8.4675C10.5702 8.53722 10.626 8.62017 10.6641 8.71157C10.7021 8.80296 10.7217 8.90099 10.7217 9C10.7217 9.09901 10.7021 9.19704 10.6641 9.28843C10.626 9.37983 10.5702 9.46278 10.4999 9.5325L7.04988 12.9675C6.90865 13.1077 6.82892 13.2983 6.82822 13.4973C6.82751 13.6964 6.9059 13.8875 7.04613 14.0288C7.18637 14.17 7.37696 14.2497 7.57598 14.2504C7.775 14.2511 7.96616 14.1727 8.10738 14.0325L11.5499 10.59C11.9712 10.1681 12.2079 9.59625 12.2079 9C12.2079 8.40375 11.9712 7.83188 11.5499 7.41V7.41Z" fill="white"/></svg></div>,
        prevArrow: <div className="comments__next_slider"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.45012 10.59L9.89262 14.0325C10.0331 14.1722 10.2232 14.2506 10.4214 14.2506C10.6195 14.2506 10.8096 14.1722 10.9501 14.0325C11.0204 13.9628 11.0762 13.8798 11.1143 13.7884C11.1524 13.697 11.172 13.599 11.172 13.5C11.172 13.401 11.1524 13.303 11.1143 13.2116C11.0762 13.1202 11.0204 13.0372 10.9501 12.9675L7.50012 9.5325C7.42982 9.46278 7.37403 9.37983 7.33595 9.28843C7.29787 9.19704 7.27827 9.09901 7.27827 9C7.27827 8.90099 7.29787 8.80296 7.33595 8.71157C7.37403 8.62017 7.42982 8.53722 7.50012 8.4675L10.9501 5.0325C11.0913 4.89227 11.1711 4.70167 11.1718 4.50265C11.1725 4.30363 11.0941 4.11248 10.9539 3.97125C10.8136 3.83002 10.623 3.75028 10.424 3.74958C10.225 3.74888 10.0338 3.82727 9.89262 3.9675L6.45012 7.41C6.02877 7.83188 5.7921 8.40375 5.7921 9C5.7921 9.59625 6.02877 10.1681 6.45012 10.59V10.59Z" fill="white"/></svg></div>,
        centerMode: true,
        centerPadding: "340px", 
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: true,
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
      const settings2 = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
          
        ]
      };

    return(
    <section className="comment__slider">
        <Slider  {...settings}>
            {comments.map((item, index) => (
            <div className="card" key={index}>
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
                            {item.gallery.map(img => (
                                <div className="card__gallery">
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