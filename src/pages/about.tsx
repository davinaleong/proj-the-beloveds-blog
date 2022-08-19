import "../sass/main.scss"

import * as React from "react"
import { graphql } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.component"
import ContentComponent from "../components/content.component"
import LoaderComponent from "../components/loader.component"

const endpoint = `${config.apiEndPoint}blog/about`

interface AppProps {
  data: any
}

interface AppState {
  loading: boolean
  fetchedData: any
}

// markup
class AboutPage extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      loading: true,
      fetchedData: {},
    }
  }

  componentDidMount() {
    fetch(endpoint, { method: "GET" })
      .then((response) => response.json())
      .then((data) => this.setState({ loading: false, fetchedData: data }))
      .catch((err) => alert(err))
  }

  render() {
    const { data } = this.props
    let meta: any = {}
    let page: any = {}

    if (data.cms.pages.data.length > 0) {
      page = data.cms.pages.data[0]
      meta = {
        description: page.meta_description,
      }
    }

    const { loading, fetchedData } = this.state
    let content = (
      <main className="main-content">
        <LoaderComponent />
      </main>
    )
    let latestPost: Object = {}

    if (!loading) {
      const { latest } = fetchedData
      latestPost = latest[0]
      content = (
        <main className="main-content">
          <HeroComponent title={page.title} />
          <ContentComponent text={page.text} />
        </main>
      )
    }

    return (
      <MainLayout
        bgColor="bg-primary-light"
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
      pages(name: "About") {
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

export default AboutPage
