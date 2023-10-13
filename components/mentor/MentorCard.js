import Link from "next/link"
const MentorCard = ({ item }) => {
    const stars = [];
    const rating = item.rating;
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
            <div className="mentors__item">
                <div className="mentors__img">
                    <Link href={`/mentor/${item.id}`}>
                        <img src={`/assets/img/mentors/${item.logo}`} alt="mentor" />
                    </Link>
                    <div className="mentors__social">
                        <span className="share"><i className="flaticon-share" /></span>
                        <ul className="social-list list-wrap">
                            <li><Link href={`${item.FacebookUrl}`}><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href={`${item.XUrl}`}><i className="fab fa-twitter" /></Link></li>
                            <li><Link href={`${item.LinkendUrL}`}><i className="fab fa-linkedin-in" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mentors__content">
                    <div className="mentors__content-top">
                        <h4 className="name"><Link href={`/mentor/${item.id}`}>{item.name}</Link></h4>
                        <span className="designation">{item.role}</span>
                    </div>
                    <div className="mentors__content-bottom">
                        <ul>
                            <li className="rating">
                                {stars}
                                <span className="rating-count">({rating})</span>
                            </li>              
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MentorCard