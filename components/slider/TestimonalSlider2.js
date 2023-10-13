import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
        <button type="button" className="slick-prev">
            <i className="flaticon-chevron"></i>
        </button>
    ),
    nextArrow: (
        <button type="button" className="slick-next">
            <i className="flaticon-chevron"></i>
        </button>
    ),
}

export default function TestimonalSlider2() {
    return (
        <>
            <Slider {...settings} className="testimonial-active">
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/review/review_01.jpg" />
                    </div>
                    <div className="testimonial__avatar">
                        <h4 className="name">Đỗ Trần</h4>
                        <span className="designation">Front-End</span>
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/review/review_02.jpg" />
                    </div>
                    <div className="testimonial__avatar">
                        <h4 className="name">Văn Trọng</h4>
                        <span className="designation">Senior Front-End</span>
                    </div>
                </div>
            </Slider>
        </>
    )
}
