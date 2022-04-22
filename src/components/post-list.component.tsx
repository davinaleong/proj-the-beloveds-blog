import * as React from "react"

// components
import PostItemComponent from "./post-item.component"
import LinkButtonComponent from "./link-button.component"

type AppProps = {
    title: string,
    posts: Object[],
    showButton: boolean
}

const PostListComponent = (props: any) => {
    const { title, posts, showButton } = props
    let button: any = null
    if (showButton) {
      button = (
        <div className="btn-container align-center">
          <LinkButtonComponent label="View All" link="/archive?page=1"/>
        </div>
      )
    }

    return (
        <section className="content-section bg-primary-light">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">{ title }</h2>
            </header>

            <div className="post-list">
                { posts.map((post: Object, index: Number) => <PostItemComponent post={ post } key={ "pi" + index } />) }

                { button }
            </div>
          </div>
        </section>
    )
}

export default PostListComponent