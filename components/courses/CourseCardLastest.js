import Link from "next/link"
const CourseCard = ({ item }) => {
    return (
        <>
            <div className="col">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/courses" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb01.png" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author001.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="#" className="courses__item-tag" style={{ backgroundColor: '#E8F9EF', color: '#04BC53' }}>{item.category}</Link>
                            <h5 className="title"><Link href="/courses">{item.courseTitle}</Link></h5>
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
                </div>
        </>
    )
}

export default CourseCard