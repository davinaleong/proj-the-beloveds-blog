import "../sass/main.scss"

import * as React from "react"
import { graphql } from "gatsby"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.component"
import FeaturedPostComponent from "../components/featured-post.component"
import LatestPostsComponent from "../components/latest-posts.component"

type AppProp = {
  data: any
}

// markup
const IndexPage = ({ data }) => {
  const { pages, featured, posts } = data.cms
  const pageData: Object = pages.data.length > 0 ? pages.data[0] : {}
  const meta: Object = {
    description: pageData.meta_description
  }

  const title: string = pageData.title
  const subtitle: string = pageData.subtitle

  const featuredData = featured.data.length > 0 ? featured.data[0] : {}

  return (
    <MainLayout bgColor="bg-accent-1" meta={ meta }>
      <main className="main-content">
        <HeroComponent title={ title } subtitle={ subtitle } />

        <FeaturedPostComponent post={ featuredData } showSummary={ true } />

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
            slug
            summary
            text
            published_at
        }
    }

    posts(first: 6) {
        data {
            title
            slug
            published_at
        }
    }
  }
}
`