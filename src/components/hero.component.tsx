import * as React from "react"

// helpers
import BreakLinesHelper from "../helpers/break-lines.helper"

type AppProps = {
    title: string,
    subtitle: string,
    isIndex: boolean
}

const HeroComponent = (props: any) => {
    const { title,  subtitle, isIndex } = props
    const titleClass = isIndex ? "site-title" : "hero-title"

    let subtitleElement  =  null
    if (subtitle && typeof subtitle !== "undefined") {
        const lines = BreakLinesHelper(subtitle, "s")
        subtitleElement = <p className="hero-subtitle">{ lines }</p>
    }

    return (
        <section className="hero-section">
          <div className="container">
            <header className="section-header">
              <h1 className={ titleClass }>{ title }</h1>
              { subtitleElement }
            </header>
          </div>
        </section>
    )
}

export default HeroComponent