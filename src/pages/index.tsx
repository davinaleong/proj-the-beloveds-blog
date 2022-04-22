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
  //const { pages, featured, posts } = data
  console.log(data)

  const title: string = "The Beloved's Blog"
  const subtitle: string = "So you also are complete through your union with Christ, who is the head over every ruler and authority.\n\rCol 2:10 NLT"

  const post: Object = {
    title: "Lorem Ipsum",
    published_at: "2022-04-07",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas nihil ipsum aspernatur, voluptates vitae fuga, veritatis est ex quis exercitationem quod, quidem amet odit mollitia ad asperiores qui. Ab impedit nulla, cumque corrupti doloribus hic. Ducimus reprehenderit illo odit nemo commodi similique vel. Tempora, minima. Quo corrupti totam non&hellip;",
    slug: "lorem-ipsum"
  }

  const posts: Object[] = []
  for(let i = 0; i < 6; i++) {
    posts.push(post)
  }

  return (
    <MainLayout bgColor="bg-accent-1">
      <main className="main-content">
        <HeroComponent title={ title } subtitle={ subtitle } />

        <FeaturedPostComponent post={ post } />

        <LatestPostsComponent posts={ posts } />
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