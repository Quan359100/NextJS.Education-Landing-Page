import Link from "next/link"

const EventCard = ({ item }) => {
    return (
        <>
            <div className="events__item shine__animate-item">
                <div className="events__item-thumb">
                    <Link href={`/event/${item.id}`} className="shine__animate-link">
                        <img  src={`/assets/img/events/${item.thumb}`} alt="img" />
                    </Link>
                    <span className="events__date"><i className="flaticon-calendar-date" />{item.date}</span>
                </div>
                <div className="events__item-content">
                    <h4 className="title"><Link href="/events-details">{item.nameEvent}</Link></h4>                                   
                    <span className="location"><i className="fas fa-map-marker-alt" />{item.location}</span>
                </div>
            </div>
        </>
    )
}

export default EventCard