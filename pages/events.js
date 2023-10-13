import Layout from "@/components/layout/Layout"
import Link from "next/link"
import jobs from "../data/event.json"
import EventCard from "@/components/event/EventCard"

export default function Events() {

    let content = jobs
    ?.map((item) => (
        <div className="col" key={item.id}>
            <EventCard item={item} />
        </div>
        // End all jobs
    ))
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Các Events">
                <section className="events-area section-pt-120 section-pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 order-2 order-lg-0">
                                <div className="events__sidebar">
                                    <div className="blog-widget">
                                        <div className="events__sidebar-filter">
                                            <form action="#">
                                                <div className="form-grp">
                                                    <input type="date" placeholder="Event From" className="231" />
                                                    <i className="fas fa-calendar" />
                                                </div>
                                                <div className="form-grp">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option>All Categories</option>
                                                        <option>Attendance Based</option>
                                                        <option>Unscheduled Events</option>
                                                        <option>Scheduled Events</option>
                                                    </select>
                                                </div>
                                                <div className="form-grp">
                                                    <input type="text" placeholder="Keywords" />
                                                    <i className="flaticon-searching fa-flip-horizontal" />
                                                </div>
                                                {/* <button type="submit" href="/403">Tìm Events</button> */}
                                                <Link  href="/403"  className="btn">Tìm Events</Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="row events__wrapper">
                                    <div className= "row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                                        {content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}