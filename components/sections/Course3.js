import Link from "next/link"
import CourseSlider1 from "../slider/CourseSlider1"

export default function Course3() {
    return (
        <>
            <section className="courses-area-three position-relative section-pb-90">
                <div className="container">
                    <div className="section__title-wrap mb-50">
                        <div className="row align-items-end">
                            <div className="col-lg-7">
                                <div className="section__title text-center text-lg-start">
                                    <span className="sub-title">10,000+ Khoá học khác nhau</span>
                                    <h2 className="title tg-svg">Các Khoá Học Gần Đây</h2>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="tg-button-wrap mt-4 mt-lg-0 justify-content-center justify-content-lg-end">
                                    <Link href="/courses" className="btn btn-border tg-svg">Xem Toàn Bộ</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CourseSlider1 />
                </div>
                <div className="courses__shapes">
                    <div className="courses__shapes-item alltuchtopdown"><img src="/assets/img/courses/course_shape01.png" alt="shape" /></div>
                    <div className="courses__shapes-item alltuchtopdown"><img src="/assets/img/courses/course_shape02.png" alt="shape" /></div>
                </div>
            </section>
        </>
    )
}
