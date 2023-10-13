import Link from "next/link"
import MobileMenu from "../MobileMenu"
import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react'
export default function Header3({ scroll, isMobileMenu, handleMobileMenu }) {
    const targetTime = new Date('2023-10-12T18:00:00').getTime(); // Thời gian mục tiêu là 6h chiều 12/10/2023
    const currentTime = new Date().getTime(); // Thời gian hiện tại
    const remainingTime = targetTime - currentTime; // Thời gian còn lại tính bằng millisecond
  
    const [countdown, setCountdown] = useState(remainingTime);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1000); // Cập nhật đồng hồ đếm ngược mỗi giây
      }, 1000);
  
      return () => {
        clearInterval(interval); // Xóa interval khi component bị unmount
      };
    }, []);
  
    const formatTime = (time) => {
      const hours = Math.floor(time / 3600000);
      const minutes = Math.floor((time % 3600000) / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
  
      return `${hours} giờ ${minutes} phút ${seconds} giây`;
    };

    return (
        <>
            <div id="header-fixed-height" />
            <header className="tg-header__style-three">
                <div className="tg-header__top">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="tg-header__top-info list-wrap">
                                    <li><i class="fa fa-fire"></i> <span>Giảm 40% Khóa Học Devops Cơ Bản còn 999k</span></li>
                                    <li>Ưu Đãi Đặc Biệt Cho Học Viên Mới.</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="tg-header__top-social list-wrap">
                                    <li>Hết Thời Gian Trong : </li>
                                    <li>{formatTime(countdown)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="tg-flaticon-menu-1" /></div>
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                            <ul className="navigation">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/courses">Khoá Học</Link></li>
                                                <li><Link href="/events">Event</Link></li>
                                                <li><Link href="/faq">Tư Vấn</Link></li>
                                                <li><Link href="/blog-grid">Donate</Link></li>
                                                <li><Link href="/about-us">Về Chúng Tôi</Link></li>    
                                            </ul>
                                        </div>
                                        {/* <div className="tgmenu__search-bar">
                                            <form action="#">
                                                <input type="text" placeholder="Search For Course . . ." />
                                                <button type="submit"><i className="flaticon-searching" /></button>
                                            </form>
                                        </div> */}
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="tg-flaticon-close-1" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmobile__search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                        <div className="tgmobile__menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="header-btn login-btn"><Link href="#" className="btn">Log in</Link></li>
                                                <li className="header-btn"><Link href="#" className="btn">Try For Free</Link></li>
                                            </ul>
                                        </div>
                                        <div className="social-links">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
