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
import LatestPostsComponent from "../components/latest-posts.component"

type AppProp = {
  data: any
}

// markup
const IndexPage = ({ data }) => {
  const { pages, featured, posts } = data.cms
  const pageData = pages.data.length > 0 ? pages.data[0] : {}

  const title: string = pageData.title
  const subtitle: string = pageData.subtitle

  const featuredData = featured.data.length > 0 ? featured.data[0] : {}

  return (
    <MainLayout bgColor="bg-accent-1">
      <main className="main-content">
        <HeroComponent title={ title } subtitle={ subtitle } />

        <FeaturedPostComponent post={ featuredData } />

        <LatestPostsComponent posts={ posts.data } />
      </main>
    </MainLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageQuery {
  cms {
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
}
`