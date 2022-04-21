import "../sass/main.scss"

import * as React from "react"
import { graphql } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.components"
import FeaturedPostComponent from "../components/featured-post.component"

// markup
const IndexPage = () => {
  const title = "The Beloved's Blog"
  const subtitle = "So you also are complete through your union with Christ, who is the head over every ruler and authority.\n\rCol 2:10 NLT"

  const post = {
    title: "Lorem Ipsum",
    published_at: "2022-04-07",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas nihil ipsum aspernatur, voluptates vitae fuga, veritatis est ex quis exercitationem quod, quidem amet odit mollitia ad asperiores qui. Ab impedit nulla, cumque corrupti doloribus hic. Ducimus reprehenderit illo odit nemo commodi similique vel. Tempora, minima. Quo corrupti totam non&hellip;",
    slug: "lorem-ipsum"
  }

  return (
    <MainLayout bgColor="bg-accent-1">
      <main className="main-content">
        <HeroComponent title={ title } subtitle={ subtitle } />

        <FeaturedPostComponent post={ post } />

        <section className="content-section bg-primary-light">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Latest Posts</h2>
            </header>

            <div className="post-list">
              <article className="post-item">
                <h3 className="post-title">Lorem Ipsum</h3>
                <p className="post-date">7 Apr 2022</p>
                <a href="/post" className="btn btn-link">View Post</a>
              </article>

              <article className="post-item">
                <h3 className="post-title">Lorem Ipsum</h3>
                <p className="post-date">7 Apr 2022</p>
                <a href="/post" className="btn btn-link">View Post</a>
              </article>

              <article className="post-item">
                <h3 className="post-title">Lorem Ipsum</h3>
                <p className="post-date">7 Apr 2022</p>
                <a href="/post" className="btn btn-link">View Post</a>
              </article>

              <article className="post-item">
                <h3 className="post-title">Lorem Ipsum</h3>
                <p className="post-date">7 Apr 2022</p>
                <a href="/post" className="btn btn-link">View Post</a>
              </article>

              <div className="btn-container align-center">
                <a href="/archive" className="btn btn-primary">View All</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}

export default IndexPage
