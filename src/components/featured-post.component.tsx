import * as React from "react"
import dayjs from "dayjs"

// helpers
import PostUrlHelper from "../helpers/post-url.helper"

// components
import ButtonComponent from "./button.component"

type AppProps = {
    post: Object,
    showSummay: boolean,
    isIndex: boolean
}

const FeaturedPostComponent =  (props: any) => {
    const { post, showSummary, isIndex } = props
    const { title,  published_at, summary, slug } = post

    let summaryElement: any = null
    if (showSummary) {
      summaryElement = (<p className="post-description">{ summary }</p>)
    }
    const publishedAt: string = dayjs(published_at).format("D MMM YYYY")
    const link: string = isIndex ? PostUrlHelper(slug) : "./../" + PostUrlHelper(slug)

    return (
        <section className="featured-section">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Featured Post</h2>
            </header>

            <article className="featured-post">
              <h3 className="post-title">{ title }</h3>
              <p className="post-date">{ publishedAt }</p>
              { summaryElement }
              <div className="btn-container">
                <ButtonComponent label="View Post" link={ link } className="btn btn-primary"/>
              </div>
            </article>
          </div>
        </section>
    )
}

export default FeaturedPostComponent