import Layout from "@/components/layout/Layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import courses from "../../data/courses.json"
import VideoCard from "@/components/sections/videoCard"

export default function attendDetailFree () {
    const router = useRouter()
    const [course, setCourse] = useState({})
    const id = router.query.id;
    useEffect(() => {
        if (!id) <h1>Loading...</h1>
        else setCourse(courses.find((item) => item.id == id))
        return () => { }
    }, [id])
    return (
        <>
         <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Hướng Dẫn Tham Gia Khoá Học">
                <section className="events-area section-pt-120 section-pb-90">
                    <div className="container">
                        <div className="row">
                            <h2 className="title">{course.courseTitle}</h2>
                            <div className="col-xl-12 col-lg-8">
                                <div className="row events__wrapper">                                  
                                    {VideoCard(course.videoID)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Layout>
        </>
    )
}


