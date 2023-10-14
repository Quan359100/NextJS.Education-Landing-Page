import Link from "next/link"
import { useState } from "react"
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    return (
        <>
            <ul className="navigation">
                <li className="active menu-item-has-children">
                    <Link href="/courses">Home</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/event">Sự Kiện</Link>
                 </li>
                <li className="menu-item-has-children">
                    <Link href="/faq">Tư Vấn</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/blog-grid">Donate</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/about-us">Về Chúng Tôi</Link>
                </li>
            </ul>
        </>
    )
}
