import * as React from "react"

// helpers
import BreakLinesHelper from "../helpers/break-lines.helper"

type AppProps = {
    title: String,
    subtitle: String
}

const HeroComponent = (props: any) => {
    const { title,  subtitle } = props
    let heroSubtitle  =  null
    if (subtitle && typeof subtitle !== "undefined") {
        const lines = BreakLinesHelper(subtitle, "s")
        heroSubtitle = <p className="hero-subtitle">{ lines }</p>
    }

    return (
        <section className="hero-section">
          <div className="container">
            <header className="section-header">
              <h1 className="site-title">{ title }</h1>
              { heroSubtitle }
            </header>
          </div>
        </section>
    )
}

export default HeroComponent