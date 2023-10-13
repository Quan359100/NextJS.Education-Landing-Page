import TestimonalSlider2 from "../slider/TestimonalSlider2"

export default function Testimonial2() {
    return (
        <>
            <section className="testimonial-area position-relative section-pt-120 section-pb-57">
                <div className="container">
                    <div className="testimonial__wrapper">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-7 col-md-8">
                                <div className="section__title text-center">
                                    <span className="sub-title">Review</span>
                                    <h2 className="title tg-svg">Review/Đánh giá khóa học từ học viên</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-11">
                                <TestimonalSlider2 />
                            </div>
                        </div>
                        <div className="testimonial__avatars">
                            <img src="/assets/img/testimonal/testi01.png" alt="img" data-aos="zoom-in" data-aos-delay={200} />
                            <img src="/assets/img/testimonal/testi02.png" alt="img" data-aos="zoom-in" data-aos-delay={300} />
                            <img src="/assets/img/testimonal/testi03.png" alt="img" data-aos="zoom-in" data-aos-delay={400} />
                            <img className="object" src="/assets/img/objects/blog_shape01.png" width={97} alt="Object" />
                            <img className="object rotateme" src="/assets/img/objects/blog_shape02.png" width={66} alt="Object" />
                            <img src="/assets/img/banner/bshape_01.png" alt="shape" className="shape alltuchtopdown" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
