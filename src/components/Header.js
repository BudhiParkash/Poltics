import React, { useState } from "react"
import {FaFacebookSquare , FaYoutube , FaInstagramSquare} from 'react-icons/fa'
import '../CSS/Header.css'
import {GiHamburgerMenu} from 'react-icons/gi'


const Header = () => {

    const [showMediaIcons ,setShowMediaIcons] = useState(false); 

    return(
        <>
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>N</span>itesh
                    <span>S</span>harma
                </h2>
            </div>

            <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Photo</li>
                    <li>Videos</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a href="https://www.youtube.com/channel/UCr86yFtuIDkxVCI_Wu8dhSw" target="_blank">
                            <FaYoutube className="youtube"/>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/shivam_a07/" target="_blank">
                            <FaInstagramSquare className="instagram"/>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100005456833376" target="_blank">
                            <FaFacebookSquare className="facebook"/>
                        </a>
                    </li>
                </ul>

                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu/>
                    </a>

                </div>

            </div>

        </nav>

        <section className="hero-section">
            <p>Comming Soon</p>

        </section>
        </>
    )
}


export default Header;


