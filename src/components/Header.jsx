import React, { useState } from 'react'
import {headerNav} from "../contants";




const Header = () => {

    const [show,setShow] = useState(false);
    // hook 명령어 - 더 공부해보기! show를 기존 변수, 함수 돌릴 때는 show의 클론인 setShow를 사용함
    const toggleMenu = () => {
        setShow((prevShow)=>!prevShow);
    }

    return (
        <header id='header' role='banner'>
            <div className="header_inner">
                <div className="header_logo">
                    <a href="/">rainbow <em>portfolio</em></a>
                </div>
                <nav className={`header_nav ${show ? "show":""}`} role='navigation' aria-label='메인메뉴'>
                    <ul>
                        {
                            headerNav.map((nav,key)=>(
                                <li key={key}>
                                    <a href={nav.url}>{nav.title}</a>
                                </li>
                            ))
                        }
                        
                    </ul>
                </nav>
                <div className='header_mobnav' id='headerToggle' aria-controls='primary-menu' aria-expanded={show ? "true":"false"} role='button' tabIndex='0' onClick={toggleMenu}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header