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
import PostListComponent from "../components/post-list.component"
import PaginationComponent from "../components/pagination.component"
import LoaderComponent from "../components/loader.component"

const endpoint = `${config.apiEndPoint}blog/archive-list`

interface AppProps {
  location: any
  data: any
}

interface AppState {
  loading: boolean
  fetchedData: any
}

// markup
class ArchiveListPage extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      loading: true,
      fetchedData: {},
    };
  }

  componentDidMount() {
    const { location } = this.props
    const params = new URLSearchParams(location.search)
    let pageParam: any = params.get("page")
    if (!pageParam) {
      pageParam = 1
    }

    this.fetchData(location, pageParam)
  }

  fetchData = (location: any, pageParam: Number = 1) => {
    console.log("Fetch achive list data.")
    this.setState({ loading: true })

    const params = new URLSearchParams(location.search)
    let folderParam: any = params.get("folder")
    if (!folderParam) {
      folderParam = 2022
    }

    const archiveEndpoint = `${endpoint}/${folderParam}?page=${pageParam}`
    fetch(archiveEndpoint, { method: "GET" })
      .then((response: any) => response.json())
      .then((data: any) => this.setState({ loading: false, fetchedData: data }))
      .catch((err: any) => alert(err))
  }

  render() {
    const { location, data } = this.props
    let meta: any = {}
    let page: any = {}

    if (data.cms.pages.data.length > 0) {
      page = data.cms.pages.data[0]
      meta = {
        description: page.meta_description
      }
    }

    const { loading, fetchedData } = this.state
    const params = new URLSearchParams(location.search)
    let folder: any = params.get("folder")
    if (!folder) {
      folder = 2022
    }
    let content: any = (
      <main className="main-content">
        <HeroComponent title={ page.title } subtitle={ page.subtitle } />
        <LoaderComponent />
      </main>
    )
    let latestPost: Object = {}

    if (!loading) {
      const { page, featured, latest, posts } = fetchedData
      latestPost = latest[0]
      meta = {
        description: page.meta_description
      }

      let postListComponent = null
      if (posts.data.length > 0) {
        postListComponent = <PostListComponent title={ folder } posts={ posts.data } showButton={ false } isIndex={ false } />
      }
      
      const { current_page, last_page } = posts
      content = (
        <main className="main-content">
          <HeroComponent title={ page.title } subtitle={ page.subtitle } />
          <FeaturedPostComponent post={ featured } showSummary={ true } />
          { postListComponent }
          <PaginationComponent current={ current_page } last={ last_page } folder={ folder } fetchData={ this.fetchData }
          />
        </main>
      )
    }

    return (
      <MainLayout bgColor="bg-accent-1" loading={ loading } meta={ meta } latestPost={ latestPost }>
        { content }
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

export default ArchiveListPage