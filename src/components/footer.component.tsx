import * as React from "react"
import dayjs from "dayjs"

// config
import config from "../data/config"

const FooterComponent = () => {
    const startedAt: string = dayjs(config.startedAt).format("YYYY")
    const now: string = dayjs().format("YYYY")
    
    let period = startedAt
    if (parseInt(startedAt) != parseInt(now)) {
        period = `${startedAt} - ${now}`;
    }

    return (
        <footer className="main-footer">
            <div className="container">
            <p className="copyright">The Beloved's Blog &copy; Davina Leong { period }</p>
            </div>
        </footer>
    )
}

export default FooterComponent