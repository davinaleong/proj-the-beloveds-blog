import "../sass/main.scss"

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.component"
import VerseComponent from "../components/verse.component"
import ContentComponent from "../components/content.component"
import LoaderComponent from "../components/loader.component"

const params = new URLSearchParams(location.search)
const slug: any = params.get("slug")
const endpoint = `${config.apiEndPoint}blog/posts/${slug}`

type AppProp = {
    data: any
}

// markup
class PostsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: {}
      };
    }
  
    componentDidMount() {
      fetch(endpoint, { method: "GET" })
        .then(response => response.json())
        .then(data => this.setState({ loading: false, data: data }))
        .catch(err => alert(err))
    }
  
    render() {
      const { loading, data } = this.state
      let content = (
        <main className="main-content">
          <LoaderComponent />
        </main>
      )
      let bgColor = "bg-primary-light"
      let meta: Object = {}
      let latestPost: Object = {}
  
      if (!loading) {
        const { latest, posts } = data
        latestPost = latest[0]
        if (posts && posts.length > 0) {
          const post = posts[0]
          meta = {
            title: `${config.meta.default.title} - ${post.meta_title}`,
            description: post.meta_description
          }
          let verseElement = null
          if (post.subtitle) {
            bgColor = "bg-accent-1"
            verseElement = <VerseComponent text={ post.subtitle } />
          }
          content = (
            <main className="main-content">
              <HeroComponent title={ post.title } />
              { verseElement }
              <ContentComponent text={ post.text } />
            </main>
          )
        }
      }
  
      return (
        <MainLayout bgColor={ bgColor } loading={ loading } meta={ meta } latestPost={ latestPost }>
          { content }
        </MainLayout>
      )
    }
  }
  
  export default PostsPage