import "../sass/main.scss"

import * as React from "react"
import { graphql } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.component"
import VerseComponent from "../components/verse.component"
import ContentComponent from "../components/content.component"

type AppProp = {
  data: any
}

// markup
const PostsPage = ({ location, data }) => {
  const { posts } = data.cms
  const postData: Object = posts.data.length > 0 ? posts.data[0] : {}
  const meta: Object = {
    title: `${config.meta.default.title} - ${postData.title}`,
    description: postData.meta_description
  }

  const { title, subtitle, text } = postData
  let bgColor = "bg-primary-light"
  let verseElement = null
  if (subtitle) {
    bgColor = "bg-accent-1"
    verseElement = <VerseComponent text={ subtitle } />
  }

  return (
    <MainLayout bgColor={ bgColor } meta={ meta }>
      <main className="main-content">
        <HeroComponent title={ title }/>
        { subtitle }
        <ContentComponent text={ text } />
      </main>
    </MainLayout>
  )
}

export default PostsPage

export const pageQuery = graphql`
query PostsPageQuery($slug: String!) {
  cms {
    posts(slug: $slug, first: 1) {
        data {
            title
            slug
            summary
            text
            published_at
            meta_title
            meta_description
        }
    }
  }
}
`