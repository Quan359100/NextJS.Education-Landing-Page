import Link from "next/link"

export default function Banner1() {
    return (
        <>
            <section className="banner-area banner-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content">
                                <h3 className="title tg-svg" data-aos="fade-right" data-aos-delay={400}>Learn Skills For The Future </h3>
                                <p data-aos="fade-right" data-aos-delay={600}>Hi Bọn Mình là Top Class, <span className="hightlight-text">chúng mình là sáng lập kênh youtube và tiktok "IT là dễ" </span>, chào mừng các bạn đến Top Class để tham dự các khoá học</p>
                                <div className="banner__btn-wrap" data-aos="fade-right" data-aos-delay={800}>
                                    <div className="tg-button-wrap">
                                        <Link href="https://www.youtube.com/channel/UCTbLYLxh0Va5TwMPehpV3KA" className="btn btn-youtube tg-svg"><i class="fab fa-youtube"></i><span className="text">YouTube</span>
                                            <span className="svg-icon" id="svg-1" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                    </div>
                                    <div className="tg-button-wrap">
                                        <Link href="https://www.tiktok.com/" className="btn btn-tiktok tg-svg"><i class="fab fa-tiktok"></i><span className="text">TikTok</span>
                                            <span className="svg-icon" id="svg-1" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                    </div>
                                    <span className="sub-title" data-aos="fade-right" data-aos-delay={200}> 100% hài lòng từ các bạn</span>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__images">
                                <img src="/assets/img/banner/banner_img.png" alt="img" className="main-img" />
                                <img src="/assets/img/banner/bshape_03.png" alt="shape" className="shape" data-aos="fade-down-right" data-aos-delay={1200} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
