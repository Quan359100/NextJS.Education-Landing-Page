import Layout from "@/components/layout/Layout"


export default function attendDetailPaid () {
    return (
        <>
         <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Hướng Dẫn Tham Gia Khoá Học">
                <section className="events-area section-pt-120 section-pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-8">
                                <div className="row events__wrapper">                                   
                                    <h4 className="title-two">Cách thức tham gia  khóa học: :</h4>
                                    <div className="event-details-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check-circle" />Bước 1: Inbox qua Fan Page Hỏi Dân IT để được hướng dẫn: Link Fanpage: https://www.facebook.com/dang.quan.7393264</li>
                                            <li><i className="fas fa-check-circle" />Bước 2: Chuyển khoản theo cú pháp (qua MoMo/Bank nội địa/Paypal)</li>
                                            <li><i className="fas fa-check-circle" />Bước 3: Admin Top Class sẽ liên hệ và add bạn vào nhóm skype hoặc zalo , sau đó sẽ gửi lịch học , giáo trình </li>
                                            <li><i className="fas fa-check-circle" />Bước 4: Trước giờ học khoảng 3 tiếng , Admin hoặc Thầy giáo sẽ gửi link zoom va github để học viên tham dự học </li>
                                        </ul>  
                                    </div>
                                    <h4 className="title-two">Lưu Ý  :</h4> 
                                    <p className="info-one">Các bạn nên tham khảo mục tư vấn để biết các câu hỏi thường gặp.Nếu bạn là sinh viên & hạn hẹp về tài chính, cứ chia sẻ với bọn mình</p>
                                    <h4 className="title-two">Cảm ơn các bạn đã chọn tham gia khoá học.  <i class="fas fa-thumbs-up"/></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Layout>
        </>
    )
}


