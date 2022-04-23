import "../sass/main.scss"

import * as React from "react"
import { graphql } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.component"
import FeaturedPostComponent from "../components/featured-post.component"
import PostListComponent from "../components/post-list.component"
import PaginationComponent from "../components/pagination.component"

type AppProp = {
  data: any
}

// markup
const ArchivePage = ({ location, data }) => {
  const { pages, featured, posts } = data.cms

  const latestPost = posts.data.length > 0 ? posts.data[0] : {}

  const pageData: Object = pages.data.length > 0 ? pages.data[0] : {}
  const { title, meta_title, meta_description } = pageData
  const meta: Object = {
    title: `${config.meta.default.title} - ${meta_title}`,
    description: meta_description
  }

  const featuredData = featured.data.length > 0 ? featured.data[0] : {}

  const params = new URLSearchParams(location.search);
  let current: any = params.get("page")
  if (current < 1) {
    current = 1
  }
  const offset = (current - 1) * config.perPage
  const postData = posts.data.splice(offset, config.perPage)

  return (
    <MainLayout bgColor="bg-accent-1" meta={ meta } latestPost={ latestPost }>
      <main className="main-content">
        <HeroComponent title={ title } />

        <FeaturedPostComponent post={ featuredData } showSummary={ false } isIndex={ false } />

        <PostListComponent title="All Posts" posts={ postData } showButton={ false } isIndex={ false } />

        <PaginationComponent current={ current } count={ posts.paginatorInfo.count }/>
      </main>
    </MainLayout>
  )
}

export default ArchivePage

export const pageQuery = graphql`
query ArchivePageQuery {
  cms {
    pages(name: "Archive") {
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

    posts(first: 150) {
        data {
            title
            slug
            published_at
        }
        paginatorInfo {
          hasMorePages
          currentPage
          count
        }
    }
  }
}
`