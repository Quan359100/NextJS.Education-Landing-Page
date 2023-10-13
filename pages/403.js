import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Custom403() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Trang Bảo Trì">
                <section className="error-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="error-wrap text-center">
                                    <div className="error-img">
                                        <img src="/assets/img/others/error_img.svg" alt="img" />
                                    </div>
                                    <div className="error-content">
                                        <h2 className="title"><span>XIN LỖI ! CHỨC NĂNG NÀY ĐANG ĐƯỢC PHÁT TRIỂN</span></h2>
                                        <div className="tg-button-wrap">
                                            <Link href="/" className="btn tg-svg"><span className="text">QUAY LẠI TRANG CHỦ</span> <span className="svg-icon" id="error-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
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