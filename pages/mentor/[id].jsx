import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "../../data/mentor.json"
import CourseSlider1 from "@/components/slider/CourseSlider1"
export default function MentorDetails() {
    let Router = useRouter()
    const [mentor, setMentor] = useState(null)
    const { id } = Router.query
    let rating = 0
    if (mentor) {
        rating = mentor.rating;
    }
    useEffect(() => {
        setMentor(data.find((data) => data.id == id))
    }, [id])

    const stars = [];
    // Round the rating to the nearest half star (assuming 0.5 increments)
    const roundedRating = Math.round(rating * 2) / 2;
  
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<i key={i} className="fas fa-star" />);
      } else if (i - 0.5 === roundedRating) {
        stars.push(<i key={i} className="fas fa-star-half-alt" />);
      } else {
        stars.push(<i key={i} className="far fa-star" />);
      }
    }
    return (
        <>
            {mentor && (
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Thông tin Giảng Viên">
            <div>
                <section className="instructor-details-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="instructor-details-wrap">
                                    <div className="instructor-details-img">
                                        <img src={`/assets/img/instructor/${mentor.profilePictures}`} alt="img" />
                                    </div>
                                    <div className="instructor-details-content">
                                        <div className="content-top">
                                            <div className="left-side-content">
                                                <h2 className="title">{mentor.name}</h2>
                                                <span>{mentor.role}</span>
                                            </div>
                                            <div className="instructor-details-social">
                                                <ul className="list-wrap">
                                                    <li><Link href={`${mentor.FacebookUrl}`}><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href={`${mentor.XUrl}`}><i className="fab fa-twitter" /></Link></li>
                                                    {/* <li><Link href="#"><i className="fab fa-whatsapp" /></Link></li> */}
                                                    <li><Link href={`${mentor.LinkendUrL}`}><i className="fab fa-linkedin-in" /></Link></li>
                                                    {/* <li><Link href="#"><i className="fab fa-youtube" /></Link></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="instructor-info-wrap">
                                            <ul className="list-wrap">
                                                <li className="rating">
                                                    {stars}
                                                    <span className="rating-count">({rating})</span>
                                                </li> 
                                                <li>
                                                    <i className="fas fa-envelope" />
                                                    <Link href="https://mail.google.com">{mentor.MailUrL}</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-book-reader" />
                                                    {mentor.Course}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bio-content">
                                            <h4 className="title">Thông tin Cá Nhân</h4>
                                            <p>{mentor.Bio}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="courses-area-three instructor-courses-area">
                    <div className="container">
                        <div className="courses-title">
                            <h4 className="title">Các Khoá Học</h4>
                        </div>
                        <CourseSlider1 />
                    </div>
                </section>
            </div>
            
        </Layout>
        
            )}
        </>
    )
}