import Link from "next/link"
import jobs from "../../data/lmentor.json"
import MentorCardLastest from "@/components/mentor/MentorCardLastest"
let lastMentor = jobs
?.map((item) => (
    <div className="col" key={item.id}>
        <MentorCardLastest item={item} />
    </div>

    // End all jobs
))
export default function Instructor1() {
    return (
        <>
            <section className="instructor-area section-pt-120 section-pb-70">
                <div className="container">
                    <div className="section__title-wrap">
                        <div className="row align-items-center gap-4 gap-md-0">
                            <div className="col-md-8">
                                <div className="section__title text-center text-md-start">
                                    <span className="sub-title">Giảng Viên</span>
                                    <h2 className="title tg-svg">Top Các Giảng Viên</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="tg-button-wrap justify-content-center justify-content-md-end">
                                    <Link href="/about-us" className="btn tg-svg"><span className="text">Toàn Bộ Giảng Viên</span>
                                        <span className="svg-icon" id="instructor-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                       {lastMentor}
                    </div>
                </div>
            </section>
        </>
    )
}
