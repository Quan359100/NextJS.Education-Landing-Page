import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area tg-motion-effects section-py-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about__images">
                                <img className="big-img" src="/assets/img/others/about_img01.png" alt="img" />
                                <div className="about__exp">
                                    <svg width={126} height={108} viewBox="0 0 126 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 10C0 4.47715 4.47715 0 10 0H110.996C116.321 0 120.713 4.17312 120.983 9.4914L125.429 96.7793C125.733 102.754 120.758 107.657 114.789 107.267L9.34719 100.369C4.08901 100.025 0 95.6593 0 90.3899V10Z" fill="currentcolor" />
                                    </svg>
                                    <h4 className="year">10 + </h4>
                                    <p>Năm kinh nghiệm</p>
                                </div>
                                <img src="/assets/img/others/about_dots.svg" alt="svg" className="dots tg-motion-effects2" />
                                <svg className="circle tg-motion-effects1" width={344} height={344} viewBox="0 0 344 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={20} y={20} width={304} height={304} rx={152} stroke="currentcolor" strokeWidth={40} />
                                </svg>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="about__content">
                                <div className="section__title">
                                    <span className="sub-title">About Us</span>
                                    <h2 className="title tg-svg">Kinh nghiệm vững vàng , sẵn sàng phục vụ bạn.</h2>
                                </div>
                                <p className="desc">Với hơn 10 năm kinh nghiệm trong các lĩnh vực : Devops , Front-end , Back End với các ngôn ngữ và kỹ năng khác nhau . Chúng tôi tin rằng các giảng viên sẽ giúp các bạn tiếp cận những kiến thức 1 cách đúng đắn nhất</p>
                                <div className="tg-button-wrap">
                                    <Link href="/about-us" className="btn tg-svg"><span className="text">Tìm Hiểu Thêm</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
