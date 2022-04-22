import "../sass/main.scss"

import * as React from "react"
import { useSearchParams } from 'react-router-dom'
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
  const pageData: Object = pages.data.length > 0 ? pages.data[0] : {}
  const meta: Object = {
    description: pageData.meta_description
  }

  const title: string = pageData.title
  const subtitle: string = pageData.subtitle

  const featuredData = featured.data.length > 0 ? featured.data[0] : {}

  const params = new URLSearchParams(location.search);
  let current: any = params.get("page")
  if (current < 1) {
    current = 1
  }
  const postData = posts.data.splice(current - 1, config.perPage)

  return (
    <MainLayout bgColor="bg-accent-1" meta={ meta }>
      <main className="main-content">
        <HeroComponent title={ title } subtitle={ subtitle } />

        <FeaturedPostComponent post={ featuredData } showSummary={ false } />

        <PostListComponent title="All Posts" posts={ postData } showButton={ false } />

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