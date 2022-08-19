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
import FolderListComponent from "../components/folder-list.component"
import LoaderComponent from "../components/loader.component"

const endpoint: string = `${config.apiEndPoint}blog/archive-folder`

interface AppProps {
  data: any
}

interface AppState {
  loading: boolean
  fetchedData: any
}

// markup
class ArchiveFolderPage extends React.Component<AppProps, AppState> {
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
        description: page.meta_description,
      }
    }

    const { loading, fetchedData } = this.state
    let content: any = (
      <main className="main-content">
        <HeroComponent
          title={page.title}
          subtitle={page.subtitle}
        />
        <LoaderComponent />
      </main>
    )
    let latestPost: Object = {}

    if (!loading) {
      const { page, featured, latest, folders } = fetchedData
      latestPost = latest[0]
      meta = {
        description: page.meta_description,
      }

      content = (
        <main className="main-content">
          <HeroComponent
            title={page.title}
            subtitle={page.subtitle}
          />
          <FeaturedPostComponent
            post={featured}
            showSummary={true}
          />
          <FolderListComponent folders={folders} />
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
      pages(name: "Archive") {
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

export default ArchiveFolderPage
