import Link from "next/link"

export default function DonateCard ({ item }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-9">
                <div className="blog__post-item shine__animate-item">
                    <div className="blog__post-thumb">
                        <img src={`/assets/img/donate/${item.logo}`} alt="img" />
                    </div>
                    <div className="blog__post-content">
                        <div className="donate__qr-thumb">
                            <img src={`/assets/img/donate/${item.qr}`} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
