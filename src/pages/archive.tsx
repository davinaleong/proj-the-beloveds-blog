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

type AppProp = {
    data: any
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  render = () => {
    const { pages, featured, posts } = this.props.data.cms
    const pageData: Object = pages.data.length > 0 ? pages.data[0] : {}
    const meta: Object = {
        title: `${config.meta.default.title} - ${pageData.title}`,
        description: pageData.meta_description
    }
    const title: string =  pageData.title

    const featuredData = featured.data.length > 0 ? featured.data[0] : {}

    return (
      <MainLayout bgColor="bg-accent-1" meta={ meta }>
        <main className="main-content">
          <HeroComponent title={ title } />

          <FeaturedPostComponent post={ featuredData } showSummary={ false } />
        </main>
      </MainLayout>
    )
  }
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

    posts(first: 10) {
        data {
            title
            slug
            published_at
        }
    }
  }
}
`