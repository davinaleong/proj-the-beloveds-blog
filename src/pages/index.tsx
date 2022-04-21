import "../sass/main.scss"

import * as React from "react"
import { graphql } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// markup
const IndexPage = ({ data }) => {
  const meta = {
    description: data.pages.data.meta_description
  }

  return (
    <MainLayout meta={meta} bgColor="bg-accent-1">
      <main className="main-content">
        <section className="hero-section">
          <div className="container">
            <header className="section-header">
              <h1 className="site-title">The Beloved's Blog</h1>
              <p className="hero-subtitle">
                So you also are complete through your union with Christ, who is the head over every ruler and authority.<br/>
                Col 2:10 NLT
              </p>
            </header>
          </div>
        </section>

        <section className="featured-section">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Featured Post</h2>
            </header>

            <article className="featured-post">
              <h3 className="post-title">Lorem Ipsum</h3>
              <p className="post-date">7 Apr 2022</p>
              <p className="post-description">
                <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Ut voluptas nihil ipsum aspernatur, <em>voluptates vitae fuga</em>, veritatis est ex quis exercitationem quod, <mark>quidem amet odit mollitia</mark> ad asperiores qui. Ab impedit nulla, cumque corrupti doloribus hic. Ducimus reprehenderit illo odit nemo commodi similique vel. Tempora, minima. Quo corrupti totam non&hellip;
              </p>
              <div className="btn-container">
                <a href="/post" className="btn btn-primary">View Post</a>
              </div>
            </article>
          </div>
        </section>

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

export const query = graphql`
query IndexPageQuery {
  pages(name: "Index") {
      data {
          name
          title
          subtitle
          text
          meta_title
          meta_description
      }
  }

  featured: posts(featured: true, first: 1) {
      data {
          title
          summary
          text
      }
  }

  posts(first: 6) {
      data {
          title
      }
  }
}
`
