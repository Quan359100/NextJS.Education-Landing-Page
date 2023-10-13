import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "../../data/event.json"
import EventSpeakerSlider1 from "@/components/slider/EventSpeakerSlider1"
export default function EventDetails() {
    let Router = useRouter()
    const [event, setEvent] = useState(null)
    const { id } = Router.query
    useEffect(() => {
        setEvent(data.find((data) => data.id == id))
    }, [id])
    return (
        <>
            {event && (
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Event Details">
            <section className="event-details-area section-py-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-73">
                            <div className="event-details-content">
                                <h2 className="title">{event.nameEvent}</h2>
                                <div className="event-meta">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-map-marker-alt"/>{event.location}</li>
                                        <li><i className="fas fa-calendar" />{event.date}</li>
                                        <li><i className="fas fa-phone" />{event.contact}</li>
                                    </ul>
                                </div>
                                <div className="event-details-img">
                                    <img src={`/assets/img/events/${event.img}`}  alt="img" />
                                </div>
                                <h4 className="title-two">Thông tin Event</h4>
                                <p className="info-one">{event.aboutEvent}</p>
                                <h4 className="title-two">Nội Dung Thảo Luận Event</h4>
                                <div className="event-details-list">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-check-circle" />{event.contentEvent}</li>
                                        <li><i className="fas fa-check-circle" />{event.contentEvent}</li>
                                        <li><i className="fas fa-check-circle" />{event.contentEvent}</li>
                                        <li><i className="fas fa-check-circle" />{event.contentEvent}</li>
                                        <li><i className="fas fa-check-circle" />{event.contentEvent}</li>
                                    </ul>
                                </div>
                                <h4 className="title-two">Địa Chỉ</h4>
                                <div className="map-direction">
                                    <iframe src={`${event.locationSrc}`} allowFullScreen loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-27">
                            <aside className="event__sidebar">
                                <div className="event-widget">
                                    <div className="speakers-content-top">
                                        <h4 className="ew-title">Diễn Giả</h4>
                                        <div className="speakers-nav" />
                                    </div>
                                    <EventSpeakerSlider1 />
                                </div>
                                <div className="event-widget">
                                    <div className="event-cost-wrap">
                                        <h4 className="price"><strong>Giá:</strong>{event.ticket}</h4>
                                        <Link href="/403"  className="btn">Tham Dự Ngay</Link>
                                        <div className="event-information-wrap">
                                            <h6 className="title">Thông Tin</h6>
                                            <ul className="list-wrap">
                                                <li><i className="fas fa-hourglass-half" />Thời Gian  <span>{event.duration}</span></li>
                                                <li><i className="fas fa-chair" />Chỗ Ngồi <span>{event.seat}</span></li>
                                                <li><i className="fas fa-language" />Ngôn Ngữ <span>{event.language}</span></li>
                                                <li><i className="flaticon-share" />Share
                                                    <ul className="list-wrap event-social">
                                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
            )}
        </>
    )
}