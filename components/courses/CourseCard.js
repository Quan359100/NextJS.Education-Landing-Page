import Link from "next/link"
const CourseCard = ({ item }) => {
    return (
        <>
            <div className="courses__item-two shine__animate-item">
                <div className="courses__item-two-thumb">
                    <Link href={`/course/${item.id}`} className="shine__animate-link">
                        <img src={`/assets/img/courses/${item.logo}`} alt="img" />
                    </Link>
                    <div className="author">
                    <Link href={`/course/${item.id}`}><img src={`/assets/img/courses/${item.authorLogo}`} alt="img" /></Link>
                    </div>
                </div>
                <div className="courses__item-two-content">
                    <Link href="#" className="courses__item-tag" style={{ backgroundColor: '#E8F9EF', color: '#04BC53' }}>{item.category}</Link>
                    <h5 className="title"><Link href={`/course/${item.id}`}>{item.courseTitle}</Link></h5>
                    <ul className="courses__item-meta list-wrap">
                        <li><i className="fas fa-book-reader" />{item.lesson}</li>
                        <li><i className="fas fa-hourglass-half" />{item.time}</li>
                    </ul>
                    <div className="courses__item-bottom">
                        <div className="course__price">
                            <h3 className="price">{item.vnd}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard