import "../sass/main.scss"

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.component"
import FeaturedPostComponent from "../components/featured-post.component"
import PostListComponent from "../components/post-list.component"

import LoaderComponent from "../components/loader.component"

const endpoint: string = `${config.apiEndPoint}blog`

interface AppProps {
  data: any
}

interface AppState {
  loading: boolean
  fetchedData: any
}

// markup
class IndexPage extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      loading: true,
      fetchedData: {},
    }
  }

  componentDidMount() {
    fetch(endpoint, { method: "GET" })
      .then((response: any) => response.json())
      .then((data: any) => this.setState({ loading: false, fetchedData: data }))
      .catch((err: any) => alert(err))
  }

  render() {
    const { data } = this.props
    let meta: any = {}
    let page: any = {}

    if (data.cms.pages.data.length > 0) {
      page = data.cms.pages.data[0]
      meta = {
        description: page.meta_description
      }
    }

    const { loading, fetchedData } = this.state
    let content: any = (
      <main className="main-content">
        <HeroComponent
            title={page.title}
            subtitle={page.subtitle}
            isIndex={true}
          />
        <LoaderComponent />
      </main>
    )
    
    let latestPost: Object = {}

    if (!loading) {
      const { featured, latest } = fetchedData
      latestPost = latest[0]
      content = (
        <main className="main-content">
          <HeroComponent
            title={page.title}
            subtitle={page.subtitle}
            isIndex={true}
          />
          <FeaturedPostComponent
            post={featured}
            showSummary={true}
            isIndex={true}
          />
          <PostListComponent
            title="Latest Posts"
            posts={latest}
            showButton={true}
            isIndex={true}
          />
        </main>
      )
    }

    return (
      <MainLayout
        bgColor="bg-accent-1"
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

export default IndexPage
