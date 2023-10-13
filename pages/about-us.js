import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import mentorData from "../data/mentor.json"
import eventData from "../data/event.json"
import MentorCard from "@/components/mentor/MentorCard"
import EventCardLastest from "@/components/event/EventCardLastest"

let mentorCard = mentorData
?.map((item) => (
    <div className="col" key={item.id}>

        <MentorCard item={item} />
    </div>

    // End all jobs
))

let eventCard  = eventData
?.map((item) => (
    <div className="col" key={item.id}>
        <EventCardLastest item={item} />
    </div>
    // End all jobs
))

export default function AboutUs() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Về Chúng Tôi">
                <div>
                    <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">Chúng Tôi là ai</span>
                                            <h2 className="title tg-svg">Dẫn đầu việc phát triển và cung cấp các khóa học xuất sắc</h2>
                                        </div>
                                        <p className="fw-medium">Chúng tôi tập hợp bao gồm nhiều  giảng viên có nhiều năm kinh nghiệm , đã và đang làm việc cho các tập đoàn trong và nước ngoài</p>
                                        <p>Như : FPT , Google , Angoda , .... Chúng tôi tin với nhiều năm kinh nghiệm có thể giúp bạn tiếp xúc các kiến thức 1 cách dễ hiểu và chính xác</p>
                                        <div className="tg-button-wrap">
                                            <Link href="/courses" className="btn tg-svg"><span className="text">Tham Dự Khoá Học</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <img src="/assets/img/about/about_img01.jpg" alt="img" />
                                        {/* <div className="column">
                                            <img src="/assets/img/others/about_img04.jpg" alt="img" />
                                            <img src="/assets/img/others/about_img05.jpg" alt="img" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mentors-area position-relative section-pt-120 section-pb-90">
                        <div className="container">
                            <div className="section__title-wrap mb-55">
                                <div className="row align-items-center gap-4 gap-md-0">
                                    <div className="col-md-8">
                                        <div className="section__title text-center text-md-start">
                                            <span className="sub-title">Giảng Viên</span>
                                            <h2 className="title tg-svg">Các Giảng Viên</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className= "row row-cols-1 row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                                    {mentorCard}
                                </div>
                            </div>
                        </div>
                        <div className="mentors__shapes">
                            <img src="/assets/img/objects/mentors_shape01.png" alt="shape" />
                            <img src="/assets/img/objects/mentors_shape02.png" alt="shape" />
                        </div>
                    </section>
                    <section className="events-area position-relative section-pt-120 section-pb-90">
                        <div className="container">
                            <div className="section__title-wrap mb-55">
                                <div className="row align-items-center gap-4 gap-md-0">
                                    <div className="col-md-8">
                                        <div className="section__title text-center text-md-start">
                                            <span className="sub-title">Sự Kiện</span>
                                            <h2 className="title tg-svg">Các Sự Kiện Sắp Tới</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tg-button-wrap justify-content-center justify-content-md-end">
                                            <Link href="/events" className="btn btn-border tg-svg"><span className="text">Các Sự Kiện</span> <span className="svg-icon" id="events-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                {eventCard}
                            </div>
                        </div>
                        <div className="mentors__shapes">
                            <img src="/assets/img/objects/mentors_shape01.png" alt="shape" />
                            <img src="/assets/img/objects/events_shape.png" width={98} alt="shape" />
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}