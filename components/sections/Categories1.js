import Link from "next/link"

export default function Categories1() {
    return (
        <>
            <section className="categories-area section-py-130">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-8 col-md-10">
                            <div className="categories__title-wrap text-center text-xl-start">
                                <div className="section__title">
                                    <h2 className="title tg-svg">Tìm kiếm theo nghề nghiệp</h2>
                                </div>
                                <p>Bạn có thể chọn các khoá học , kỹ năng theo từng nghề nghiệp mà bạn muốn hướng tới. Ngoài ra sẽ có road map để bạn có lộ trình phát triển bền vững </p>
                                <div className="tg-button-wrap justify-content-center justify-content-xl-start">
                                    <Link href="/courses" className="btn btn-border tg-svg">All Categories</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-9">
                            <div className="categories__wrap">
                                <div className="row justify-content-center row-cols-2 row-cols-md-3">
                                    <div className="col">
                                        <div className="categories__item">
                                            <Link href="/courses">
                                                <img src="/assets/img/category/category_devops.png" alt="img" />
                                                <span className="name">Devops</span>
                                                <span className="courses">10 Courses</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="categories__item">
                                            <Link href="/courses">
                                                <img src="/assets/img/category/category_frontend.png" alt="img" />
                                                <span className="name">Front-End</span>
                                                <span className="courses">5 Courses</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="categories__item">
                                            <Link href="/courses">
                                                <img src="/assets/img/category/category_backend.png" alt="img" />
                                                <span className="name">Back-End</span>
                                                <span className="courses">08 Courses</span>
                                            </Link>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categories__shapes">
                    <div className="categories__shapes-item rotateme"><img src="/assets/img/objects/categories_shape01.png" alt="shape" /></div>
                    <div className="categories__shapes-item" data-aos="fade-up"><img src="/assets/img/objects/categories_shape02.png" alt="shape" /></div>
                </div>
            </section>
        </>
    )
}
