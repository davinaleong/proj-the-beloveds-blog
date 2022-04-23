import React, { useState } from "react"
import { Link } from "gatsby"

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
                <Link to="/" className="brand">
                    <img src={ Logo } alt="Brand Logo" className="icon" /> The Beloved's Blog
                </Link>
            </div>

            <div className="links-container">
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ postUri } className="nav-link">Latest Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ archiveUri } className="nav-link">Archive</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
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