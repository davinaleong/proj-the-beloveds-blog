import * as React from "react"

// components
import PostItemComponent from "./post-item.component"
import ButtonComponent from "./button.component"

type AppProps = {
    title: string,
    posts: Object[],
    showButton: boolean,
    isIndex: boolean
}

const PostListComponent = (props: any) => {
    const { title, posts, showButton, isIndex } = props
    let button: any = null
    if (showButton) {
      button = (
        <div className="btn-container align-center">
          <ButtonComponent label="View All" link="archiveFolder" className="btn btn-primary"/>
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
                { posts.map((post: Object, index: Number) => <PostItemComponent post={ post } isIndex={ isIndex } key={ "pi" + index } />) }

                { button }
            </div>
          </div>
        </section>
    )
}

export default PostListComponent