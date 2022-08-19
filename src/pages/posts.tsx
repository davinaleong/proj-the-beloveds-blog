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
import LoaderComponent from "../components/loader.component"

const endpoint: string = `${config.apiEndPoint}blog/posts/`

interface AppProps {
  location: any
  data: any
}

interface AppState {
  loading: boolean
  fetchedData: any
}

// markup
class PostsPage extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      loading: true,
      fetchedData: {},
    }
  }

  componentDidMount() {
    const { location } = this.props
    const params: any = new URLSearchParams(location.search)
    const slug: any = params.get("slug")

    fetch(`${endpoint}${slug}`, { method: "GET" })
      .then((response: any) => response.json())
      .then((data: any) => this.setState({ loading: false, fetchedData: data }))
      .catch((err: any) => alert(err))
  }

  render() {
    const { data } = this.props
    let meta: any = {}
    if (data.cms.pages.data.length > 0) {
      const page = data.cms.pages.data[0]
      meta = {
        description: page.meta_description,
      }
    }

    const { loading, fetchedData } = this.state
    let content = (
      <main className="main-content">
        <HeroComponent title="Post" />
        <LoaderComponent />
      </main>
    )
    let bgColor = "bg-primary-light"
    let latestPost: Object = {}

    if (!loading) {
      const { latest, posts } = fetchedData
      latestPost = latest[0]
      if (posts && posts.length > 0) {
        const post = posts[0]
        meta = {
          title: `${config.meta.default.title} - ${post.meta_title}`,
          description: post.meta_description,
        }
        let verseElement = null
        if (post.subtitle) {
          bgColor = "bg-accent-1"
          verseElement = <VerseComponent text={post.subtitle} />
        }
        content = (
          <main className="main-content">
            <HeroComponent title={post.title} />
            {verseElement}
            <ContentComponent text={post.text} />
          </main>
        )
      }
    }

    return (
      <MainLayout
        bgColor={bgColor}
        loading={loading}
        meta={meta}
        latestPost={latestPost}
      >
        {content}
      </MainLayout>
    )
  }
}

export const query = graphql`
  query {
    cms {
      pages(name: "Index") {
        data {
          title
          text
          subtitle
          name
          meta_title
          meta_description
        }
      }
    }
  }
`

export default PostsPage
