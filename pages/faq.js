import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Tư Vấn">
                <section className="faq-area section-py-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-10">
                                <div className="faq-wrap">
                                    <div className="accordion" id="accordionExample">
                                    <h4 className="title-two">Câu Hỏi Chung</h4>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                <button  className={isActive.key == 1 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Tại Sao Lại Có Khoá Học "IT Là Dễ" ?
                                                </button>
                                            </h2>
                                            <div  className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                    Các khóa học được làm ra, để phục vụ đối tượng 'đông đảo nhất', là sinh viên (đúng và trái ngành), có nguyện vọng theo đuổi con đường IT tại các công ty CNTT.
                                                    Cá nhân mình, học đúng ngành , đi làm tại công ty CNTT, nên định hướng của mình bị ảnh hưởng bởi kinh nghiệm chinh chiến tại các công ty trên.
                                                    Vì vậy, các khóa học được làm ra với mục đích giúp các bạn định hướng, chuẩn bị kiến thức ĐỂ ĐI THỰC TẬP & ĐI LÀM CHO CÁC CÔNG TY IT.
                                                    Đồng thời, giúp rút ngắn thời gian trong cuộc hành trình từ beginner lên senior khi bạn theo đuổi con đường này.
                                                    Bạn nào là người trái ngành, người đã đi làm, muốn học khóa học phục vụ mục đích riêng của bản thân (không phải là mục đích học kiến thức để đi làm tại công ty CNTT), lưu ý đọc kỹ các câu hỏi thường gặp dành cho đối tượng đấy.
                                                    Mình không chịu trách nhiệm, cũng như luôn muốn sự thoải mái giữa 'mình và bạn'. Vì vậy, nên tìm hiểu kỹ càng, đọc các câu hỏi thường gặp, như vậy, tiết kiệm được thời gian cho cả hai bên.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                <button  className={isActive.key == 2 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Các Khoá Học Top Class sẽ bao gồm cái gì ?
                                                </button>
                                            </h2>
                                            <div  className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur.Sorem ipsum dolor sit amet consectetu.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                <button  className={isActive.key == 3 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Tại Sao Giá của "Top Class" rất rẻ ?
                                                </button>
                                            </h2>
                                            <div  className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur.Sorem ipsum dolor sit amet consectetu.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="title-two">Câu Hỏi dành cho Front-End</h4>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                                <button  className={isActive.key == 4 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Road Map dành cho Front-End
                                                </button>
                                            </h2>
                                            <div  className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur.Sorem ipsum dolor sit amet consectetu.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                                                <button  className={isActive.key == 5 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                   Các Bạn học Front-end hay mắc lỗi gì ?
                                                </button>
                                            </h2>
                                            <div  className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur.Sorem ipsum dolor sit amet consectetu.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="title-two">Câu Hỏi dành cho Devops</h4>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(6)}>
                                                <button  className={isActive.key == 6 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    Road Map dành cho Devops
                                                </button>
                                            </h2>
                                            <div  className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur.Sorem ipsum dolor sit amet consectetu.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(7)}>
                                                <button  className={isActive.key == 7 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    Các Bạn học Devops hay mắc lỗi gì ?
                                                </button>
                                            </h2>
                                            <div  className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur.Sorem ipsum dolor sit amet consectetu.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="title-two">Câu Hỏi dành cho Back-End</h4>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" onClick={() => handleToggle(8)}>
                                                <button  className={isActive.key == 8 ? "accordion-button  collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                    Các Bạn học Back-End hay mắc lỗi gì ?
                                                </button>
                                            </h2>
                                            <div  className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Sorem ipsum dolor sit amet consectetur adipiscing elit massa aenean orci erat pellentesque areaultrices idposere interdum est proin lacus acilisis faucibus egestas fringilla dolor tellus sit venenatis lorem ipsumaw dolor onsectur.Sorem ipsum dolor sit amet consectetu.</p>
                                                </div>
                                            </div>
                                        </div>
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