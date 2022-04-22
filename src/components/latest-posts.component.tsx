import * as React from "react"
import dayjs from "dayjs"

// components
import PostItemComponent from "./post-item.component"
import LinkButtonComponent from "./link-button.component"

type AppProps = {
    posts: Object[]
}

const LatestPostsComponent = (props: any) => {
    const { posts } = props

    return (
        <section className="content-section bg-primary-light">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Latest Posts</h2>
            </header>

            <div className="post-list">
                { posts.map((post: Object, index: Number) => <PostItemComponent post={ post } key={ "pi" + index } />) }

                <div className="btn-container align-center">
                    <LinkButtonComponent label="View All" link="/archive"/>
                </div>
            </div>
          </div>
        </section>
    )
}

export default LatestPostsComponent