import Link from "next/link"
const MentorCardLastest = ({ item }) => {
    return (
        <>
                <div className="instructor__item">
                    <div className="instructor__img">
                        <div className="instructor__shape" style={{ backgroundColor: '#E2FAFF', borderRadius: '135px 0 0 0' }} />
                            <Link href={`/mentor/${item.id}`}>
                                <img src="/assets/img/instructor/instructor01.png" alt="instructor" />
                            </Link>
                    </div>
                    <div className="instructor__content">
                        <div className="left">
                            <span className="designation">{item.role}</span>
                            <h4 className="name"><Link href={`/mentor/${item.id}`}>{item.name}</Link></h4>
                        </div>
                        <div className="right">
                            <span className="share"><i className="flaticon-share" /></span>
                            <ul className="social-list list-wrap">
                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default MentorCardLastest