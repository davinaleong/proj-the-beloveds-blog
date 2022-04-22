import "../sass/main.scss"

import * as React from "react"
import dayjs from "dayjs"
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
  let postData: Object = {
    title: "",
    subtitle: "",
    text: "",
    published_at: "",
    meta_title: "",
    meta_description: "",
    slug: ""
  }
  console.log(posts.data[0])
  const params = new URLSearchParams(location.search);
  const slug: any = params.get("slug")
  if (posts.data.length > 0) {
    postData = posts.data[0]

    if (slug) {
      postData = posts.data.filter((post: any) => post.slug == slug)[0]
    }
  }
  console.log(slug, postData)

  const { title, subtitle, text, published_at, meta_title, meta_description } = postData
  const meta: Object = {
    title: `${config.meta.default.title} - ${meta_title}`,
    description: meta_description
  }
  
  let bgColor = "bg-primary-light"
  const publishedAt: string = dayjs(published_at).format("D MMM YYYY")

  let verseElement = null
  if (subtitle) {
    bgColor = "bg-accent-1"
    verseElement = <VerseComponent text={ subtitle } />
  }

  return (
    <MainLayout bgColor={ bgColor } meta={ meta }>
      <main className="main-content">
        <HeroComponent title={ title } subtitle={ publishedAt }/>
        { subtitle }
        <ContentComponent text={ text } />
      </main>
    </MainLayout>
  )
}

export default PostsPage

export const pageQuery = graphql`
query PostsPageQuery {
  cms {
    posts(first: 150) {
        data {
            title
            subtitle
            text
            slug
            published_at
        }
    }
  }
}
`