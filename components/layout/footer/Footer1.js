import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="footer-bg" data-bg-color="var(--tg-common-color-white)">
                <div className="footer__top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer__about">
                                        <div className="footer__logo logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="img" /></Link>
                                        </div>
                                        <p>Cập nhật thông tin qua các kênh dưới đây</p>
                                        <ul className="list-wrap m-0 p-0">
                                            <li className="socials">
                                                <Link href="#"><i className="fab fa-facebook-f fw-title" /></Link>
                                                <Link href="#"><i className="fab fa-twitter fw-title" /></Link>
                                                <Link href="#"><i className="fab fa-whatsapp fw-title" /></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in fw-title" /></Link>
                                                <Link href="#"><i className="fab fa-youtube fw-title" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget widget_nav_menu">
                                    <h4 className="fw-title">Link Liên Kết</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="/courses">Khoá Học</Link></li>
                                        <li><Link href="/events">Event</Link></li>
                                        <li><Link href="/fag">Tư Vấn</Link></li>
                                        <li><Link href="/about-us">Về Chúng Tôi</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget widget_nav_menu">
                                    <h4 className="fw-title">Các Khoá Học</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="/courses">Khoá Học Devops</Link></li>
                                        <li><Link href="/courses">Khoá Học Front-End</Link></li>
                                        <li><Link href="/courses">Khoá Học Back-End</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Thời gian hoạt động</h4>
                                    <div className="footer__working-list">
                                        <div className="footer__working-item">
                                            <span className="day">Mon - Fri</span>
                                            <span className="time">02:00 PM - 11:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="copyright__text">
                                    <p>Copyright © {new Date().getFullYear()} eduvalt. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="copyright__menu">
                                    <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms  Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
