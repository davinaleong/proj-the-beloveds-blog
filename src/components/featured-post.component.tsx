import * as React from "react"
import dayjs from "dayjs"

// helpers
import PostUrlHelper from "../helpers/post-url.helper"

type AppProps = {
    post: Object
}

const FeaturedPostComponent =  (props: any) => {
    const { post } = props
    const { title,  published_at, summary, slug } = post

    const publishedAt: string = dayjs(published_at).format("D MMM YYYY")
    const link: string = PostUrlHelper(slug)

    return (
        <section className="featured-section">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Featured Post</h2>
            </header>

            <article className="featured-post">
              <h3 className="post-title">{ title }</h3>
              <p className="post-date">{ publishedAt }</p>
              <p className="post-description">{ summary }</p>
              <div className="btn-container">
                <a href={ link } className="btn btn-primary">View Post</a>
              </div>
            </article>
          </div>
        </section>
    )
}

export default FeaturedPostComponent