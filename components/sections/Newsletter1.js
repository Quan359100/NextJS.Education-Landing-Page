import Link from "next/link"
export default function Newsletter1() {
    return (
        <>
            <section className="newsletter-area section-py-55">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-4">
                            <div className="newsletter__img-wrap">
                                <div className="newsletter__img" data-aos="fade-right">
                                    <img src="/assets/img/others/newsletter.png" alt="img" />
                                </div>
                                <div className="newsletter__content">
                                    <h4 className="title">Hãy Subscribe <br /> để cập nhật các khoá học và ưu đãi mới nhất</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="newsletter__form">
                                <form action="#">
                                    <input type="email" placeholder="Xin hãy nhập Email" required />
                                    <button type="submit"><Link href="/403">Subscribe Ngay</Link></button>                                  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
