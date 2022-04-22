import React, { useState } from "react"

// helpers
import PostUrlHelper from "../helpers/post-url.helper";

// images
import Logo from "../images/logo.svg";
import Xmark from "../images/xmark.svg";
import Bars from "../images/bars.svg";
import ArchiveUrlHelper from "../helpers/archive-url.helper";

type AppProps = {
    latestPost: Object
}

const HeaderComponent = (props: any) => {
    const { latestPost } = props
    const postUri = "/" + PostUrlHelper(latestPost.slug)
    const archiveUri = "/" + ArchiveUrlHelper(1)

    const [expandMenu, toggleMenu] = useState(false)
    const active = expandMenu ? 'active' : ''

    const toggleHandler = () => {
        toggleMenu(!expandMenu)
      }

    return (
        <header className="main-header">
            <nav className={ "main-nav " + active }>
            <div className="brand-container">
                <a href="/" className="brand">
                    <img src={ Logo } alt="Brand Logo" className="icon" /> The Beloved's Blog
                </a>
            </div>

            <div className="links-container">
                <ul className="nav-links">
                <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                <li className="nav-item"><a href={ postUri } className="nav-link">Latest Post</a></li>
                <li className="nav-item"><a href={ archiveUri } className="nav-link">Archive</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                </ul>
            </div>

            <button className="btn btn-collapse" onClick={ toggleHandler }>
                <img src={ Xmark } alt="Close Menu" className="icon icon-xmark" />
                <img src={ Bars } alt="Expand Menu" className="icon icon-bars" />
            </button>
            </nav>
        </header>
    )
}

export default HeaderComponent