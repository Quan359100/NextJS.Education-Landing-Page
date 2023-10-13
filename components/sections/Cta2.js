import Link from "next/link"

export default function Cta2() {
    return (
        <>
            <section className="cta-area-two position-relative">
                 <div className="cta__bg" data-background="/assets/img/bg/cta_bg.jpg" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="cta__content">
                                <h5 className="sub-title">Giảm 40% cho các khoá học Devops tháng 10, ưu đãi đặc biệt cho học viên mới </h5>
                                <div className="tg-button-wrap justify-content-center">
                                    <Link href="/contact" className="btn tg-svg"><span className="text">Tham Dự Khoá Học</span>
                                        <span className="svg-icon" id="cta-btn-2" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
