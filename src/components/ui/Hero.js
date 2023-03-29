import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        arrows: true
      };

  return (
    <div>
        <Slider {...settings}>
            <div>
                <section className="hero banner1">
                    <div className="hero-content">
                    </div>
                </section>
            </div>
            <div>
                <section className="hero banner2">
                    <div className="hero-content">
                    </div>
                </section>
            </div>
            <div>
                <section className="hero banner3">
                    <div className="hero-content">
                    </div>
                </section>
            </div>
        </Slider>
    </div>
  )
}

export default Hero