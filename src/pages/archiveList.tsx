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
import PaginationComponent from "../components/pagination.component"
import LoaderComponent from "../components/loader.component"

// helpers
import ArchiveListUrlHelper from "../helpers/archive-list-url.helper"

const endpoint = `${config.apiEndPoint}blog/archive-list`

// markup
class ArchiveListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {},
    };
  }

  componentDidMount() {
    const params = new URLSearchParams(location.search);
    let folder: any = params.get("folder")
    if (!folder) {
      folder = 2022
    }

    let page: any = params.get("page")
    if (!page) {
      page = 1
    }

    const archiveEndpoint = `${endpoint}/${folder}?page=${page}`;
    fetch(archiveEndpoint, { method: "GET" })
      .then(response => response.json())
      .then(data => this.setState({ loading: false, data: data }))
      .catch(err => alert(err))
  }

  render() {
    const { loading, data } = this.state
    const params = new URLSearchParams(location.search);
    let folder: any = params.get("folder")
    if (!folder) {
      folder = 2022
    }
    let content: any = (
      <main className="main-content">
        <LoaderComponent />
      </main>
    )
    let meta: Object = {}
    let latestPost: Object = {}

    if (!loading) {
      const { page, featured, latest, posts } = data
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
          <HeroComponent title={ page.title } subtitle={ page.subtitle } isIndex={ true } />
          <FeaturedPostComponent post={ featured } showSummary={ true } isIndex={ true } />
          { postListComponent }
          <PaginationComponent current={ current_page } last={ last_page } folder={ folder }
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

export default ArchiveListPage